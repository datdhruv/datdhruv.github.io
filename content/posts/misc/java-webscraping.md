---
layout: post
title:  "Notes on making a Web Scraper in Java"
description: ""
date:   2023-07-05 12:00:00 +0400
tags: ["webscraping", "java"]
type: post
showTableOfContents: true
---

## First things first. A Web Request Library

Before we can start to scrape anything, we will need a way to send and receive web requests. There are multiple ways to do this in java with various libraries, however we will use `java.net.http.HttpClient` which was released with java 11.

Let's create a simple request:
```java
package org.datdhruv;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        var client = HttpClient.newHttpClient();


        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://datdhruv.me"))
                .build();

        var response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());

    }
}
```

First we import `java.net.URI`, `java.net.http.HttpClient`, `java.net.http.HttpRequest`, `java.net.http.HttpResponse`. These are required for our requests to run.

The HttpRequest Object builds a query with the specified uri. This can be passed to the client to get a response. `HttpResponse.BodyHandlers.ofString();` allows us to use the response body and parse it as a utf-8 encoded string.

If the query succeeds, you get the result in a HttpResponse object, from which you can operate on using methods like `.body()`. 

If the query fails, it throws an exception which needs to be handled. Hence we add the IOException and InterruptedException.

[Here's the documentation for the same](https://openjdk.org/groups/net/httpclient/intro.html)

##### to escape % in a java string, you need to double it
```java
private String payload = "{\"requests\": [{\"indexName\": \"prod_all_launched_products_term_optimization\",\"params\": \"query=%s&hitsPerPage=5&facetFilters=%%5B%%5B%%22allLanguages%%3AEnglish%%22%%5D%%5D\"}]}";
```

## Auth

```java
String encoding = Base64Encoder.encode ("test1:test1");
HttpPost httppost = new HttpPost("http://host:post/test/login");
httppost.setHeader("Authorization", "Basic " + encoding);

System.out.println("executing request " + httppost.getRequestLine());
HttpResponse response = httpclient.execute(httppost);
HttpEntity entity = response.getEntity();
```

## Returning from a thread
You cant return from a thread. The workaround is to create a run method that writes to an internal variable. Then have a get method defined on that variable.

Usually you would do it something like this

```java
public class Foo implements Runnable {
private volatile int value;

     @Override
     public void run() {
        value = 2;
     }

     public int getValue() {
         return value;
     }
}
```

Then you can create the thread and retrieve the value (given that the value has been set)

```java
Foo foo = new Foo();
Thread thread = new Thread(foo);
thread.start();
thread.join();
int value = foo.getValue();
```
tl;dr a thread cannot return a value (at least not without a callback mechanism). You should reference a thread like an ordinary class and ask for the value.

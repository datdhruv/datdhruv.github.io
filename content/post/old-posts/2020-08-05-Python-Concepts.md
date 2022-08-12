---
layout: post
title:  "Intermediate Python Concepts"
description: "Creating and using classes, and lambda functions"
date:   2020-08-05 12:00:00 +0400
categories: python
---
## Classes and objects

* creating and using classes    

```python
class circle(object):
    def __init__(self,radius,color):
        self.radius = radius
        self.color = color
RedCircle = circle(10,"Red")
```

* Methods are functions which operate on the class instances

```python
class rectangle(object):
    def __init__(self, height, width, color):
        self.height = height
        self.width = width
        self.color = color
    def add_height(self,h):
        self.height = self.height + h
        return(self.radius)
```

## List Comprehension
```python
my_function = lambda a, b, c : a + b
my_function(1, 2, 3)
```

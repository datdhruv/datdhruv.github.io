---
title: "How does Router know where to forward packet"
date: 2023-08-17 22:00:00 +0400
description: "A small brief on NAPT which answers a question I have always had while studting Computer Networks"
tags: ["computer networks"]
type: post
showTableOfContents: true
---

### [(mirror copy)](https://superuser.com/questions/105838/how-does-router-know-where-to-forward-packet)

## The question

If several computers with local addresses (192.168.0.#) are connected to a router and each computer opens a web browser and requests a page over HTTP, when these TCP:80 packets are sent out, the router switches the local address with the static IP of the router (i.e. Provider given IP) so the server can reply to the appropriate address.

But how does the router know to which computer to forward the HTTP reply, since the TCP header does not contain the local IP address (does it?), and all computers are using port 80?

Does this have anything to do with the MAC addresses?

How exactly does this work?

## The answer 


Most home routers use a special-case of NAT called PAT.

You'll also see it referred to as NAPT, or IP Masquerading. All three of the latter terms mean the same thing in general use. (The acronyms - Network Address Translation / Port Address Translation / Network Address Port Translation)

When the packet goes out from your internal machine, the source address is rewritten as you are aware. The source port is also changed, usually to a high number, and the router keeps an address translation table.

For example, let's say you have a client machine that goes to www.google.com. Your computer (e.g., 192.168.1.100) looks that address up and makes a TCP connection to 72.14.204.147 on port 80 from your internal IP address, using a random source port.

To your computer, the connection looks like this:

`192.168.1.100:37641   <-->  72.14.204.147:80`

Your computer sends the packet to the router, which picks a new random high port and rewrites the packet. Each outbound connection gets its own port on the router. The router then forwards the packet on to your ISP after adding it to its connection table:

```
PrivateIP        PrivatePort   PublicIP      PublicPort    Remote          RemotePort
-------------    ----------    -----------   -----------   ----------      -----------
192.168.1.100    37641         *10.6.23.5    59273         72.14.204.147   80
```

*For example purposes, I used an address starting with 10, but these aren't publicly routable. The table is also somewhat oversimplified.

To google, the connection looks like this:

`10.6.23.5:59273   <-->  72.14.204.147:80`

Google will send it's reponse to `10.6.23.5` on port `59273`. Your router then looks up that information in the table and forwards the packet on to `192.168.1.100:37641`.

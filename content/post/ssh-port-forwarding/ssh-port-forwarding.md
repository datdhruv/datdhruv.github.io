---
title:  "Why SSH port Forwarding gives you superpowers"
date:   2021-05-19 12:00:00 +0400
description: "Port Forwarding allows you to make a port on a computer behave like it is part of some other computer, and trust me it can give you Superpowers"
categories: ssh
weight: 10
---

## **What is Port Forwarding?**

Port Forwarding allows you to make a port on a computer behave like it is part of some other computer.

Say you are running a website on a computer A, on `localhost:8080`, you can forward this port to another computer B and then any connection to `computer-B:8080` will be **tunneled** back to computer A.

This was an example of local port forwarding.

You can go the other way round as well, having a website run on `computer-B:8080` and tunnel it to the Computer A. This is called remote port forwarding.

## A little more Explanation

Let us consider the "tunnel". 

The tunnel has a start and an end and the traffic is tunneled from start to end.

When the tunnel ends at our local Machine host, it's called a local port forward (Tunnel ends at Local port) whereas when the tunnel starts at local port & ends at the remote port it's called remote port forwarding

---

The first IP is for specifying access.

Who has access? `localhost` or anyone on the network?

While in local port forwarding, you can have a setup wherein only you, on your own machine can access this website. There can be another arrangement wherein you can allow others on your network to access the tunnel/local port forward. In this situation they will access it via `yourip:forward-binded-port`

Same for remote. If an ip is specified then only access to remote tunnel. No other ip on the network can access this IP address.

---

When you use the -L flag, you can **bind** the remote port to the local port and listen to incoming connections on that port

```bash
-L [bind_address:]port:host:hostport
-L [bind_address:]port:remote_socket
-L local_socket:host:hostport
-L local_socket:remote_socket
```

Specifies that connections to the given TCP port or Unix socket on the local (client) host are to be forwarded to the given host and port, or Unix socket, on the remote side. **This works by allocating a socket to listen to either a TCP port on the local side, optionally bound to the specified bind_address, or to a Unix socket.** Whenever a connection is made to the local port or socket, the connection is forwarded over the secure channel, and a connection is made to either host port hostport, or the Unix socket remote_socket, from the remote machine.

Port forwardings can also be specified in the configuration file. Only the superuser can forward privileged ports.  IPv6 addresses can be specified by enclosing the address in square brackets. 

By default, the local port is bound in accordance with the GatewayPorts setting.  However, an explicit bind_address may be used to bind the connection to a specific address.  The bind_address of `localhost` indicates that the listening port be bound for local use only, while an empty address or `*` indicates that the port should be available from all interfaces.

If remote port forwarding does not work, it is most likely because GatewayPorts is set to no in the sshd_config file.

Remember, in local port forwarding, A request to my computer's port is *forwarded*  to a remote computer's port and in remote port forwarding, requests to a remote computer's port are *forwarded* to my computer's port.

This means that the meaning of host varies depending upon if the the port forwarding is local or remote. In local port forwarding, the host is the ssh-server. Whereas in remote port forwarding the host is the ssh-client (host is the one which *hosts something on a port*)

**NOTE**: Sometimes you need to explicitly mention 127.0.0.1/localhost (I have experienced this on windows). 

---

### The VPN functionality

**This superpower can be used to tunnel connections to various sites that are not accessible to your local computer!!** These might be databases or protected webservers.

```bash
# The folloiwing tunnel/forward any network traffic origination from your local computer
# to the super secret website's port 5432
ssh -L 127.0.0.1:5000:someSuperSecretSecretWebsite.com:5432 user@machine
```

---

You can further forward ports through jump servers.

```bash
ssh -L local_socket:host:hostport user@machine1 ssh -L local_socket:host:hostport user@machine2
```
---

## Forwarding with an already established ssh connection

Note: `~` is the escape sequence for ssh by default. If it doesnt work immediately, you may need to press enter once and the try entering `~`

`~ C` Brings up a (local) ssh shell, wherein you can then ask for port forwarding the same way we did earlier.

```bash
-L [bind_address:]port:host:hostport
-R [bind_address:]port:host:hostport
```

## Further you can stop the port forwarding

Enter the ssh command mode, then input the forwarding command with a leading **K**

```bash
-KL [bind_address:]port
-KR [bind_address:]port
```

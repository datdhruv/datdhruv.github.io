---
layout: post
title:  "Python Sockets"
description: "Simple programming with the python sockets library"
date:   2020-08-11 12:00:00 +0400
categories: python
---

# Network Sockets

## Server side

```python
import socket
import threading

HEADER = 64
# Choose a port
PORT = 5050
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"

# Check your ip address using ifconfig/ipconfig/ip addr
# SERVER = "192.168.1.114"

# To get based on dynamic hostname
# SERVER = socket.gethostbyname(socket.gethostname())

# Symbolic empty string signifies all availiable interfaces
SERVER = ''

ADDR = (SERVER, PORT)

# What kind of address are we going to look for in the connections
# SOCK_Stream: Streaming data over the socket
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# binds the server to the port. first arguemnt of bind is a tuple
server.bind((SERVER, PORT))

def handle_client(conn, addr):
    """
    We are not doing much with the address

    But the object conn of type socket, that is the read deal.
    You see, that is the connection/connected object
    That is like the io stream
    conn.doThis conn.doThat and other shenanigans

    :param conn:
    :param addr:
    :return:
    """
    print(f"[NEW CONNECTION] {addr} connected.")

    connected = True
    while connected:
        # Here the first message from the client will always be the length of the header
        # knock knock protocol
        msg_length = conn.recv(HEADER).decode("utf-8")

        # The first message comes in as an empty string. (connection succesful msg)
        # To get around that, we check if the string is empty or not.
        if msg_length:
            msg_length = int(msg_length)

            # Actual message
            msg = conn.recv(msg_length).decode(FORMAT)

            if (msg == "!DISCONNECT"):
                connected = False

            print(f"[{addr}] {msg}")
            conn.send("Msg Recv!".encode(FORMAT))

    conn.close()

def start():
    '''
    Listen is the actual thing that makes our server, "our server"
    That and the server.accept() method
    '''

    print("[Starting] server is starting")
    server.listen()

    print(f"[SERVER HAS STARTED] Listening on {SERVER}")

    while True:
        # Wait for new connection
        conn, addr = server.accept()
        thread = threading.Thread(target=handle_client,args=(conn, addr))
        # Notice that we dont have handle_client() and arguemnts to it are passed by args()

        thread.start()
        print(f"[ACTIVE CONNECTIONS] {threading.activeCount() - 1}")

start()
```


## Client side
```python
import socket

HEADER = 64
# Choose a port
PORT = 5050
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"
# Check your ip address using ifconfig/ipconfig/ip addr
SERVER = "192.168.1.114"
ADDR = (SERVER, PORT)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

def send(msg):
    message = msg.encode('utf-8')
    msg_length = len(message)

    send_length = str(msg_length).encode(FORMAT)
    send_length += b' ' * (HEADER - len(send_length))

    client.send(send_length)
    client.send(message)
    print(client.recv(2048).decode(FORMAT))

send("Hello world")
send("YOLO")
send("LALA LAND")
send(DISCONNECT_MESSAGE)
```

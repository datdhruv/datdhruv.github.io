---
title:  "Linux as a Backend"
date:   2021-12-02 22:15:00 +0400
description:    "Abstracting 'User Shell' from the 'Terminal'"
categories: [linux, Epiphanies]
---

After accessing the linux server in the creative lab and then setting up my blog site on a VBox VM, using port-binding, I have started to feel like using whatever Desktop OS (Windows/MacOS/Linux) is just fine. 

[Why SSH Port Forwarding gives you Superpowers]({% post_url ssh-port-forwarding %})

Most of the usage of this kind of work will be via the terminal itself.

I am however still struggling with how to use desktop linux, so as to be that one guy who propogates Linux use on the desktop.

Windows is used everywhere, and admittedly it is much easier to set some stuff like virtualbox up, and get working fast, so that complicates the issue further.

I also want to use Linux, because I am really comfortable with how it works and I know in depth how it **might** work, or how things might be set up.

---

Think of the Desktop OS as a frontend, and Linux as the backend.

The frontend has different set of goals, outcomes and expectations whereas the backend has it's own goals, outcomes and expectations.

And in any scenario, you will be accessing most tools through the terminal, so it doesn't matter what you frontend you use.

---

### An aside on using software that your host may not allow you to run

Well, in any case, you can always download a virtualization platform and run it on linux!

For example, some time ago I had issues running qbittorrent on windows. It would be flagged by the antivirus and would be uninstalled immediately.

And alternative to this *restriction* is to just install qbittorrent in a Linux VM and get what you want with that. It is a heavier alternative, but well it is *an* alternative!
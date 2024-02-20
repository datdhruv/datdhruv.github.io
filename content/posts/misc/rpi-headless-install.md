---
title:  "Installing kali linux on Raspberry pi when you have no monitor"
description: "No Monitor install of raspberry pi"
date: 2019-12-25 12:00:00 +0400
categories: ["ssh"]
type: post
---

# Installing Kali linux on Raspberry Pi

1. Flash the image on to the sd card (I recommend using balena etcher)
2. Before putting the SD card into the pi, in the boot folder, create a ssh file (just touch ssh in the boot folder)
3. now come the more tricky part. connect the pi to the router (with a wire) and then ssh into it.
4. use nmtui  to to set up the network
5. now you have to enable ssh at each subsequent boot. This is done using `sudo systemctl enable ssh.service`

And you are done! ✨🎉🎊🎆
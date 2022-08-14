---
title:  "A list of (unix) environment variables on your system"
date:   2022-08-14 22:20:00 +0400
description: "The man pages for environment variables like $PATH"
categories: [man-pages]
---

On Linux, man 7 environ describes a number of common environment variables, and gives references to other man pages which describe them in more detail. Equivalents exist on other systems; see for example the FreeBSD version. (Historically, Unix V7 had an equivalent in section 5; the BSDs have had this in section 7 since at least BSD4.3.)

In general, to look through all the man pages which mention a given environment variable, you can use man -K, which runs a full-text search in all the installed man pages’ sources, with the -w and -i options (which respectively list man pages instead of viewing them, and match the strings’ case):

`man -Kiw TZ`
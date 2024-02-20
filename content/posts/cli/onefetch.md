---
title: "Onefetch"
description: "Command line tool to get information about your git repository"
date: 2022-01-19 00:52:00 +0400
tags: ["cli", "tools"]
type: post
---

Onefetch is a command-line Git information tool written in Rust that displays project information and code statistics for a local Git repository directly on your terminal. The tool is completely offline - no network access is required.

By default, the repo's information is displayed alongside the dominant language's logo, but you can further configure onefetch to instead use an image - on supported terminals -, a text input or nothing at all.

It automatically detects open source licenses from texts and provides the user with valuable information like code distribution, pending changes, number of dependencies (by package manager), top contributors (by number of commits), size on disk, creation date, LOC (lines of code), etc.

Onefetch can be configured via command-line flags to display exactly what you want, the way you want it to: you can customize ASCII/Text formatting, disable info lines, ignore files & directories, output in multiple formats (Json, Yaml), etc.

You can check out this amazing commandline tool [here](https://github.com/o2sh/onefetch)
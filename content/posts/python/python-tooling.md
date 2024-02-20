---
layout: post
title:  "Python tools"
description: "Some Amazing Python tools"
date:   2021-01-05 12:00:00 +0400
categories: python
showTableOfContents: true
---

# Index
1. [pydoc](#pydoc)
2. [Pip](#pip)
3. [Setuptools](#setuptools)
4. [json.tool](#json-tool)
5. [argparse](#argparse)
6. [pyinstaller](#pyinstaller)
7. [Note on python packages](#python-packages)
8. [kivy](#kivy)
9. [Preferred LSP](#preferred-lsp)


### pydoc
To get help with used defined functions and classes, just run `pydoc`

eg:

```python
# foo.py

def bar():
  """this is the docstring for bar()"""
  print 'hello'


def baz():
  """this is the docstring for baz()"""
  print 'world'
```


After Running `pydoc`:

```
$ pydoc foo # Note do not include the .py extention
Help on module foo:

NAME
    foo

FILE
    /path/to/foo.py

FUNCTIONS
    bar()
        this is the docstring for bar()

    baz()
        this is the docstring for baz()
```


You can also generate an HTML help file:

```
$ pydoc -w foo
wrote foo.html
```

When working with larger projects with modules, you need to specify the fully qualified package name to pydoc

```
# file path/to/module/submodule.py
$ pydoc path.to.module.submodule

# If init.py is present, calling pydoc on the higher module works too
# path/to/module/__init__.py
$ pydoc path.to.module  # shows doc in __init__.py
```

**Important remember** pydoc will call only system docs, to call pydoc while in a *virtualenv*, you need to call `python -m pydoc module_name`

### Pip

Did you know you can install packages that are not in the PyPI with pip install? It needs a setup.py/setup.cfg at the base of the pacakge. (which you need anyway while publishing a python package) But other than that you are all set!

#### pip install "git+protocol://version-control"

eg:

``` git
# General syntax
pip install "git+https://git.example.com/MyProject.git"

# Over ssh
git install "git+ssh://git.example.com/MyProject"

# Local git repo
git install "git+file:///home/user/projects/MyProject"
```

You can also pass a branch name, a commit hash, a tag name or a git ref is possible like so:

``` git
git+https://git.example.com/MyProject.git@main#egg=MyProject
git+https://git.example.com/MyProject.git@v1.0#egg=MyProject
git+https://git.example.com/MyProject.git@da39a3ee5e6b4b0d3255bfef95601890afd80709#egg=MyProject
git+https://git.example.com/MyProject.git@refs/pull/123/head#egg=MyProject
```

#### pip install Local/file/name

You can also install local files by doing:
``` git
python -m pip install path/to/SomeProject
```

#### “EDITABLE” INSTALLS
“Editable” installs are fundamentally “setuptools develop mode” installs.

### setuptools 
*For building packages for pip*

<details markdown=1>
<summary>Example configuration</summary>

pyproject.toml

``` 
[build-system]
requires = ["setuptools", "wheel"]
build-backend = "setuptools.build_meta"
```

setup.cfg

``` 
[metadata]
name = mypackage
version = 0.0.1

[options]
packages = mypackage
install_requires =
    docutils >= 0.3
    requests <= 0.4
    importlib; python_version == "2.6"

include_package_data = True

[options.entry_points]
console_scripts =
    main = mypkg:some_func
```

Automatic package discovery

```
[options]
packages = find:

[options.packages.find] #optional
include=pkg1, pkg2
exclude=pk3, pk4
```

project structure

``` 
~/mypackage/
    pyproject.toml
    setup.cfg # or setup.py
    mypackage/__init__.py

```

</details>

### json tool

`echo json-file | python3 -m json.tool`

This outputs the input file (or file stream) into formatted json

### argparse

Learned about `argparse` library of python std lib, it is **Amazing!**

performance of pyinstller is reduced if you use the -F/--onefile option. This is because pyinstaller needs to unpack everything in a temp direcotry and then run the code, which severly degrades performance.

Using the default option or the --onedir option results in much faster code execution (so use that)

As to how to go about uncomplicating the directory stuff, just create a shortcut at the root of the folder and that's that.

### pyinstaller

Pyinstaller is a python module that creates native binaries out of a python file.

pip install pyinstaller

-F, --onefile creates just one standalone executable

### Python packages

They are modules! or maybe they are modules and they have and __init__.py file at the base of the directory. I will experiment more with these and report more.

also if you want to import a file from a subdirectory, you need to do `from directory import file`

#### Importing another file

from the same directory, is very much possible!!


Just import the file and you are on!

### Kivy

All about Kivy: the amazing GUI library of python

You can make android apps with kivy, using buildozer, but that is only supported on linux and Mac computers (UNIX)

The views and everything else is also much saner than tkinter

buildozer: build you need to specify INTERNET under requirements

### Python on windows is very very weird

`python pip` does not work by `py -m pip` works?!?!

Idk this was too weird

### Preferred LSP

Pylance hands down, is much closer to pycharm's language completion.

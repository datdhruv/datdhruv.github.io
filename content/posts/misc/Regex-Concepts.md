---
layout: post
title:  "Regex concepts"
description: "And simple demonstration with python re module"
date:   2020-01-05 12:00:00 +0400
tags: ["regex", "python"]
type: post
showTableOfContents: true
---

# Regex Concepts

To escape characters you need to use `\` escape characters, for eg if you want to search for a "?" or "." or "\", use backslash `\.`, `\?`, `\\`. If you want to search for an email address eg: name@example.com, use: `name@example\.com`

. -> matches any character except newline character

\d matches digits (anything from 0-9)

\D matches anything BUT a digit

\w searches for any alphanumeric character (a-z,A-Z,0-9)

\W matches anything that is not an alphanumeric character

\s matches whitespaces (space, tab, newline)

\S matches anthing that is not a whitespace

#### Anchors - dont match characters but special positions

special posiotions like starting of the line, ending of the line etc

\b matches word at boundries

\B matches word that are not word boundries

for eg: Ha HaHa, `\bHa` matches **Ha Ha**Ha but not Ha Ha*Ha*. `\bHa\b` matches word boundries both at the end and at the begining: **Ha** HaHa only matches where `Ha\b` matches **Ha** Ha**Ha**

^ matches start of the line

^Ha matches only **Ha** bro HaHa HaHa, because the line starts with an Ha

$ matches end of line 

$Ha only matches Ha bro HaHa Ha**Ha** beacause it is at the end of the line

### character sets
[] -> matches character set inside the brackets.(NO SPACES) eg [-*&a1] etc.
 Matches only the first character in the sequence.

\- has a special meaning in character sets []. when at the start, it matches for the character '-', but when in between it is used to specify a range. eg to match numbers from 1 to 7: [1-7], or matching a-d: [a-d]

caret ^ also has special meaning and stands for "everything except". For eg to match al characters that are not a lower case letter: [^a-z]

#### Quantifiers: matching more than one character at a time
- * matches 0 or more instances
- + matches 1 or more
- ? matches 0 or one instances
- {} matches exact numbers. eg a{3} -> a three times works same for \d \s \w stuffs
- {num1, num2} matches an range of numbers and follows {min, max} range. eg a{1,3} one to three repetitions of a. works same for \d \s \w stuffs

### Groups: allows us to specify different matches

groups are defined using parenthesis ()

for eg: to match Mr, Ms, Mrs:

M(r|s|rs)

pipe operator (|) is used to for "OR" in groups

#### Back references
the values in groups are stored in something called back groups.

in vscode you can call them with $grpnum (eg $2) to replace them in replace mode in "find"

however usually it is \num eg \2 for group 2


## Examples

- matching phone numbers

321-555-4321

123.555.1234

soln -> \d\d\d\W\d\d\d\W\d\d\d\d, dig dig dig non-whitespace dig.....

- character matching

	cat
	
	mat
	
	pat
	
	bat

	match everything except bat

	[^b]at

# In Python

remember to convert the string containing regular expressions to raw form: eg `r"hello"`. This is done so that python does not take expressions with a leading backslash and escape sequesces of it's own.

```python
import re

urls = 
'''for groups
match.group(grp_num) eg match.group(3)
'''

# Substitutions
subbed_urls = pattern.sub(r'')
```
---
title:  "Git"
description: "Some Basics about git"
date:   2020-03-05 12:00:00 +0400
categories: git
weight: 20
---
Some Conventions

repository(repo) -> basically just a folder, which has all your code in it

local repo -> The folder that is On your computer

remote repo -> The folder that is on some git server (or on a server, basically not on your computer)

origin is the git repo, master is the branch of the repo you want to push to.

Before we proceed, **please also check the help pages and the man pages for the topics, they go beyond these basics and explaing in more depth**

## To initialize a local repository

```git
git init <directory>
```

<details markdown=1>
<summary> some things can happen, **Keep calm and do this**</summary>

if you create a directory on a remote and initialize with `git init .` and then try commiting to it, it wont happen!

on the remote you need to `git checkout -b tmp` and then push from your machine(local) to the remote

[here is a stackoverflow page](https://stackoverflow.com/questions/2816369/git-push-error-remote-rejected-master-master-branch-is-currently-checked)

I just had the same error while I began learning Git. Some of the other answers are clearly not for someone new to Git!

(I am going to use non technical terms to get the idea across.) Anyway, what is happening is that you have two repositories, one is the original you first made, and the other the work one you just made.

Right now you are in your work repository and are using the "master" branch. But you also happen to be "logged in" in your original repository to the same "master" branch. Now since you're "logged in" in the original, Git fears you might mess up because you might be working on the original and screw things up. So you need to return to the original repository and do a "git checkout someotherbranch", and now you can push with no problems.

I hope this helps.

</details>

## To add the recent changes to the tracker list

```git
# adding only a single file
git add <filename>

# OR add an entire directory
git add <directory>
```

#### Checking the things in the tracker list
this is done with the status command
```git
git status

# example
# On branch master
# Your branch is up to date with 'origin/master'.

# Changes to be committed:
#  (use "git restore --staged <file>..." to unstage)
#        new file:   About-git.md
```

## Commiting the changes in the tracker list

<details markdown=1>
<summary>You need to configure your "user" acount before commiting</summary>

#### for global config
```shell
git config --global user.name "firstname lastname"
git config --global user.email "email_id"
```
#### you can also set local directory related config
```shell
git config user.name "firstname lastname"
git config user.email "email_id"
```
</details>

While commiting, a message is absolutely required. Another -m can be used to provide some description about the message

```git
git commit -m "message" -m "description"

# git commit -m "add stuff to about git"
# [master cd5c47a] add stuff to about git
# 1 file changed, 126 insertions(+)
# create mode 100644 About-git.md
```

## Making changes to a remote repository

<details markdown="1"><summary>First you will need to have access to the repository</summary>

This can be done via SSH keys or via [Gitcredential manager]({% post_url git-credential-manager %})

1.  Create SSH keys and add the .pub (public part) of the key on github/your git provider
    
    ```bash
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
    ```
2.  Ensure ssh-agent is running
    
    ```bash
     # start the ssh-agent in the background
    $ eval $(ssh-agent -s)
    > Agent pid 59566
    ```
    
    or on Windows powershell
    
    ```powershell
     Get-Service -Name ssh-agent | Set-Service -StartupType Manual
     Start-Service ssh-agent
    ```
3.  Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace�*id_rsa*�in the command with the name of your private key file.
    
    ```shell
    $ ssh-add ~/.ssh/id_rsa
    ```
4.  Add the ssh key to your git provider

### setting up a git server

Most of it is the same, you need to initialize a bare repository, to which you commit to and pull from on the *server*. And ofc add ssh public key of your computer to the serve.

``` shell
# on the server initialize a bare repository with .git extention as an conventi
mkdir my_repo.git
cd my_repo.git
git init --bare
``` 

</details>

Next you need to set up the repo in your git project using the `git remote` sub-command.

```bash
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=(fetch|push)] <name> <url>
# or update and existing url with
git remote set-url [--push] <name> <newurl> [<oldurl>]
```

Then you can use the push command
```bash
git push origin master
# origin is the git repo
# master is the branch of the repo you want to push to
```

### Getting changes from remote repository
To do this you use the pull command
```git
git pull origin master
```
## Tracking changes in a local repo
use the git log command
```git
git log
```
this gives the recent changes along with the unique hashcodes of each change

## Undoing changes
we can undo the most recent changes using the git reset command

reset without any argument resets only changes in the tracker list(git add stuff), to undo commits, you need to specify HEAD~a_num. HEAD is a pointer to the most recent change. HEAD~1 -> HEAD -1 = the change before the most recent change
```git
# for tracker
git reset

# for commits
git reset HEAD~1 # or HEAD~a_num
```

To undo Remote commits:

```git
git reset HEAD~1 # remove commit locally
git push origin +HEAD # force-push the new HEAD commit
```

## Branching
to change to a different branch of the repo, use the checkout -b command
```git
git checkout -b <branch-name>
# example
# git checkout -b master
```

to merge the changes of the two branches, here you don't have to specify the branch you want to merge INTO because it is usually the branch you are currently working on
```git
git merge <branch name>
```

to push a branch onto a remote git server:
```git
git push --set-upstream origin branch_name
git push -u origin branch_name
```

### Managing merge conflicts
[chekck this out](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)

use `git stash` command

### To delete branches

```git
# To delete branch locally:
git branch -d branch_name

# To delete branch remotely:
git push origin/remote_ref --delete branch_name
```

## Git tags

tags are non-branch save points

to create a tag, just do `git tag tag-name`

you can also checkout git tags using the checkout command

## Git stash

What `git stash` does is, it will see all the unadded, uncommited changes to files, with respect to HEAD (and possibly other branches if checked out into them) and store it in a tree.

Then it will revert the directory to the clean working state like HEAD

Use `git stash pop` or `git stash apply` to apply these previously unsaved changes again, after, for example pulling the latest version of the repo. Then the unsaved changes and work can be saved back to the updated repo.

If the changes have outlived their purpose, you can `git stash drop` the changes

`git stash list` to list stashes and `git stash show` to show changes

## Deleting the history of a branch
```bash
git checkout --orphan tmp-main # create a temporary branch
git add -A  # Add all files and commit them
git commit -m 'Add files'
git branch -D main # Deletes the master branch
git branch -m main # Rename the current branch to master
git push -f origin main # Force push master branch to Git server
```

## Git log, Git show & Git Diff

git log shows you a history of all the commits in a branch.

With the `git log --stat` command you can see what files were changed and a breif on what the changes were as well.

The `git show` command will give you even more details telling you exactly what the changes were.

The `git diff` command will give you the exact changes **between two** commit hashes

### Getting changes in a remote repo

First you need to fetch the changes, this is done with the command `git fetch`. Then to see what the changes actually are, you can use `git log main..origin/main` or `git log local_branch..remote/branch`
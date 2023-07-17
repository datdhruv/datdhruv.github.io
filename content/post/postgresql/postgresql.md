---
title:  "Installing Postgresql on Ubuntu"
description: "Install steps and commands for Postgres on Ubuntu"
date:   2023-06-24 11:30:00 +0400
categories: postgresql
---

# Installing Postgres
``` bash
sudo apt search postgres
sudo apt install postgresql
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
sudo -i -u postgres
sudo -u postgres createuser --interactive
sudo -u upskillr psql
sudo -u postgres createdb upskillr
sudo -u upskillr psql
sudo adduser upskillr
sudo -u upskillr psql
```

# Double and single Quotes in (PG)SQL

Double quotes are for names of tables or fields. Sometimes You can omit them. The single quotes are for string constants. This is the SQL standard. In the verbose form, your query looks like this:

```sql
select * from "employee" where "employee_name"='elina';
```


# The PSQL Command

To get help, just type \help in the psql console.

You can also get help about the various psql commands if you type in `\?` into the psql console. Or you can also get help regarding various Postgres commands if you input \h into the console.

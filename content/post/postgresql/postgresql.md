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

# The PSQL Command

To get help, just type \help in the psql console.

You can also get help about the various psql commands if you type in `\?` into the psql console. Or you can also get help regarding various Postgres commands if you input \h into the console.

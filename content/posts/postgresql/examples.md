---
title:  "Some Postgresql Examples"
description: "Examples that can paint a clearer picture about some powerful features and patterns of PG-SQL"
date:   2023-06-24 11:30:00 +0400
tags: ["postgresql"]
type: post
showTableOfContents: true
---

## jsonb to record
``` sql
select fla.offer_id, ans_data.*  from fla, jsonb_to_record(answer_data) as ans_data("AE46" text,"AE3" text,"AE16" text,"AE45" date,"AE47" date,"AE55" text,"AE60" text,"AE61" text,"AE73" date,"AE74" date,"AE62" text,"AE27" text,"AE42" text,"AE58" text,"AE25" text,"AE54" text,"AE44" text,"AE17" text,"AE53" text,"AE59" text,"AE19" text,"AE56" text,"AE21" text,"AE57" text,"AE33" text,"AE32" text,"AE41" date,"AE31" date,"AE65" text,"AE66" text,"AE67" text,"AE72" text,"AE52" text,"AE38" text,"AE69" text,"AE70" text,"AE68" text,"AE71" text,"AE39" text); 
```

## Accessing record's key and values

```sql
select offer_id, rev, bf.key as business_field, bf.value as business_field_comments from table_name tn, jsonb_each_text((tn.answer_data->>'FI5')::jsonb) as bf;
```

## JSON String agg
``` sql
-- Data is stored as text within a json. Data itself is of type json
-- The end output is comma separted string from json keys
select string_agg(bf, e', ')  from fact_logbook_ae fla, json_object_keys((fla.answer_data->>'AE54')::json) bf where offer_id= 'SECD-20230013';
```

## Update record on conflict while inserting
``` perl
my $STMT = $DBH->prepare(qq~insert into scd_logbook.fact_logbook_ae (offer_id,rev,answer_data,created_by_gid,last_saved_by_gid,created_ts,last_saved_ts) values(?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP) on conflict (offer_id, rev)
		do update set answer_data=excluded.answer_data, last_saved_ts=CURRENT_TIMESTAMP, last_saved_by_gid=excluded.last_saved_by_gid~) or report_error("Error preparing SQL:".$DBH->errstr());
		$STMT->execute("$OFFER_ID",$FD{REV},encode_json \%ANS,$FD{GID},$FD{GID}) or report_error("Error executing SQL:".$DBH->errstr()) ;
```

## Getting max of a revision
```sql
select * from 
(select fla.offer_id, rank() over (partition by fla.offer_id order by fla.rev desc) as rank_rev, fla.rev
from fla_table fla) as cd
where rank_rev = 1

```

## Validate Booking using Functions

``` sql
CREATE OR REPLACE FUNCTION validate_booking_date()
  RETURNS TRIGGER AS $$
DECLARE
  max_booking_end_date DATE;
BEGIN
  SELECT MAX(booking_end) INTO max_booking_end_date
  FROM  your_table
  WHERE toolset_id  = NEW.toolset_id;

  IF NEW.booking_start <= max_booking_end_date THEN
    RAISE EXCEPTION 'Booking start date must be greater than the maximum booking end date.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger that calls the validate_booking_date function
CREATE TRIGGER check_booking_date_trigger
  BEFORE INSERT ON your_table
  FOR EACH ROW
  EXECUTE FUNCTION validate_booking_date();
```

## Control access when creating a dashboard

```sql
-- as admin
create user app_owner with password '';
create schema app authorization app_owner;
create role app_readers;

-- run following as schema owner
grant usage on schema app to app_readers;
alter default privileges in schema app grant select on tables to app_readers;
grant select on all tables in schema app to app_readers;
```

## Get column names of a table

```sql
SELECT *
FROM information_schema.columns
WHERE table_schema = 'your_schema'
AND table_name   = 'your_table';
```

## Update inline

```sql
-- Update the consumer names
update evaluation.lkp_consumer set consumer_name = t.new_consumer from 
    (values 
    ('SE GS C ME', 'SE GS C RSO ME'),
    ('SE GS C CD ME', 'SE GS C RSO CD ME'),
    ('SE GS D ME', 'SE GS D RSO ME'),
    ('SE GT ME', 'SE GT RSO ME'),
    ('SE GS C REU', 'SE GS C RSO EU&AF')
) as t(prev_consumer, new_consumer) where t.prev_consumer = consumer_name;
```

## Random sampling
Scenario : 
Let's say you are working as SQL Developer and you are asked to provide some sample data from a table. You need to provide 10 rows or 100 rows but they should be selected random from table.

Solution : 
You can use `random()` function with Limit to get RANDOM ROWS from table. By using Limit you will restrict the number of rows you want to return.

``` SQL
select * from YourTableName order by random() limit count;

-- Example
select * from customer order by random limit 10;
```
select "a"."line1",
       "a"."district",
       "c"."name"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId");

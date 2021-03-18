select "c"."firstName",
       "c"."lastName"
  from "inventory" as "i"
  join "films" as "f" using ("filmId")
  join "rentals" as "r" using ("inventoryId")
  join "customers" as "c" using ("customerId")
 where "f"."title" = 'Magic Mallrats'

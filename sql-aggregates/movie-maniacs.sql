select "c"."firstName",
       "c"."lastName",
       sum("amount") as "totalOfPayments"
  from "payments"
  join "customers" as "c" using ("customerId")
 group by "c"."firstName", "c"."lastName"
 order by "totalOfPayments" DESC

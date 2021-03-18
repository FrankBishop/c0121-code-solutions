select "co"."name",
       count("c".*) as "citiesPerCountry"
  from "cities" as "c"
  join "countries" as "co" using ("countryId")
 group by "co"."name"

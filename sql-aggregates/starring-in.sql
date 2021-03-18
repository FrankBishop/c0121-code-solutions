select "ca"."name",
       count("fc".*) as "filmsPerCategory"
  from "categories" as "ca"
  join "filmCategory" as "fc" using ("categoryId")
  join "castMembers" as "cm" using ("filmId")
 where "cm"."actorId" = 178
 group by "ca"."name"

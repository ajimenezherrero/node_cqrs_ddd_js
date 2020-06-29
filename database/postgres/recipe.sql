DROP TABLE IF EXISTS recipe;

CREATE TABLE public.recipe
(
  id uuid,
  name varchar(50) NOT NULL,
  ingredients uuid[],
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT recipe_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
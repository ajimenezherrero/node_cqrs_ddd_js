DROP TABLE IF EXISTS ingredient;

CREATE TABLE public.ingredient
(
  id uuid,
  name varchar(50) NOT NULL,
  created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT ingredient_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
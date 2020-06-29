import { recipeMapperFromDb } from './recipeMapper';

const query = {
  text: `
    INSERT INTO recipe(
      id,
      name,
      ingredients
    )
    VALUES ($1, $2, $3)
    ON CONFLICT DO NOTHING
    RETURNING
      id,
      name,
      ingredients,
      created_at,
      updated_at
  `,
};

const create = async ({ id, name, ingredients, database }) => {
  const pool = database.getPool();
  const values = [id, name, ingredients];
  const { rows } = await pool.query(query, values);
  const recipe = recipeMapperFromDb(rows[0]);

  return recipe;
};

export default create;

import { recipeMapperFromDb } from './recipeMapper';

const query = {
  text: `
    UPDATE 
      recipe
    SET
      name = $2,
      ingredients = $3,
      updated_at = NOW()
    WHERE 
      id = $1
    RETURNING
      id,
      name,
      ingredients,
      created_at,
      updated_at
  `,
};

const findById = async ({ id, name, ingredients, database }) => {
  const pool = database.getPool();
  const values = [id, name, ingredients];
  const { rows } = await pool.query(query, values);
  const recipe = recipeMapperFromDb(rows[0]);

  return recipe;
};

export default findById;

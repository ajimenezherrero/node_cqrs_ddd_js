import { recipeMapperFromDb } from './recipeMapper';

const query = {
  text: `
    SELECT
      id,
      name,
      ingredients,
      created_at,
      updated_at
    FROM
      recipe
    WHERE
      id = $1
  `,
};

const findById = async ({ id, database }) => {
  const pool = database.getPool();
  const values = [id];
  const { rows } = await pool.query(query, values);
  const recipe = rows[0] ? recipeMapperFromDb(rows[0]) : {};

  return recipe;
};

export default findById;

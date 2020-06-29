import { ingredientMapperFromDb } from './ingredientMapper';

const query = {
  text: `
    SELECT
      id,
      name,
      created_at,
      updated_at
    FROM
      ingredient
    WHERE
      id = $1
  `,
};

const findById = async ({ id, database }) => {
  const pool = database.getPool();
  const values = [id];
  const { rows } = await pool.query(query, values);
  const ingredient = rows[0] ? ingredientMapperFromDb(rows[0]) : {};

  return ingredient;
};

export default findById;

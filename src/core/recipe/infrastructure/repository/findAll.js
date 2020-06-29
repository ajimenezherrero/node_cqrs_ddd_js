import { recipesMapperFromDb } from './recipeMapper';

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
    LIMIT $1
    OFFSET $2
  `,
};

const findById = async ({ limit, offset, database }) => {
  const pool = database.getPool();
  const values = [limit, offset];
  const { rows } = await pool.query(query, values);
  const rowsProcessed = recipesMapperFromDb(rows);

  return rowsProcessed;
};

export default findById;

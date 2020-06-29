import { ingredientsMapperFromDb } from './ingredientMapper';

const query = {
  text: `
    SELECT
      id,
      name,
      created_at,
      updated_at
    FROM
      ingredient
    LIMIT $1
    OFFSET $2
  `,
};

const findAll = async ({ limit, offset, database }) => {
  const pool = database.getPool();
  const values = [limit, offset];
  const { rows } = await pool.query(query, values);
  const rowsProcessed = ingredientsMapperFromDb(rows);

  return rowsProcessed;
};

export default findAll;

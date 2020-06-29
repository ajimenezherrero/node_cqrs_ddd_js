import { ingredientMapperFromDb } from './ingredientMapper';

const query = {
  text: `
    INSERT INTO ingredient(
      id,
      name
    )
    VALUES ($1, $2)
    ON CONFLICT DO NOTHING
    RETURNING
      id,
      name,
      created_at,
      updated_at
  `,
};

const create = async ({ id, name, database }) => {
  const pool = database.getPool();
  const values = [id, name];
  const { rows } = await pool.query(query, values);
  const ingredient = ingredientMapperFromDb(rows[0]);

  return ingredient;
};

export default create;

import { ingredientMapperFromDb } from './ingredientMapper';

const query = {
  text: `
    UPDATE 
      ingredient
    SET 
      name = $2
    WHERE 
      id = $1
    RETURNING
      id,
      name,
      created_at,
      updated_at
  `,
};

const update = async ({ id, name, database }) => {
  const pool = database.getPool();
  const values = [id, name];
  const { rows } = await pool.query(query, values);
  const ingredient = ingredientMapperFromDb(rows[0]);

  return ingredient;
};

export default update;

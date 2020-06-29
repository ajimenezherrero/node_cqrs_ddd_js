const ingredientMapperFromDb = ({ id, name, created_at, updated_at }) => {
  return {
    id,
    name,
    createdAt: created_at,
    updatedAt: updated_at,
  };
};

const ingredientsMapperFromDb = rows => {
  const processedRows = [];

  if (Array.isArray(rows)) {
    for (let iterRows = 0; iterRows < rows.length; iterRows++) {
      processedRows.push(ingredientMapperFromDb(rows[iterRows]));
    }
  }

  return processedRows;
};

export { ingredientMapperFromDb, ingredientsMapperFromDb };

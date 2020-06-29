const recipeMapperFromDb = ({ id, name, ingredients, created_at, updated_at }) => {
  return {
    id,
    name,
    ingredients,
    createdAt: created_at,
    updatedAt: updated_at,
  };
};

const recipesMapperFromDb = rows => {
  const processedRows = [];

  if (Array.isArray(rows)) {
    for (let iterRows = 0; iterRows < rows.length; iterRows++) {
      processedRows.push(recipeMapperFromDb(rows[iterRows]));
    }
  }

  return processedRows;
};

export { recipeMapperFromDb, recipesMapperFromDb };

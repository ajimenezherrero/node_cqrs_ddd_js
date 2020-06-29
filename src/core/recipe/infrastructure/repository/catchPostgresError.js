const catchPostgresError = (target, name, descriptor) => {
  const original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = async function(...args) {
      try {
        const result = await original.apply(this, args);

        return result;
      } catch (error) {
        throw new Error('Postgres SQL Error');
      }
    };
  }

  return descriptor;
};

export default catchPostgresError;

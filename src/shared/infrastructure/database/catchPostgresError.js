import DatabaseError from './DatabaseError';

const catchPostgresError = (target, name, descriptor) => {
  const original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = async function(...args) {
      try {
        const result = await original.apply(this, args);

        return result;
      } catch (error) {
        throw new DatabaseError(error.message);
      }
    };
  }

  return descriptor;
};

export default catchPostgresError;

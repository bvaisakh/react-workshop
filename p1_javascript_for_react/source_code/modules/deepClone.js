const clone = (object) => {
  if (Array.isArray(object)) {
    return cloneArray(array);
  }

  return Object.assign({}, object);
};

const cloneArray = (array) => {
  return { ...array };
};

const deepClone = (object) => {
  return JSON.parse(JSON.stringify(object));
};

export { deepClone, clone };

const Cache = module.exports;

const map = {}

// To complete
// The function to save on cache the data, with the given key
Cache.save = (key, data) => {
  console.log(`Cache saved with key ${key}, data: ${data}`);
  map[key] = data;
};

// To complete
// The function to delete from cache the data with the given key
Cache.delete = (key) => {
  console.log(`Cache deleted with key ${key}`);
  delete map[key];
};

// To complete
// The function to get from cache the data with the given key
Cache.get = (key) => {
  console.log(`Cache getted with key ${key}`);

  return map[key];
};

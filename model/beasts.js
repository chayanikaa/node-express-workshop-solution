const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'beasts.json');

const saveAll = async (newData) => {
  await fs.writeFile(dataPath, JSON.stringify(newData, null, 2));
};

const getAll = async () => {
  const results = JSON.parse(
    (await fs.readFile(dataPath)).toString()
  );
  return results;
};

const get = async (id) => {
  const results = await getAll();
  return results.find(result => result.id === id);
};

const save = async (entry) => {
  const results = await getAll();
  const newEntry = {
    id: results.length + 1,
    ...entry,
  };
  const newData = [...results, newEntry];
  await saveAll(newData);
  return newEntry;
};

const update = async (id, updatedEntry) => {
  const results = await getAll();
  let newEntry;
  const newData = results.map(oldEntry => {
    if (oldEntry.id === id) {
      newEntry = { id, ...oldEntry, ...updatedEntry };
      return newEntry;
    }
    return oldEntry;
  });
  await saveAll(newData);
  return newEntry;
};

const remove = async (id) => {
  const results = await getAll();
  let removed;
  console.log({ results, id: typeof id });
  const newData = results.filter(entry => {
    if (entry.id === id) {
      removed = entry;
      return false;
    }
    return true;
  });
  console.log({ newData });
  await saveAll(newData);
  return removed;
};

module.exports = {
  getAll,
  get,
  save,
  update,
  remove,
};


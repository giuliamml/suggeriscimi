const data = require("./dataMock.json");

const getLayer = (key) => {
  console.log(key);
  return data.layers.filter((entry) => {
    return entry.key === key;
  });
};

const entries = data.entries.map((entry) => {
  entry.layer = getLayer(entry.parentLayer)[0];
  return entry;
});

module.exports.entries = entries;

const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createUI = require('./createUI');
// const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (error) {
    console.log(`не удалось создать директорию для слайса ${sliceName}`, error);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  // await createPublickApi(layer, sliceName);
};

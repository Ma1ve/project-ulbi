const fs = require('fs/promises');
const shemaTypeTemplate = require('./shemaTypeTemplate');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
// const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (error) {
      console.log(`Не удалось создать Model сегмент для слайса ${sliceName}`, error);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(resolveModelPath('slices', `${sliceName}Slice.ts`), reduxSliceTemplate(sliceName));
    } catch (error) {
      console.log('Не удалось создать редакс слайс', error);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(resolveModelPath('types', `${sliceName}.ts`), shemaTypeTemplate(sliceName));
    } catch (error) {
      console.log('Не удалось создать SchemaType', error);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};

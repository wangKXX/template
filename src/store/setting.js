const modules = {};
const files = require.context('./modules', false, /\.js$/);
files.keys().forEach((file) => {
  const moduleName = file.replace(/(^\.\/)|(\.js$)/g, '');
  modules[moduleName] = files(file).default || files(file);
});
export default modules;

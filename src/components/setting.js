const components = {};
const files = require.context('./', true, /index\.vue$/);
files.keys().forEach((file) => {
  const componentName = file.replace(/(^\.\/)|(\/index\.vue$)/g, '');
  components[componentName] = files(file).default || files(file);
});

export default {
  install: (vue) => {
    Object.keys(components).forEach((k) => {
      vue.component(k, components[k]);
    });
  },
};

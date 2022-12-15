const { watch } = require('fs/promises');
const path = require('path');

module.exports = {
  entry: './source/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "scrips/js"),
  },
watch: true,
};

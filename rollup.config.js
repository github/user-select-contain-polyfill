const pkg = require("./package.json");

export default {
  input: pkg["module"],
  output: [
    {
      file: pkg["main"],
      format: "umd"
    }
  ]
};

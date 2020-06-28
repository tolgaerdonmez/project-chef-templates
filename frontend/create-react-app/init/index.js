const { execSync } = require("child_process");
const { green } = require("kleur");

module.exports = function initCreateReactApp({ cwd }) {
  execSync(`yarn create react-app .`, {
    encoding: "utf-8",
    cwd,
    stdio: "inherit",
  });
  console.log(green("React App initialized successfully"));
};

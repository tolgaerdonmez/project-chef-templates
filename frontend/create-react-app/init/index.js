const { execSync } = require("child_process");
const { green } = require("kleur");

module.exports = function initCreateReactApp({ cwd }) {
  const stdout = execSync(`yarn create react-app .`, {
    encoding: "utf-8",
    cwd,
  });
  console.log(stdout);
  console.log(green("React App initialized successfully"));
};

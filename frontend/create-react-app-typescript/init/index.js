const { execSync } = require("child_process");
const { successMessage } = require("../../../../utils/messages");

module.exports = function initCreateReactApp({ cwd }) {
  const stdout = execSync(`yarn create react-app . --template typescript`, {
    encoding: "utf-8",
    cwd,
  });
  console.log(stdout);
  console.log(successMessage("React App initialized successfully"));
};

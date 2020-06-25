const { execSync } = require("child_process");
const { successMessage, infoMessage } = require("../../../../utils/messages");

module.exports = function initNextApp({ cwd }) {
  const stdout = execSync(`yarn create next-app ${cwd} -e with-typescript`, {
    encoding: "utf-8",
  });
  console.log(infoMessage(stdout));
  console.log(successMessage("Nextjs initialized successfully"));
};

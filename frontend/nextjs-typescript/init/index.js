const { execSync } = require("child_process");
const { green, cyan } = require("kleur");

module.exports = function initNextApp({ cwd }) {
  const stdout = execSync(`yarn create next-app ${cwd} -e with-typescript`, {
    encoding: "utf-8",
  });
  console.log(cyan(stdout));
  console.log(green("Nextjs initialized successfully"));
};

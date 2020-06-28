const { execSync } = require("child_process");
const { green } = require("kleur");

module.exports = function initNextApp({ cwd }) {
  execSync(`yarn create next-app ${cwd} -e with-typescript`, {
    encoding: "utf-8",
    stdio: "inherit",
  });
  console.log(green("Nextjs initialized successfully"));
};

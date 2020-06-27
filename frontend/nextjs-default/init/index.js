const { execSync } = require("child_process");
const { cyan, green } = require("kleur");

module.exports = function initNextApp({ cwd }) {
  const stdout = execSync(`yarn create next-app ${cwd} -e default`, {
    encoding: "utf-8",
  });
  console.log(cyan(stdout));
  console.log(green("Nextjs initialized successfully"));
};

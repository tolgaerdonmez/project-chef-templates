const { execSync } = require("child_process");
const { green, red, cyan } = require("kleur");

module.exports = function initGatsby({ cwd }) {
  try {
    execSync("gatsby -v");

    execSync(`gatsby new .`, {
      encoding: "utf-8",
      cwd,
      stdio: "inherit",
    });
    console.log(green("Gatsby initialized successfully"));
  } catch (error) {
    console.log(red(error), "\n");
    console.log(red("This option uses gatsby-cli"));
    console.log(cyan("Install gatsby-cli using"));
    console.log(green("yarn global add gatsby-cli\n"));
  }
};

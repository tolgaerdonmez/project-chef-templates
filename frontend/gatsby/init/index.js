import { execSync } from "child_process";
import {
  infoMessage,
  successMessage,
  errorMessage,
} from "../../../../utils/messages";

export default function initGatsby({ cwd }) {
  try {
    execSync("gatsby -v");

    const stdout = execSync(`gatsby new .`, {
      encoding: "utf-8",
      cwd,
    });
    console.log(stdout);
    console.log(successMessage("Gatsby initialized successfully"));
  } catch (error) {
    console.log(errorMessage(error), "\n");
    console.log(errorMessage("This option uses gatsby-cli"));
    console.log(infoMessage("Install gatsby-cli using"));
    console.log(successMessage("yarn global add gatsby-cli\n"));
  }
}

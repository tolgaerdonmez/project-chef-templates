import { execSync } from "child_process";
import { infoMessage, successMessage } from "../../../../utils/messages";

export default function initNextApp({ cwd }) {
  const stdout = execSync(`yarn create next-app ${cwd} -e with-typescript`, {
    encoding: "utf-8",
  });
  console.log(infoMessage(stdout));
  console.log(successMessage("Nextjs initialized successfully"));
}

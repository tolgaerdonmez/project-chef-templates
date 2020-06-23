import { execSync } from "child_process";
import { InitFunctionArgs } from "../../../../types/templates";
import { infoMessage, successMessage } from "../../../../utils/messages";

export default function initNextApp({ cwd }: InitFunctionArgs) {
  const stdout = execSync(`yarn create next-app ${cwd} -e default`, {
    encoding: "utf-8",
  });
  console.log(infoMessage(stdout));
  console.log(successMessage("Nextjs initialized successfully"));
}

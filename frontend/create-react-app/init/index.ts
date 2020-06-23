import { execSync } from "child_process";
import { InitFunctionArgs } from "../../../../types/templates";
import { successMessage } from "../../../../utils/messages";

export default function initCreateReactApp({ cwd }: InitFunctionArgs) {
  const stdout = execSync(`yarn create react-app .`, {
    encoding: "utf-8",
    cwd,
  });
  console.log(stdout);
  console.log(successMessage("React App initialized successfully"));
}

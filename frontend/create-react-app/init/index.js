import { execSync } from "child_process";
import { successMessage } from "../../../../utils/messages";

export default function initCreateReactApp({ cwd }) {
  const stdout = execSync(`yarn create react-app .`, {
    encoding: "utf-8",
    cwd,
  });
  console.log(stdout);
  console.log(successMessage("React App initialized successfully"));
}

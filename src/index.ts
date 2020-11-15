import { join } from "path";
import fetch from "isomorphic-unfetch";
import NpmAPI from "npm-api";

const currentPath = join(__dirname, "..");

export default currentPath;
const getOnlineVersion = async () => {
  const npm = new NpmAPI();
  const repo = await npm.repo("project-chef-templates").package();
  return repo.version;
};

export const checkLocalVersion = async () => {
  try {
    const onlineVersion = await getOnlineVersion();
    const { default: packageData } = await import(join("..", "package.json"));
    const localVersion = packageData.version;

    if (onlineVersion !== localVersion) {
      return 1;
    }

    return 0;
  } catch {
    return -1;
  }
};

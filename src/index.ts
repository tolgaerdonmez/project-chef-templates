import { join } from "path";
import fetch from "isomorphic-unfetch";

const currentPath = join(__dirname, "..");

export default currentPath;

const getOnlineVersion = async () => {
  const endpoint = "https://api.npms.io/v2/package/project-chef-templates";
  const data = await fetch(endpoint).then((data) => data.json());
  const version = data.collected.metadata.version;
  return version;
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

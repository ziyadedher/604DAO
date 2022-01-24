import { getNodeEnv } from "./env";

const shouldUseProductionStorage = (): boolean => getNodeEnv() === "production";

const getStorageURI = (filePath: string): string =>
  shouldUseProductionStorage()
    ? `https://storage.ziyadedher.com/604dao/${filePath}`
    : `/${filePath}`;

export { shouldUseProductionStorage, getStorageURI };

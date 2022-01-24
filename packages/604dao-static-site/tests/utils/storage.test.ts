import { getNodeEnv } from "../../src/utils/env";
import {
  getStorageURI,
  shouldUseProductionStorage,
} from "../../src/utils/storage";

jest.mock("../../src/utils/env");
const getMockedGetNodeEnv = (): jest.MockedFn<typeof getNodeEnv> =>
  jest.mocked(getNodeEnv).mockClear();

describe("storage", () => {
  describe("shouldUseProductionStorage", () => {
    test("is true when production environment", () => {
      getMockedGetNodeEnv().mockReturnValue("production");
      expect(shouldUseProductionStorage()).toBe(true);
    });
    test("is false when not production environment", () => {
      getMockedGetNodeEnv().mockReturnValue("development");
      expect(shouldUseProductionStorage()).toBe(false);
    });
  });

  describe("getStorageUri", () => {
    describe("when production environment", () => {
      const mockProduction = (): void => {
        getMockedGetNodeEnv().mockReturnValue("production");
      };

      test("uses production storage", () => {
        mockProduction();
        expect(getStorageURI("")).toBe(
          "https://storage.ziyadedher.com/604dao/"
        );
      });
      test("properly appends file path", () => {
        mockProduction();
        expect(getStorageURI("test.jpg")).toBe(
          "https://storage.ziyadedher.com/604dao/test.jpg"
        );
      });
    });
    describe("when not production environment", () => {
      const mockProduction = (): void => {
        getMockedGetNodeEnv().mockReturnValue("development");
      };

      test("uses production storage", () => {
        mockProduction();
        expect(getStorageURI("")).toBe("/");
      });
      test("properly appends file path", () => {
        mockProduction();
        expect(getStorageURI("test.jpg")).toBe("/test.jpg");
      });
    });
  });
});

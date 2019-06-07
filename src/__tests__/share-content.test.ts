import shareContent from "../share-content";

describe("Share Content function", () => {
  const successFn = () => { };
  const errorFn = () => { };

  beforeEach(() => {
    navigator.share = jest.fn(() => Promise.resolve());
  });

  test("calls share function", () => {
    shareContent(successFn, errorFn)({});
    expect(navigator.share).toBeCalled();
  });

  test("returns a function", () => {
    const result = shareContent(successFn, errorFn);
    expect(typeof result).toBe("function");
  });

  test("calls success on successful share", async () => {
    const mockedSuccessFn = jest.fn();
    const mockedErrorFn = jest.fn();
    await shareContent(mockedSuccessFn, mockedErrorFn)({});
    expect(mockedSuccessFn).toBeCalled();
    expect(mockedErrorFn).not.toBeCalled();
  });

  /*
  Have to find a way to make this work without throwing the error in console.
  test("calls error on failed share", async () => {
    navigator.share = jest.fn();
    const share = jest.spyOn(navigator, "share");
    share.mockImplementation(() => {
      throw new Error();
    });
    const mockedSuccessFn = jest.fn();
    const mockedErrorFn = jest.fn();
    await shareContent(mockedSuccessFn, mockedErrorFn)({});
    expect(mockedSuccessFn).not.toBeCalled();
    expect(mockedErrorFn).toBeCalled();
  }) */
})
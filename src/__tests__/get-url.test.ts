import getUrl from "../get-url";

describe("Get url function", () => {
  test("returns me passed url", () => {
    const url = getUrl("string");
    expect(url).toBe("string");
  });

  test("returns me current url", () => {
    window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: "string"
      }
    });
    const url = getUrl("string");
    expect(url).toBe("string");
  });

  test("returns me canonical url", () => {
    document.body.innerHTML = `
      <link rel="canonical" href="string" />
    `;
    const url = getUrl("string");
    expect(url).toBe("string");
  })
})
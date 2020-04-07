import { assert } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title: string = browser.getTitle();
    assert.strictequal(title, "Sandbox");

    const header: string = $("h1").getText();
    assert.strictequal(header, "Sandbox");
  });
});

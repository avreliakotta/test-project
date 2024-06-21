const data = require("./data.js");

describe("state and sports properties are null", () => {
  test("state is null", () => {
    expect(data.address.state).toBeNull();
  });

  test("sports is also null", () => {
    expect(data.interests.sports).toBeNull();
  });
});

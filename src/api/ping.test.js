jest.mock("./ping");

import ping from "./ping";

it("Mocking the ping works fine", async () => {
  expect.assertions(1);
  const response = await ping();
  expect(response.message).toEqual("Pong");
});


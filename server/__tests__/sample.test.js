const request = require("supertest");

const app = require("../app");

describe("Custom API test", () => {
  test("Should respond with the sample response", () => {
    return request(app)
      .get("/api/sample_action")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).toMatchObject({
          message: "Success"
        });
      });
  });
});

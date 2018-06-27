const request = require("supertest");

const app = require("../app");

describe("index route / ", () => {

  test("Should respond with an HTML document and status 200", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /html/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatch(
          /<title>/
        )
      })
  });
});

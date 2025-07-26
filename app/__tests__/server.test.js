const request = require("supertest");
const app = require("../server"); // don't start the server, just use the app

describe("GET /health", () => {
    it("should return healthy status", async () => {
        const res = await request(app).get("/health");
        expect(res.statusCode).toEqual(200);
    });
});
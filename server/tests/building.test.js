const request = require("supertest");
const createApp = require("../createApp");
const buildingService = require("../api/services/buildingService"); // Import your user service or database-related module

const app = createApp();

// Mock the buildingService module to simulate database behavior
jest.mock("../api/services/buildingService");

describe("POST /api/buildings", () => {
	test("should create a new user", async () => {
		// Mock the implementation of buildingService.createUser
		buildingService.createOne.mockResolvedValueOnce({
			id: 1,
			name: "building",
			createdAt: new Date().toISOString(),
		});

		const userData = {
			name: "building",
		};

		const response = await request(app).post("/api/buildings").send(userData);

		// Expect a 201 status code, indicating success
		expect(response.status).toBe(201);

		// Expect the response body to have the id, name, and createdAt fields
		expect(response.body.data).toHaveProperty("id", 1);
		expect(response.body.data).toHaveProperty("name", userData.name);
		expect(response.body.data).toHaveProperty("createdAt");

		// You can also validate the format of the createdAt field if needed
		// For example, you can check if it's a valid ISO date:
		expect(new Date(response.body.createdAt)).toBeInstanceOf(Date);
	});
});

describe("GET /api/buildings", () => {
	test("should get all buildings", async () => {
		// Mock the implementation of buildingService.getAllbuildings
		buildingService.getAll.mockResolvedValueOnce([
			{
				id: 1,
				name: "John Doe",
				createdAt: new Date().toISOString(),
			},
			{
				id: 2,
				name: "Jane Doe",
				createdAt: new Date().toISOString(),
			},
		]);

		const response = await request(app).get("/api/buildings");

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to be an array of buildings
		expect(response.body.data).toBeInstanceOf(Array);

		// Expect the response body to have the expected user properties
		expect(response.body.data[0]).toHaveProperty("id", 1);
		expect(response.body.data[0]).toHaveProperty("name", "John Doe");
		expect(response.body.data[0]).toHaveProperty("createdAt");

		expect(response.body.data[1]).toHaveProperty("id", 2);
		expect(response.body.data[1]).toHaveProperty("name", "Jane Doe");
		expect(response.body.data[1]).toHaveProperty("createdAt");
	});
});

describe("GET /api/buildings/:id", () => {
	test("should get a user by ID", async () => {
		// Mock the implementation of buildingService.getUserById
		buildingService.getOneById.mockResolvedValueOnce({
			id: 1,
			name: "building",
			createdAt: new Date().toISOString(),
		});

		const userId = 1;

		const response = await request(app).get(`/api/buildings/${userId}`);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to have the id, name, and createdAt fields
		expect(response.body.data).toHaveProperty("id", 1);
		expect(response.body.data).toHaveProperty("name", "building");
		expect(response.body.data).toHaveProperty("createdAt");
	});
});

describe("PUT /api/buildings/:id", () => {
	test("should update an existing user", async () => {
		const userId = 1;

		// Mock the implementation of buildingService.updateUserById
		buildingService.updateById.mockResolvedValueOnce({
			id: userId,
			name: "updatedName",
			updatedAt: new Date().toISOString(),
		});

		const updatedUserData = {
			name: "updatedName",
		};

		const response = await request(app).put(`/api/buildings/${userId}`).send(updatedUserData);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to have the id, name, and updatedAt fields
		expect(response.body.data).toHaveProperty("id", userId);
		expect(response.body.data).toHaveProperty("name", updatedUserData.name);
		expect(response.body.data).toHaveProperty("updatedAt");
	});
});

describe("DELETE /api/buildings/:id", () => {
	test("should delete an existing user", async () => {
		const userId = 1;

		// Mock the implementation of buildingService.deleteUserById
		buildingService.deleteById.mockResolvedValueOnce({
			message: "User deleted successfully",
		});

		const response = await request(app).delete(`/api/buildings/${userId}`);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(204);
	});
});

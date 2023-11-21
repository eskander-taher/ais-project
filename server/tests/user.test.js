const request = require("supertest");
const createApp = require("../createApp");
const userService = require("../api/services/userService"); // Import your user service or database-related module

const app = createApp();

// Mock the userService module to simulate database behavior
jest.mock("../api/services/userService");

describe("POST /api/users", () => {
	test("should create a new user", async () => {
		// Mock the implementation of userService.createUser
		userService.createOne.mockResolvedValueOnce({
			id: 1,
			name: "eskander",
			createdAt: new Date().toISOString(),
		});

		const userData = {
			name: "eskander",
		};

		const response = await request(app).post("/api/users").send(userData);

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

describe("GET /api/users", () => {
	test("should get all users", async () => {
		// Mock the implementation of userService.getAllUsers
		userService.getAll.mockResolvedValueOnce([
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

		const response = await request(app).get("/api/users");

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to be an array of users
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

describe("GET /api/users/:id", () => {
	test("should get a user by ID", async () => {
		// Mock the implementation of userService.getUserById
		userService.getOneById.mockResolvedValueOnce({
			id: 1,
			name: "eskander",
			createdAt: new Date().toISOString(),
		});

		const userId = 1;

		const response = await request(app).get(`/api/users/${userId}`);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to have the id, name, and createdAt fields
		expect(response.body.data).toHaveProperty("id", 1);
		expect(response.body.data).toHaveProperty("name", "eskander");
		expect(response.body.data).toHaveProperty("createdAt");
	});
});

describe("PUT /api/users/:id", () => {
	test("should update an existing user", async () => {
		const userId = 1;

		// Mock the implementation of userService.updateUserById
		userService.updateById.mockResolvedValueOnce({
			id: userId,
			name: "updatedName",
			updatedAt: new Date().toISOString(),
		});

		const updatedUserData = {
			name: "updatedName",
		};

		const response = await request(app).put(`/api/users/${userId}`).send(updatedUserData);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(200);

		// Expect the response body to have the id, name, and updatedAt fields
		expect(response.body.data).toHaveProperty("id", userId);
		expect(response.body.data).toHaveProperty("name", updatedUserData.name);
		expect(response.body.data).toHaveProperty("updatedAt");
	});
});

describe("DELETE /api/users/:id", () => {
	test("should delete an existing user", async () => {
		const userId = 1;

		// Mock the implementation of userService.deleteUserById
		userService.deleteById.mockResolvedValueOnce({
			message: "User deleted successfully",
		});

		const response = await request(app).delete(`/api/users/${userId}`);

		// Expect a 200 status code, indicating success
		expect(response.status).toBe(204);
	});
});

import { sayHelloAsync } from "../src/async.js";

test("test async function", async () => {
	const result = await sayHelloAsync("Made");
	expect(result).toBe("Hello, Made!");
});

test("test async matchers", async () => {
	await expect(sayHelloAsync("Made")).resolves.toBe("Hello, Made!");
	await expect(sayHelloAsync()).rejects.toBe("Name is Empty");
});

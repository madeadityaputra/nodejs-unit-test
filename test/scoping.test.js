beforeAll(() => console.log("before all outer"));
afterAll(() => console.log("after all outer"));
beforeEach(() => console.log("before each outer"));
afterEach(() => console.log("after each outer"));

test("Test Outer", () => console.log("Test Outer"));

describe("Test Inner", () => {
	beforeEach(() => console.log("before each inner"));
	afterEach(() => console.log("after each inner"));

	test("Test Inner", () => console.log("Test Inner"));
});

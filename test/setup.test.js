import { sum } from "../src/sum";

beforeEach(() => {
	console.log("before each");
});
afterEach(() => {
	console.log("after each");
});

beforeAll(() => {
	console.log("before all");
});
afterAll(() => {
	console.log("after all");
});

test("first test", () => {
	expect(sum(2, 3)).toBe(5);
	console.log("first test");
});

test("secong test", () => {
	expect(sum(2, 3)).toBe(5);
	console.log("second test");
});

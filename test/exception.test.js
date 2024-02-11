import { callMe } from "../src/exception.js";

test("exception", () => {
	expect(() => callMe("Made").toThrow());
	expect(() => callMe("Made").toThrow(MyException));
	expect(() => callMe("Made").toThrow("Ups My Exception happend"));
});

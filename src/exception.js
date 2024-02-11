export class MyException extends Error {}

export const callMe = (name) => {
	if (name === "Made") {
		throw new MyException("Ups My Exception happend");
	} else {
		return "OK";
	}
};

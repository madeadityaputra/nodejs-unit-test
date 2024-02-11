import { sum } from "../src/sum.js";

test("test sum function 1", () => {
	const result = sum(1, 2);

	expect(result).toBe(3);
});
test("test sum function 2", () => {
	const result = sum(1, 2);

	expect(result).toBe(3);
});
test("test sum function 3", () => {
	const result = sum(1, 2);

	expect(result).toBe(3);
});

//* untuk menjalankan salah satu test saja bisa di cek di npx jest --help kemudian di pilih yang (testNamePattern)
//* maka dia akan mengskip 2 test yang lainnya

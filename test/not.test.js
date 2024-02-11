test("numbers", () => {
	const value = 2 + 2;

	expect(value).not.toBeGreaterThan(6);
	expect(value).not.toBeGreaterThanOrEqual(6);

	expect(value).not.toBeLessThan(3);
	expect(value).not.toBeLessThanOrEqual(3);

	expect(value).not.toBe(5);
});

//! dan semua test yang telah kita coba bisa menggunakan property not ini

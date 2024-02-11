test("numbers", () => {
	const value = 2 + 2;

	expect(value).toBeGreaterThan(3); //* (> 3)
	expect(value).toBeGreaterThanOrEqual(4); //* (>= 4)

	expect(value).toBeLessThan(5); //* (< 5)
	expect(value).toBeLessThanOrEqual(6); //* (<= 6)

	expect(value).toBe(4); //* (== 4)
});

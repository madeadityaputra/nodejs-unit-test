test("truthiness", () => {
	let value = null;
	expect(value).toBeNull();
	expect(value).toBeFalsy();
	expect(value).toBeDefined();

	value = undefined;
	expect(value).toBeUndefined();
	expect(value).toBeFalsy();

	value = "Made";
	expect(value).toBeTruthy();
});

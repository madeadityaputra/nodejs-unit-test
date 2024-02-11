test("strings", () => {
	const name = "Made Aditya Putra";

	expect(name).toBe("Made Aditya Putra");
	expect(name).toMatch(/Adit/);
});

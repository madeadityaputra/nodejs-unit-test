test("test toBe", () => {
	const name = "Made";
	const hello = `Hello ${name}`;

	expect(hello).toBe("Hello Made");
});

//* dengan equal matchers ini kita bisa membandingkan data data object
test("test toEqual", () => {
	let person = { id: "made" };
	Object.assign(person, { name: "Made" });

	expect(person).toEqual({ id: "made", name: "Made" });
});

test("array simple", () => {
	const name = ["Made", "Aditya", "Putra"];
	expect(name).toEqual(["Made", "Aditya", "Putra"]);
	expect(name).toContainEqual("Putra"); //* untuk mengegcek ada atau tidaknuya item di array
});

test("array object", () => {
	const persons = [{ name: "Made" }, { name: "Kadek" }];

	expect(persons).toContainEqual({
		name: "Kadek",
	});
	expect(persons).toEqual([{ name: "Made" }, { name: "Kadek" }]);
});

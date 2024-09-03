describe("Home Page", () => {
	it("successfully loads and displays the welcome message", () => {
		cy.visit("/");
		cy.contains("Hello, welcome");
		cy.contains("My name is Charles Ngerem");
		cy.contains("and here is my submission for the DevOps Internship");
	});
});

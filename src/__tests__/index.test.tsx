import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
	it("renders the LandingPage component", () => {
		render(<Home />);
		const welcomeText = screen.getByText(/Hello, welcome/i);
		const nameText = screen.getByText(/My name is Charles Ngerem/i);
		const submissionText = screen.getByText(
			/and here is my submission for the DevOps Internship/i
		);

		expect(welcomeText).toBeInTheDocument();
		expect(nameText).toBeInTheDocument();
		expect(submissionText).toBeInTheDocument();
	});
});

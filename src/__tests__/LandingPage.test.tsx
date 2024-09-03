import { render, screen } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

describe("LandingPage", () => {
	it("renders the welcome message", () => {
		render(<LandingPage />);
		const welcomeText = screen.getByText(/Hello, welcome/i);
		expect(welcomeText).toBeInTheDocument();
	});

	it("renders the name", () => {
		render(<LandingPage />);
		const nameText = screen.getByText(/My name is Charles Ngerem/i);
		expect(nameText).toBeInTheDocument();
	});

	it("renders the internship submission text", () => {
		render(<LandingPage />);
		const submissionText = screen.getByText(
			/and here is my submission for the DevOps Internship/i
		);
		expect(submissionText).toBeInTheDocument();
	});
});

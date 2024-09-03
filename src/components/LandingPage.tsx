import React from "react";

const LandingPage: React.FC = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
			<div className="text-center px-4">
				<h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 shadow-text">
					Hello, welcome
				</h1>
				<p className="text-xl sm:text-3xl text-white mb-4 shadow-text">
					My name is Charles Ngerem
				</p>
				<p className="text-lg sm:text-2xl text-white shadow-text">
					and here is my submission for the DevOps Internship
				</p>
			</div>
		</div>
	);
};

export default LandingPage;

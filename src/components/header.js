const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Header = () => (
	<Gradient name="retro">
		<BigText text="React CLI" align="center" font="chrome" />
	</Gradient>
);

module.exports = Header;

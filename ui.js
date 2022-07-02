const React = require("react");
const importJsx = require("import-jsx");
const Header = importJsx("./src/components/header");
const Table = importJsx("./src/components/table");

const App = () => {
	return (
		<>
			<Header />
			<Table />
		</>
	);
};

module.exports = App;

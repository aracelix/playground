import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map(animal => {
	return <li key={`key-${animal}`}>{animal}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));

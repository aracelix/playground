import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];

/**
 * change the content of the map function
 **/
const animalsInHTML = animals.map(animal => <li key={`key-${animal.label}`}>{animal.label}</li>);

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));

import React, { useState } from "react";

export default function Helloreacthook() {
	const [name] = useState("Khai");
	const [age] = useState(21);

	return (
		<>
			<p>My name is {name} </p>
			<p>My age is {age} </p>
		</>
	);
}

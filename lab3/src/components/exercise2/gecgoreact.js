import { useState } from "react";

function GetGoReactHook() {
	const [name, setName] = useState("Khai");
	const [age, setAge] = useState(21);

	const onInputNameChange = (e) => {
		setName(e.target.value);
	};

	const onInputAgeChagne = (e) => {
		setAge(e.target.value);
	};

	return (
		<div className="GetGoReact">
			<section>
				<input value={name} onChange={onInputNameChange}></input>
				<p>My name is {name}</p>
			</section>

			<section>
				<input type="number" value={age} onChange={onInputAgeChagne}></input>
				<p>My name is {age}</p>
			</section>
		</div>
	);
}

export default GetGoReactHook;

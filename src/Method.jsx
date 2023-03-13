import { useEffect } from "react";

export const Method = ({ method }) => {
	useEffect(() => {
		method !== "null"
			? (document.getElementById(method).innerHTML = method)
			: "<p> </p>";
	}, []);
	return (
		<>
			{method !== "null" ? <h3>Method to prepare: </h3> : ""}
			<div id={`${method === null ? "method" : method}`}></div>;
		</>
	);
};

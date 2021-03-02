import React, { useState } from "react";

export function Home() {
	// Const and useState
	const [colorSelected, colfn] = useState("");
	const redselected = colorSelected == "red" ? "selected" : "";
	const yellowselected = colorSelected == "yellow" ? "selected" : "";
	const greenselected = colorSelected == "green" ? "selected" : "";
	return (
		<div className="text-center mt-5">
			<div id="trafficTop"></div>
			<div className="container" id="trafficBody">
				<div
					className={"light red " + redselected}
					onClick={() => colfn("red")}></div>
				<div
					className={"light yellow " + yellowselected}
					onClick={() => colfn("yellow")}></div>
				<div
					className={"light green " + greenselected}
					onClick={() => colfn("green")}></div>
			</div>
		</div>
	);
}

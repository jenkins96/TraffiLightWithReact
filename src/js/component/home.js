import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5" id="app">
			<div id="trafficTop"></div>
			<div className="container" id="trafficBody">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green selected"></div>
			</div>
		</div>
	);
}

import { Card } from "web3uikit";
import React from "react";
// import { useMoralis } from "react-moralis";

const styles = {
	title: {
	  fontSize: "20px",
		fontWeight: "700",
	},
	text: {
		fontSize: "16px",
	},
	card: {
		boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
		border: "1px solid #e7eaf3",
		borderRadius: "0.5rem",
	},
	timeline: {
		marginBottom: "-45px",
	},
};

export default function QuickStart() {
	// const { Moralis } = useMoralis();

	return (
		<div style={{ display: "flex", gap: "10px" }}>
			<Card style={styles.card} >
		        <h1>Helps you leaving your web3 legacy to your loved ones.</h1><br/>
		        <p>Webgacy is a web3 project focusing on handling digital legacy for web3 users.</p>
	        	<a
					href="https://github.com/voldown/webgacy-project/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read more here.
				</a>
      		</Card>
		</div>
	);
}

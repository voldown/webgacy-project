import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Assets from "components/Assets";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import ERC20Transfers from "components/ERC20Transfers";
import { Layout } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";

const { Header, Footer } = Layout;

const styles = {
	content: {
		display: "flex",
		justifyContent: "center",
		fontFamily: "Roboto, sans-serif",
		color: "#041836",
		marginTop: "130px",
		padding: "10px",
	},
	header: {
		position: "fixed",
		zIndex: 1,
		width: "100%",
		background: "#fff",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: "Roboto, sans-serif",
		borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
		padding: "0 10px",
		boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
	},
	headerRight: {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		fontSize: "15px",
		fontWeight: "600",
	},
};
const App = ({ isServerInfo }) => {
	const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
		useMoralis();

	useEffect(() => {
		const connectorId = window.localStorage.getItem("connectorId");
		if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
			enableWeb3({ provider: connectorId });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, isWeb3Enabled]);

	return (
		<Layout style={{ height: "100vh", overflow: "auto" }}>
			<Router>
				<Header style={styles.header}>
					<Logo />
					<MenuItems />
					<div style={styles.headerRight}>
						<Chains />
						<Account />
					</div>
				</Header>

				<div style={styles.content}>
					<Switch>
						<Route exact path="/quickstart">
							<QuickStart isServerInfo={isServerInfo} />
						</Route>
						<Route path="/assets">
							<Assets />
						</Route>
						<Route path="/erc20transfers">
							<ERC20Transfers />
						</Route>
						<Route path="/">
							<Redirect to="/quickstart" />
						</Route>
						<Route path="/nonauthenticated">
							<>Please login using the "Authenticate" button</>
						</Route>
					</Switch>
				</div>
			</Router>
			<Footer style={{ textAlign: "center" }}>
				<Text style={{ display: "block" }}>
					<a
						href="https://github.com/voldown/webgacy-project/"
						target="_blank"
						rel="noopener noreferrer"
					>
						📄 GitHub
					</a>
				</Text>
			</Footer>
		</Layout>
	);
};

export const Logo = () => (
	<div style={{ display: "flex" }}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="70.000000pt"
			height="35.000000pt"
			viewBox="0 0 700.000000 350.000000"
			preserveAspectRatio="xMidYMid meet"
		>
			<metadata>
				{"\nCreated by potrace 1.12, written by Peter Selinger 2001-2015\n"}
			</metadata>
			<g
				transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)"
				fill="#000000"
				stroke="none"
			>
				<path d="M0 1750 l0 -1750 3500 0 3500 0 0 1750 0 1750 -3500 0 -3500 0 0 -1750z m2704 704 c14 -13 16 -49 16 -235 l0 -219 43 22 c31 16 65 23 129 26 76 4 92 1 141 -21 214 -98 264 -399 97 -581 -62 -67 -119 -91 -220 -91 -71 0 -94 4 -136 25 l-52 26 -20 -23 c-17 -19 -31 -23 -76 -23 l-56 0 0 494 c0 271 -3 521 -6 555 l-7 61 66 0 c46 0 70 -5 81 -16z m-568 -405 c149 -27 255 -142 271 -292 5 -47 2 -57 -20 -83 l-25 -29 -236 -5 -236 -5 21 -43 c13 -26 39 -55 62 -70 36 -24 50 -27 126 -27 78 0 93 3 155 34 l68 33 24 -28 c13 -16 23 -32 24 -36 1 -22 -77 -89 -132 -114 -81 -36 -202 -40 -287 -9 -72 26 -152 100 -188 173 -25 51 -28 68 -28 157 0 84 4 107 23 146 51 103 137 173 242 195 71 16 67 16 136 3z m2520 -25 c55 -26 94 -73 112 -134 6 -19 12 -146 15 -282 l5 -248 -58 0 c-58 0 -59 1 -71 34 l-12 34 -39 -24 c-44 -28 -135 -54 -190 -54 -125 0 -220 62 -233 152 -24 159 76 241 355 295 82 15 90 19 90 39 0 13 -11 36 -24 51 -23 26 -29 28 -103 27 -55 -1 -96 -8 -138 -24 -105 -39 -107 -39 -132 19 -27 64 -20 74 76 107 138 48 257 51 347 8z m759 1 c28 -13 63 -34 79 -47 33 -28 31 -45 -14 -98 -25 -30 -31 -33 -47 -23 -112 77 -231 70 -310 -20 -74 -84 -68 -202 13 -284 63 -63 151 -80 229 -44 22 10 46 25 54 34 21 26 37 20 78 -29 l38 -47 -44 -38 c-64 -57 -139 -82 -232 -77 -137 8 -243 81 -302 206 -26 55 -31 77 -30 141 0 103 28 175 96 245 109 111 261 142 392 81z m-4647 12 c6 -7 43 -101 82 -207 39 -107 75 -198 78 -202 4 -4 43 77 86 180 92 220 99 232 131 232 32 0 38 -10 131 -232 43 -104 81 -185 85 -180 4 4 40 97 80 207 40 110 77 203 83 207 6 4 39 8 74 8 46 0 64 -4 68 -15 5 -13 -237 -634 -259 -662 -5 -7 -19 -13 -32 -13 -19 0 -37 31 -126 215 l-105 216 -104 -216 c-143 -299 -121 -307 -289 113 -72 180 -131 335 -131 345 0 14 10 17 69 17 44 0 72 -5 79 -13z m3275 -4 c4 -2 7 -24 7 -48 0 -45 -10 -55 -56 -55 -25 0 -32 -14 -13 -26 27 -16 52 -100 52 -169 0 -115 -59 -216 -158 -268 -55 -28 -173 -35 -247 -13 -71 20 -112 20 -129 0 -16 -20 -3 -44 34 -62 14 -7 97 -22 184 -33 321 -40 383 -77 383 -226 0 -108 -62 -185 -187 -234 -79 -30 -265 -39 -344 -16 -114 34 -176 97 -186 189 -8 78 19 127 89 162 28 14 44 26 35 26 -29 0 -113 47 -136 76 -63 80 -20 184 83 199 l43 7 -24 24 c-110 110 -80 334 57 429 76 52 98 56 310 49 107 -3 198 -8 203 -11z m1839 -202 l108 -214 24 54 c61 135 165 350 176 364 14 17 145 22 155 6 6 -11 -283 -613 -367 -766 -68 -122 -149 -243 -202 -301 l-45 -49 -52 52 -52 51 50 64 c72 90 144 200 192 293 l42 80 -146 279 c-80 154 -143 286 -140 293 3 10 23 13 77 11 l73 -3 107 -214z" />
				<path d="M2780 1887 l-55 -22 0 -165 0 -165 40 -19 c27 -13 63 -20 110 -20 86 -1 132 23 173 92 22 39 27 59 27 117 0 58 -5 78 -27 117 -51 85 -155 111 -268 65z" />
				<path d="M1982 1894 c-40 -20 -81 -71 -84 -105 l-3 -24 169 -3 c93 -1 173 1 177 5 14 14 -27 89 -62 114 -44 31 -148 38 -197 13z" />
				<path d="M4517 1659 c-127 -31 -177 -63 -177 -114 0 -51 30 -70 105 -69 49 1 77 8 122 30 l58 29 3 73 c3 84 9 81 -111 51z" />
				<path d="M3666 1900 c-76 -23 -130 -122 -106 -197 57 -178 322 -149 322 36 0 119 -102 195 -216 161z" />
				<path d="M3581 1214 c-52 -37 -61 -123 -17 -162 48 -43 175 -56 273 -27 108 32 139 133 51 164 -34 12 -214 40 -258 41 -14 0 -36 -7 -49 -16z" />
			</g>
		</svg>
	</div>
);

export default App;

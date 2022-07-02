import ERC20Balance from "./ERC20Balance";
import NFTBalance from "./NFTBalance";

function Assets() {
	return (
		<div>
			<ERC20Balance />
			<NFTBalance />
		</div>
	);
}

export default Assets;

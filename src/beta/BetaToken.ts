import {
    Blockchain,
    Calldata,
    OP20,
    OP20InitParameters,
} from '@btc-vision/btc-runtime/runtime';
import { u256 } from '@btc-vision/as-bignum/assembly';

@final
export class BetaToken extends OP20 {
    public override onDeployment(_calldata: Calldata): void {
        super.onDeployment(_calldata);

        // 1,000,000,000 BETA with 18 decimals = 10^27
        const maxSupply: u256 = u256.fromString('1000000000000000000000000000');
        const decimals: u8 = 18;
        const name: string = 'Beta';
        const symbol: string = 'BETA';

        this.instantiate(new OP20InitParameters(maxSupply, decimals, name, symbol));

        // Mint full supply to deployer
        this._mint(Blockchain.tx.origin, maxSupply);
    }
}

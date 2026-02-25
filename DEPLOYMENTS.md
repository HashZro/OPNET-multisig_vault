# MultSig Vault — Deployment Records

---

## OPNet Testnet — AlphaToken v2 (OP-20) ← ACTIVE

| Field | Value |
|---|---|
| **Date** | 2026-02-25 |
| **Network** | OPNet Testnet |
| **RPC Endpoint** | https://testnet.opnet.org |
| **Contract** | AlphaToken (ALPHA) — OP-20 token, 1B supply, mine() function |
| **Contract Address** | `opt1sqq0k32mjtxlhlsvwfn7awevg2h3vamaxrvhtz5th` |
| **Contract PubKey** | `0xd649045d50cc0fd8941b251918230389dcd1cf48c1b4a2fde0c2d23399e50eff` |
| **mine() selector** | `0x417c69bb` |
| **Funding Tx** | `396512fbc7f3ebd845e7f85d541943f82c1a8091562f8762f7830101d8278178` |
| **Deploy Tx** | `b5488aea555a613cd71f6194f0e18dfc12d3f91ab551280fde4aeb9d182ad83d` |
| **WASM size** | 35,297 bytes |
| **Deployer (p2tr)** | `opt1pr55ynlpcvfqm40kv5m4743th37xach304jvzzzcyq632qj9w53tqvzmf5k` |
| **Deployer (p2wpkh)** | `opt1qm57tmmyj3fw95j56fj2qqge6uwv65w2hut5dgp` |

---

## OPNet Testnet — BetaToken v2 (OP-20) ← ACTIVE

| Field | Value |
|---|---|
| **Date** | 2026-02-25 |
| **Network** | OPNet Testnet |
| **RPC Endpoint** | https://testnet.opnet.org |
| **Contract** | BetaToken (BETA) — OP-20 token, 1B supply, mine() function |
| **Contract Address** | `opt1sqrlu3rjls5eu49jkhed3z32t2ptf4jdxt5c0hnn5` |
| **Contract PubKey** | `0xf031608d82025a4f3017ae26176d20b4964adaa53ee0f74a3fbc81b425d5772b` |
| **mine() selector** | `0x417c69bb` |
| **Funding Tx** | `30a453f53f80fcded4c8c48080f14fa1b7d965457a9d9bbff29a6f2c0f86ea69` |
| **Deploy Tx** | `adf150cf7d07fb626b99ea39454eb64ae2c8f914fe36fea22acb46081b6a3b82` |
| **WASM size** | 35,289 bytes |
| **Deployer (p2tr)** | `opt1pr55ynlpcvfqm40kv5m4743th37xach304jvzzzcyq632qj9w53tqvzmf5k` |
| **Deployer (p2wpkh)** | `opt1qm57tmmyj3fw95j56fj2qqge6uwv65w2hut5dgp` |

---

## Superseded Deployments (no mine function)

| Contract | Address | Deploy Tx |
|---|---|---|
| AlphaToken v1 | `opt1sqp2m9wyc759rxucgnjq02l78yrh4ylaypyhx4j48` | `0a55de2c8c97591bc58276c3aa83cc1bc5f0f5823dffd6269d64b43dd3e6ac02` |
| BetaToken v1 | `opt1sqzjpdemrpyuapuhwky72s270j0ddgjzyfcn7m4xk` | `4de5ab258208a8cdb5e6d7585e0d1173a0c64d1e35087fc1f5f023eac61a3dc6` |

---

## Key Technical Notes

- OPNet testnet indexes addresses with the `opt` bech32 HRP, not the standard Bitcoin `tb` prefix.
  The underlying witness program is identical — only the HRP and checksum differ.
- Deployment requires two broadcast transactions: a **funding tx** first, then the **deploy tx**
  (the deploy tx spends the output of the funding tx).
- The deployer wallet uses dual keys: secp256k1 (classical) + ML-DSA-44 (post-quantum).
- MLDSA key size on OPNet: 2560 bytes / 5120 hex chars (32 bytes larger than NIST FIPS 204 standard).
- Fee rate for v2 deployments: 50 sat/vbyte.
- `mine()` selector: `0x417c69bb` (same for both tokens — derived from the function signature `mine()`).
- `mine()` requires ≥1000 sat (0.00001 BTC) sent to the contract address in the same transaction.
  Contract verifies via `tx.outputs` `scriptPublicKey` byte comparison.
- `mine()` mints 100 tokens (100 × 10^18 raw units) to the caller.
- Deployer pre-mint: 10,000,000 tokens each (for testing); remaining 990,000,000 are mineable.

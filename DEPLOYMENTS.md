# MultSig Vault — Deployment Records

## OPNet Testnet — AlphaToken (OP-20)

| Field | Value |
|---|---|
| **Date** | 2026-02-25 |
| **Network** | OPNet Testnet |
| **RPC Endpoint** | https://testnet.opnet.org |
| **Contract** | AlphaToken (ALPHA) — OP-20 token, 1B supply |
| **Contract Address** | `opt1sqp2m9wyc759rxucgnjq02l78yrh4ylaypyhx4j48` |
| **Contract PubKey** | `0x4b0dbc06cbc1906e9b406b22e631ad9a1e24bc8a78cfaf3035a367f1d0bdf6f7` |
| **Funding Tx** | `a0a1663341f969cba25f38c7c02d6549175451964ba9e2d151c1c289809e0257` |
| **Deploy Tx** | `0a55de2c8c97591bc58276c3aa83cc1bc5f0f5823dffd6269d64b43dd3e6ac02` |
| **WASM size** | 33,336 bytes |
| **Deployer (p2tr)** | `opt1pr55ynlpcvfqm40kv5m4743th37xach304jvzzzcyq632qj9w53tqvzmf5k` |
| **Deployer (p2wpkh)** | `opt1qm57tmmyj3fw95j56fj2qqge6uwv65w2hut5dgp` |

---

## OPNet Testnet — BetaToken (OP-20)

| Field | Value |
|---|---|
| **Date** | 2026-02-25 |
| **Network** | OPNet Testnet |
| **RPC Endpoint** | https://testnet.opnet.org |
| **Contract** | BetaToken (BETA) — OP-20 token, 1B supply |
| **Contract Address** | `opt1sqzjpdemrpyuapuhwky72s270j0ddgjzyfcn7m4xk` |
| **Contract PubKey** | `0x3aad21bbfc7d49a2699a8477159ffeca1b84fdd155a44c6f822048062235e6e9` |
| **Funding Tx** | `3994db2f98b57e9f37e378b1392ef2b978c91bddef960adf6d5405007f3dcb2d` |
| **Deploy Tx** | `4de5ab258208a8cdb5e6d7585e0d1173a0c64d1e35087fc1f5f023eac61a3dc6` |
| **WASM size** | 33,332 bytes |
| **Deployer (p2tr)** | `opt1pr55ynlpcvfqm40kv5m4743th37xach304jvzzzcyq632qj9w53tqvzmf5k` |
| **Deployer (p2wpkh)** | `opt1qm57tmmyj3fw95j56fj2qqge6uwv65w2hut5dgp` |

---

## Key Technical Notes

- OPNet testnet indexes addresses with the `opt` bech32 HRP, not the standard Bitcoin `tb` prefix.
  The underlying witness program is identical — only the HRP and checksum differ.
- Deployment requires two broadcast transactions: a **funding tx** first, then the **deploy tx**
  (the deploy tx spends the output of the funding tx).
- The deployer wallet uses dual keys: secp256k1 (classical) + ML-DSA-44 (post-quantum).
- MLDSA key size on OPNet: 2560 bytes / 5120 hex chars (32 bytes larger than NIST FIPS 204 standard).
- Fee rate used: 500 sat/vbyte.

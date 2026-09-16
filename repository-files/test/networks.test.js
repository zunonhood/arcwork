import assert from "node:assert/strict";
import test from "node:test";
import { arcMainnet, arcTestnet } from "../src/networks.js";

test("uses official Arc network identifiers", () => {
  assert.equal(arcMainnet.id, 5042);
  assert.equal(arcTestnet.id, 5042002);
  assert.equal(arcMainnet.nativeCurrency.symbol, "USDC");
  assert.equal(arcMainnet.nativeCurrency.decimals, 18);
  assert.equal(arcMainnet.rpcUrls.default.http[0], "https://rpc.mainnet.arc.io");
  assert.equal(arcTestnet.blockExplorers.default.url, "https://explorer.testnet.arc.io");
});
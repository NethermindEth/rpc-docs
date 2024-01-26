---
slug: /batch
sidebar_position: 5
title: Batch calls
---

# Batch calls

The RPC service supports batch calls, in accordance with the JSON-RPC [spec](https://www.jsonrpc.org/specification#batch). Just pass an array of what you'd normally pass as the request body. You'll get an array of responses back.

#### Request

```bash
curl --location 'https://free-rpc.nethermind.io/mainnet-juno' \
--header 'Content-Type: application/json' \
--data '[
    {
		"jsonrpc": "2.0",
        "method": "juno_version",
        "id": 0
    },
    {
        "jsonrpc": "2.0",
        "method": "starknet_specVersion",
        "params": [],
        "id": 1
    },
    {
        "jsonrpc": "2.0",
        "method": "starknet_chainId",
        "id": 2
    },
    {
        "jsonrpc": "2.0",
        "method": "starknet_blockNumber",
        "id": 3
    }
]'
```

#### Response

```json
[
   {
      "jsonrpc": "2.0",
      "result": "0.6.0",
      "id": 1
   },
   {
      "jsonrpc": "2.0",
      "result": "v0.9.3",
      "id": 0
   },
   {
      "jsonrpc": "2.0",
      "result": "0x534e5f4d41494e",
      "id": 2
   },
   {
      "jsonrpc": "2.0",
      "result": 519552,
      "id": 3
   }
]
```

Note that the results may not be in the same order as the method calls, so use the `id` field to associate the calls with the results.

Also note that this is NOT the same as Starknet's [multicall](https://www.starknetjs.com/docs/guides/multicall/) feature, which allows you to interact with multiple contracts within one transaction.

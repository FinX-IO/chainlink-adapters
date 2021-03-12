# Chainlink External Adapter for FinX

### Environment Variables

| Required? |  Name   |                                         Description                                         | Options | Defaults to |
| :-------: | :-----: | :-----------------------------------------------------------------------------------------: | :-----: | :---------: |
|    ✅     | API_KEY | An API key that can be obtained from [here](https://signup.finx.io/api) |         |             |

### Input Parameters

| Required? |   Name   |     Description     |               Options                | Defaults to |
| :-------: | :------: | :-----------------: | :----------------------------------: | :---------: |
|           | endpoint | The endpoint to use | [security-info](#Security-Info-Endpoint) | security-info |

---

## Security Info Endpoint

Returns a json-formatted set of information about a financial security.

### Input Params

| Required? |   Name    |         Description          | Options | Defaults to |
| :-------: | :-------: | :--------------------------: | :-----: | :---------: |
|    ✅     | `securityId` | The ID of the security to query |         |             |

### Sample Input

```json
{
  "id": "1",
  "data": {
    "securityId": "912828UM4J"
  }
}
```

### Sample Output

```json
{
  "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
  "data": {
    "security_id": "912828UM4J",
    "security_info": {
      "security_name": "20 Year Note 2035/05",
      "coupon": "1.75",
      "next_coupon_payment_date": "20210510",
      "latest_price": "98.755",
      "effective_duration": "11.5569"
    },
  },
  "result": 30,
  "statusCode": 200
}
```

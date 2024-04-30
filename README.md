# ipInfoApi
通過 Workers 部署的，IP 地址信息獲取，通過 API 調用。

推薦使用 Cloudflare Workers 部署 IP 地址信息獲取。只需複製、粘貼或下載、導入即可。

部署后直接訪問即可。

```json
{
    "code": 200,
    "msg": "OK",
    "time": 1714457816445,
    "data": {
        "ip": "203.**.**.94",
        "rayId": "87c55b******203d",
        "pseudoIPv4": null,
        "connectingIPv6": null,
        "country": "TW",
        "region": "Taipei",
        "city": "Taipei",
        "colo": null,
        "latitude": "25.03297",
        "longitude": "121.56541",
        "service": "Chunghwa Telecom",
        "lang": "zh,zh-TW;q=0.9,en;q=0.8,en-US;q=0.7,en-GB;q=0.6",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0"
    }
}
```

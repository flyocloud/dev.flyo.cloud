# Rate Limiting

Alle Anfragen an den Flyo Server unterliegen einem Rate Limiting. Das Rate Limiting ermöglicht maximal 30 Anfragen innerhalb eines Zeitraums von 10 Sekunden. Wenn dieses Limit überschritten wird, antwortet der Server mit dem Status Code 429 Too Many Requests, und der anfragende Host wird vorübergehend blockiert und kann während dieser Zeit keine neuen Anfragen an den Server senden.

Für SDKs und Nitros ist ein Limit von 50 Anfragen innerhalb eines Zeitraums von 10 Sekunden festgelegt. Dadurch können SDKs mit der Einstellung "per-page=100" innerhalb von 10 Sekunden maximal 5000 Datensätze abrufen.

## Übersicht

+ api.flyo.cloud => 30 Anfragen in 10 Sekunden
+ api.flyo.cloud/sdk => 50 Anfragen in 10 Sekunden
+ api.flyo.cloud/nitro => 50 Anfragen in 10 Sekunden
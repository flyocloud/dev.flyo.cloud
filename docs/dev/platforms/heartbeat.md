# Heartbeat City Frontend


Das Heartbeat City Frontend ist ein standardisierter Ausgabekanal für fixe Inhaltstypen (Entitäten). Dazu gehören Points-of-Interest, Veranstaltungen und Storys (Blogbeiträge).

## Weiterleitungen

Die folgenden Standard-URLs können verwendet werden, um auf die gewünschten Inhalte weiterzuleiten:

+ `example.com/inbound/redirect/poi/<id:[0-9]+>`: Weiterleitung zu einem Point-of-Interest
+ `example.com/inbound/redirect/event-date/<id:[0-9]+>`: Weiterleitung zu einer Veranstaltung (Event-Datum)
+ `example.com/inbound/redirect/blog/<identifier:[0-9a-z]+>`: Weiterleitung zu einer Story
+ `example.com/inbound/redirect/blog/preview/<identifier:[0-9a-z]+>`: Weiterleitung zu einer Preview Story

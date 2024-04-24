# Flyo Developer-Ressourcen

Die Flyo Developer-Ressourcen helfen beim Integrieren von Inhalten aus Flyo in die verschiedenen Output-Kanäle.

+ [Bilder](infos/images.md)
+ [Metriken](infos/metrics.md)
+ [Content Pools](infos/pools.md)
+ [Inhalt Mapping](infos/mapping.md)
+ [Rate Limit](infos/ratelimit.md)

## Voraussetzung

+ Ein aktiver Flyo Account, der mit einer Organisation verbunden ist. 
+ Die Berechtigungen für den Bereich "Integrationen" in der entsprechenden Organisation.

## Glossar

+ `Entität/Entity`: Bezeichnet einen Inhaltstyp z.B `Blog`, `Veranstaltung`
+ `Content Pool`: Behälter, der kuratierte oder regelbasierte Inhalte einer Entität organisiert. Content Pools bilden die Grundlage für die Verteilung von Inhalten über Integrationen. Ein kuratierter Content Pool kann über mehrere Entitäten hinweg organisiert sein.
+ `Integration`: Der Ort an dem die Daten von Content Pools ausgespielt werden, z.B via API für eine Webseite oder ein Embed Code welcher auf einer Webseite eingebunden wird.
+ `Flyo Metric`: Anzahl Impressionen eines einzelnen Eintrags messen und in Flyo visualieren.
+ `Organisation`: In der Struktur von Flyo bildet die Organisation die höchste Einheit. Innerhalb einer Organisation können verschiedene Teammitglieder zugewiesen werden. Alle Daten, Inhalte, Integrationen und Aktivitäten sind einer spezifischen Organisation zugeordnet. Dabei ist es möglich, dass ein Teammitglied oder Benutzer gleichzeitig Mitglied in mehreren Organisationen sein kann.

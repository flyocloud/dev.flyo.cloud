# Nitro Integration

:::danger Im Aufbau
Dieser Abschnitt ist noch im Aufbau
:::

Das Flyo Nitro ist ein Headless Content Management System, welches Inhalte aus Entitäten (Inhaltstypen) und klassische, statische Inhaltselemente (Blöcken) verbindet. Die Webseite wird mit einem "Site-Tree" bzw. einer Navigation aufgebaut, wobei Inhalte via [Mapping](/infos/mapping) oder statischen Blöcken hinzugefügt werden kännen. Wenn durch die verwendete Programmiersprache unterstützt, können Teile der statischen Inhaltselemente direkt auf der Webseite bearbeitet werden.

+ [API Dokumentation](https://nitro-openapi.flyo.cloud/)
+ [Open API Datei](https://api.flyo.cloud/nitro/v1/openapi)

## Konzept

Flyo Nitro basiert auf vier strategischen Pfeilern, die alle eine wichtige Rolle bei der Entwicklung von Webseiten spielen:

+ `Config`: Die Config lädt alles, was benötigt wird, um sich innerhalb des Layouts zu bewegen. Dazu gehören die Navigation oder globale Inhalte (z.B. "Locations" einer Entität), die im Footer verwendet werden sollen.
+ `Pages`: Seiten werden anhand des Slugs (Pfads) evaluiert und enthalten alle Inhalte, die für das Befüllen der Seite benötigt werden. Dazu gehören alle Inhaltselemente (Blöcke), aber auch Meta-Informationen wie "og-descriptions". Dynamische Inhalte aus Entitäten können über [Mapping](/infos/mapping) auch in Inhaltselementen verwendet werden.
+ `Entity`: Entitäten können mittels eines eindeutigen Identifikators abgerufen werden (sofern sie in Nitro konfiguriert wurden) und liefern alle Details (Felder) zu einem bestimmten Inhalt.
+ `Entwicklung vs. Produktion`: Wenn Daten im Flyo User Interface geändert werden, ohne sie zu speichern, sind diese Änderungen für den Development Token verfügbar. Der Production Token verwendet nur Daten, die durch Speichern gesichert wurden. Dadurch ist eine Live-Vorschau während der Dateneingabe möglich.

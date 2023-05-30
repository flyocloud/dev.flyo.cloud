# Nitro Integration

:::danger Im Aufbau
Dieser Abschnitt ist noch im Aufbau
:::

Das Flyo Nitro ist ein Headless Content Management System, welches Inhalte aus Entitäten (Inhaltstypen) und klassische, statische Inhaltselemente (Blöcken) verbindet. Die Webseite wird mit einem "Site-Tree" bzw. einer Navigation aufgebaut, wobei Inhalte via [Mapping](/infos/mapping) oder statischen Blöcken hinzugefügt werden kännen. Wenn durch die verwendete Programmiersprache unterstützt, können Teile der statischen Inhaltselemente direkt auf der Webseite bearbeitet werden.

## Key Konzept

Das Flyo Nitro baut auf drei strategischen Pfeilern auf, die allesamt bei der Entwicklung von Webseiten eine zentrale Rolle spielen:

- `Config` Die config lädt alles, was benötigt wird, um sich innerhalb des Layouts zu bewegen.  Dazu gehören die Navigation oder globale Inhalte (z.B. "Locations" einer Entität, die im Footer verwendet werden soll).
- `Pages` Seiten werden anhand des Slugs (Pfad) evaluiert und beinhalten alle Inhalte, die für das Befüllen der Seite benötigt werden. Dazu ghören alle Inhaltselemente (Blöcke), aber auch Meta-Informationen wie "og-descriptions". Dynamisch Inhalte aus Entitäten können via [Mapping](/infos/mapping) auch in Inhaltselementen verwendet werden.
- `Entity` Entiäten können mittels unique identifier abgerufen werden (wenn diese im Nitro konfiguriert wurden) und geben alle Details (Felder) zu einem bestimmten Inhalt aus.
- `Devlopment vs Production` Wenn Daten im Flyo User Interface geändert werden, ohne sie zu speichern, sind diese Änderungen für den Development Token verfügbar, der Production Token verwendet nur Daten, die durch Speichern gesichert wurden. Dies ermöglicht eine Live-Vorschau während der Dateneingabe.

Alle Endpunkte werden durch eine [Open API Beschreibung](https://api.flyo.cloud/nitro/v1/openapi) definiert und sind für alle Programmiersprachen verfügbar.

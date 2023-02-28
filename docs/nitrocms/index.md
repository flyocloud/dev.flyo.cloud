# Flyo Nitro CMS Integration

:::danger Im Aufbau
Dieser Abschnitt ist noch im Aufbau (Stand: Februar 2023).
:::

Das Flyo Nitro CMS ist ein Headless Content Management System, welches Inhalte aus Entitäten (Inhaltstypen) und klassische, statische Inhaltselemente (Blöcken) verbindet. Die Webseite wird mit einem "Site-Tree" bzw. einer Navigation aufgebaut, wobei Inhalte via [Mapping](/infos/mapping) oder statischen Blöcken hinzugefügt werden kännen. Wenn durch die verwendete Programmiersprache unterstützt, können Teile der statischen Inhaltselemente direkt auf der Webseite bearbeitet werden.

## Key Konzept

Das Flyo Nitro CMS baut auf drei strategischen Pfeilern auf, die allesamt bei der Entwicklung von Webseiten eine zentrale Rolle spielen:

- config: Die config lädt alles, was benötigt wird, um sich innerhalb des Layouts zu bewegen. Dazu gehören Navigation oder Globale Inhalte (z.b "Locations" aus einer Entität, die im Footer iteriert werden sollen).
- pages: Seiten werden anhand des Slugs (Pfad) evaluiert und beinhalten alle Inhalte, die für das Befüllen der Seite benötigt werden. Dazu ghören alle Inhaltselemente (Blöcke), aber auch Meta-Informationen wie "og-descriptions". Dynamisch Inhalte aus Entitäten können via [Mapping](/infos/mapping) auch in Inhaltselementen verwendet werden.
- entity: Entiäten können mittels unique identifier abgerufen werden (wenn diese im Nitro CMS konfiguriert wurden) und geben alle Details (Felder) zu einem bestimmten Inhalt aus.

Alle Endpunkte werden durch eine [Open API Beschreibung](https://api.flyo.cloud/nitro/openapi) definiert und sind für alle Programmiersprachen verfügbar.

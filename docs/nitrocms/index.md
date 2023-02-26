# Flyo Nitro CMS Integration

:::danger Im Aufbau
Diese Sektion ist zur Zeit noch im Aufbau. Stand Februar 2023
:::

Das Flyo Nitro CMS ist ein Headless Inhaltverwaltungssystem welches Inhalte aus Entitäten und klassischen statischen Inhaltselemente (Blöcke) verbindet. Die Seite wird mit einem "Site-Tree" / Navigation aufgebaut und inhalte können via [Mapping](/infos/mapping) oder statischen Blöcken hinzugefügt werden. Wenn die Programmiersprache es unterstützt können teile der Statische Inhaltselemente direkt auf der Webseite bearbeitet werden.

## Key Konzept

Das Flyo Nitro CMS verfolgt 3 strategisch wichtige punkte wenn es um das entwickeln von Webseiten geht:

- config: Die config lädt alles, was benötigt wird um sich innerhalb das Layouts zu bewegen. Die Navigation, Globale Inhalte (z.b "Locations" aus einer Entität welche im Footer iteriert werden möchten)
- pages: Die Seiten werden anhand des Slugs (Pfad) evaluiert und beinhalten alle Daten welche benötigt werden um die Seite mit Inhalt zu befüllen. Dazu ghören alle Inhaltselemente (Blöcke) und aber auch Meta information wie og description. Dynamisch Inhalte aus Entitäten können auch in Inhaltselementen via [Mapping](/infos/mapping) verwendet werden.
- entity: Entiäten können mittels unique identifier abgerufen werden (wenn diese in Nitro konfiguriert wurden) und liefern alle daten zu einem Entitäts detail zurück.

Alle Endpunkte werden durch eine [Open API Beschreibung](https://api.flyo.cloud/nitro/openapi) definiert und somit verfügbar für alle Programmiersprachen.
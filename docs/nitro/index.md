# Nitro Headless CMS Grundlagen

<iframe style="width:100%; margin-top:40px; margin-bottom:40px;" height="380" src="https://www.youtube.com/embed/QRB2NzMkvNA?si=mzd1UfRPgFR7WKpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Das Flyo Nitro ist ein Headless Content Management System, das die Inhalte von Entitäten (Inhaltstypen) und klassischen statischen Inhaltselementen (Blöcken) miteinander verbindet. Die Website wird mithilfe eines "Site-Trees" oder einer Navigation aufgebaut, wobei Inhalte entweder über [Mapping](../dev/infos/mapping) oder durch Verwendung statischer Blöcke hinzugefügt werden können.

:::info Erkunde diese Ressourcen, um ein besseres Verständnis der Nitro-Integration zu erhalten und deine Integrationsprojekte erfolgreich umzusetzen:
+ [:point_right: Online-API-Dokumentation: Die vollständige Dokumentation der Nitro-Integration-API. Diese Dokumentation bietet umfassende Informationen über die verfügbaren Endpunkte, Anfragemethoden, Parameter und Antwortformate.](https://nitro-openapi.flyo.cloud/)
+ [:point_right: Open-API-Datei: Diese Datei enthält die Spezifikationen und Definitionen der API-Endpunkte, die Ihnen bei der Entwicklung von Integrationen helfen können.](https://api.flyo.cloud/nitro/v1/openapi)
:::

## Die Grundlagen von Nitro

Flyo Nitro basiert auf vier strategischen Säulen, die alle eine wichtige Rolle bei der Entwicklung von Webseiten spielen:

+ [Config](config): Die Config lädt alles, was benötigt wird, um sich innerhalb des Layouts zu bewegen. Dazu gehören die Navigation oder globale Inhalte (z.B. "Locations" einer Entität), die im Footer verwendet werden sollen.
+ `Pages`: Seiten werden anhand des Slugs (Pfads) evaluiert und enthalten alle Inhalte, die für das Befüllen der Seite benötigt werden. Dazu gehören alle Inhaltselemente (Blöcke), aber auch Meta-Informationen wie "og-descriptions". Dynamische Inhalte aus Entitäten können über [Mapping](../dev/infos/mapping) auch in Inhaltselementen verwendet werden.
+ `Entity`: Entitäten können mittels eines eindeutigen Identifikators oder Slug abgerufen werden (sofern sie in Nitro konfiguriert wurden) und liefern alle Details (Felder) zu einem bestimmten Inhalt.
+ `Entwicklung vs. Produktion`: Wenn Daten im Flyo User Interface geändert werden, ohne sie zu speichern, sind diese Änderungen für den Development Token verfügbar. Der Production Token verwendet nur Daten, die durch Speichern gesichert wurden. Dadurch ist eine Live-Vorschau während der Dateneingabe möglich.
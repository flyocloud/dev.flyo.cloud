# Konzepte

## DEV vs PROD Token

Die Unterscheidung zwischen DEV und PROD Token ermöglicht eine bessere Verwaltung von Entwicklungs- und Produktionsumgebungen. DEV-Token werden in der Entwicklungsphase verwendet, um den Zugriff auf bestimmte Funktionen oder Ressourcen zu ermöglichen, die für Tests und Fehlerbehebungen relevant sind. PROD-Token hingegen werden in der Produktionsumgebung eingesetzt, um den Zugriff auf geschützte oder sensible Informationen zu regeln und die Sicherheit zu gewährleisten.

(TODO)

- Was wird abgedeckt, was nicht (z.b Sorting im Dev Token, Entitäten nie im Dev Token)

## Block Development

Bei der Erstellung von Blöcken, ähnlich wie bei flyo, sollten bestimmte Schritte beachtet werden. Nachdem ein Block erstellt wurde, muss überlegt werden, wie dieser in der App verwendet wird. Welche Funktionen und Eigenschaften sollen in der App damit umgesetzt werden? Es ist wichtig, den Unterschied zwischen Content, Config und Items zu verstehen. Content bezieht sich auf den eigentlichen Inhalt, der im Block angezeigt wird, während Config die Konfigurationsoptionen für den Block definiert. Items können als individuelle Elemente oder Datenpunkte betrachtet werden, die im Block verwendet werden.

(TODO)

- Unterschied zwische content, config, items
- Verschachtelte Elemente
- Identifier/Komponente änderung

## Routing

Beim Umgang mit Routings ist es wichtig zu wissen, wann man eine Entität benötigt und wann nicht. Eine Entität wird normalerweise dann benötigt, wenn es eine bestimmte Ressource oder einen spezifischen Endpunkt gibt, auf den zugegriffen werden muss. Wenn jedoch allgemeine Routen oder Pfade behandelt werden, kann eine Entität möglicherweise umgangen werden. Es ist ratsam, Routings sorgfältig zu analysieren und zu überlegen, ob eine spezifische Entität erforderlich ist oder nicht, um die Effizienz und Klarheit des Codes zu gewährleisten.

(TODO)

- Anlegen in Flyo
- Routes registreiren

## Entity Detail

(TODO)

- By UniqueID
- By Slug

## Page Properties

Page Properties spielen sowohl in der Navigation als auch auf den einzelnen Seiten eine wichtige Rolle. In der Navigation können Page Properties verwendet werden, um die Darstellung und das Verhalten von Navigationspunkten zu steuern. Auf einer Seite selbst können Page Properties genutzt werden, um bestimmte Eigenschaften oder Funktionen der Seite anzupassen. Einige Anwendungsbeispiele für Page Properties sind das Festlegen der Seitentitel, das Aktivieren/Deaktivieren bestimmter Funktionen oder das Anpassen des Layouts basierend auf der Seite, auf der der Benutzer sich befindet.

(TODO)

- Beispiel Colors
- Beispiel Icons
- Vererben erklären

## Suchen

Die Suchfunktion ermöglicht es Benutzern, innerhalb der App nach bestimmten Inhalten, Elementen oder Informationen zu suchen.

(TODO)

- Paginierung
- Beispiel

## Sitemap

Eine Sitemap ist eine strukturierte Übersicht über die Seiten und Inhalte einer Website oder einer App. Sie dient als Navigationshilfe für Benutzer und Suchmaschinen, um den Überblick über die verfügbaren Inhalte zu behalten. 

(TODO)

- sitemamp.xml
- Beispiel
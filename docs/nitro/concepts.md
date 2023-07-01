# Konzepte

:::danger Im Aufbau
Dieser Abschnitt wird derzeit noch bearbeitet.
:::

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

## Routing / Entity Detail

Beim Umgang mit Routings ist es wichtig zu wissen, wann eine Entität erforderlich ist und wann nicht. Eine Entität wird normalerweise benötigt, wenn auf eine bestimmte Ressource zugegriffen werden muss, z. B. ein Blog, ein Event, ein Team, ein POI usw. Die Webseite, die Nitro integriert, muss sich daher um die "Detailansicht" dieser Einträge kümmern. In Frameworks wird dies in der Regel als Routing bezeichnet, da eine "URL-Regel" erstellt werden muss. Zum Beispiel `blogs/<slug>` oder `veranstaltung/<uniqueid>`.

Anhand des Slugs oder der Unique-ID werden dann alle Informationen abgerufen, die im Entitäten-Mapping zur Verfügung gestellt wurden, und in die Webseite integriert. Hierfür gibt es verschiedene Endpunkte, um diese Informationen abzurufen. Weitere Informationen findest du in der [API-Dokumentation](https://nitro-openapi.flyo.cloud/#tag/Entities):

- Entität abrufen über [Unique-ID](https://nitro-openapi.flyo.cloud/#tag/Entities/operation/entityByUniqueid)
- Entität abrufen über [Slug](https://nitro-openapi.flyo.cloud/#tag/Entities/operation/entityBySlug) (optional, aber empfohlen: mit Angabe der Type-ID)

![Nitro Routing](assets/nitro-routing.png)

Um Links zu diesen Entitäten zu vereinfachen, wird automatisch in allen Abschnitten des `Mapping Content Pool` ein Feld namens `link` ausgegeben, das den Slug und die Unique-ID enthält. Falls Routings definiert wurden, werden diese ebenfalls direkt aufgelöst und mitgeliefert. Ein Beispiel für den API-Output sieht wie folgt aus:

```json
[
    {
        "title": "Die Savanne",
        "link": {
            "entity_unique_id": "DOUmbwlt",
            "entity_slug": "savanne",
            "entity_type_id": 55,
            "routes": {
                "detail": "/detail/DOUmbwlt/savanne"
            }
        }
    },
    {
        "title": "Die Eiswüste",
        "link": {
            "entity_unique_id": "RceTkIJZ",
            "entity_slug": "arktis",
            "entity_type_id": 55,
            "routes": {
                "detail": "/detail/RceTkIJZ/arktis"
            }
        }
    }
]
```

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
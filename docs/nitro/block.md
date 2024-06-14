# Block / Komponenten

> Ein Block wird auch **Komponenten** genannt und wird innerhalb einer [Seite](pages) Platziert

Bei der Erstellung von Blöcken, sollten bestimmte Schritte beachtet werden. Nachdem ein Block erstellt wurde, muss überlegt werden, wie dieser in der App verwendet wird. Welche Funktionen und Eigenschaften sollen in der App damit umgesetzt werden? Es ist wichtig, den Unterschied zwischen Content, Config und Items zu verstehen. Content bezieht sich auf den eigentlichen Inhalt, der im Block angezeigt wird, während Config die Konfigurationsoptionen für den Block definiert. Items können als individuelle Elemente oder Datenpunkte betrachtet werden, die im Block verwendet werden.

## Flyo Blocks umfasst die folgenden wesentlichen Konfigurationspunkte:

![Nitro Inhaltselement](assets/block.png)

1. Der technische Identifier (Snake Case) kann genutzt werden, um den Block auf der Website/Applikation eindeutig zu identifizieren.
2. Der Komponenten-Identifier (Camel Case) ermöglicht ebenfalls die Identifikation des Blocks innerhalb der Webseite/Applikation. Der Komponenten-Identifier wird in der Regel in komponentenbasierten Systemen verwendet.
3. Bei Aktivierung der Verschachtelung können weitere Inhaltslemente innerhalb der benannten Position eingefügt werden. In der API werden diese Verschachtelungen als Slots bezeichnet, wobei jedem Slot eine feste Kennung zugewiesen wird.
4. Inhalte repräsentieren die klassischen Variablen, die für dieses Inhaltslement benötigt werden, wie zum Beispiel Text oder Titel. In der API wird dies als `content` bezeichnet.
5. Optionen werden häufig für optionale Darstellungsvarianten dieses Inhaltslements verwendet, wie zum Beispiel "Farbe" oder "Größe". In der API wird dies als `config` bezeichnet.
6. Die Items sind immer ein Array, das Daten aus einem [Entität Content-Pool](entities) iteriert. In der API werden diese als `items` bezeichnet.

## Platzhalter Verschachtelung

Die Verschachtelung ist ein optionales Feature, das es ermöglicht, weitere Inhalte innerhalb eines Inhalteselements einzufügen. Dies ist besonders nützlich, wenn ein Inhalteselement an bestimmten Positionen ausgegeben werden soll; klassischerweise könnte man hier an ein Grid denken, das eine Spalte links und rechts hat. In der API wird dies als `slots` bezeichnet.

![Nitro Inhaltselement](assets/slotscfg.png)

1. Die Platzhalterverschachtelung kann mit der Checkbox aktiviert werden. Danach erscheint der Reiter "Platzhalter Verschachtelung".
2. Jeder Platzhalter hat ein Label, das in der Administration angezeigt wird, und einen Identifier, der benötigt wird, um auf die Verschachtelung zuzugreifen. Die "Spaltenbreite in Flyo" ist eine Einstellung für die Administration, wie man im nachfolgenden Bild sehen kann.

![Nitro Inhaltselement](assets/slots.png)

In diesem Beispiel wurde ein Block mit drei verschachtelten Platzhaltern erstellt (Oben, Links und Rechts). Diese Platzhalter wurden mit weiteren Inhaltselementen gefüllt. Innerhalb der Pages-Endpunkt-Response werden die Platzhalter als `slots` bezeichnet. Eine Beispiel-Response könnte wie folgt aussehen:

```json
{
  "title": "Page Title",
  "json": [
    {
      "slots": {
        "top": {
          "identifier": "top",
          "label": "Oben",
          "content": []
        },
        "left": {
          "identifier": "left",
          "label": "Links",
          "content": []
        },
        "right": {
          "identifier": "right",
          "label": "Rechts",
          "content": []
        }
      }
    }
  ]
}
```

Dabei beinhaltet die Variable `content` wiederum ein Array aus Inhaltselementen.
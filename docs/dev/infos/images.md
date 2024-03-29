# Bilder (Proxy)

Das Speichersystem von Flyo bietet die Möglichkeit, Bilder ohne zusätzliche Software an den aktuellen Verwendungszweck anzupassen. Dazu gehört das Beschneiden von Bildern, das Zuschneiden nach Fokuspunkt oder das Formatieren von Dateien in ein anderes Dateiformat.

## Zuschneiden Filter

Unter `https://storage.flyo.cloud/{DATEINAME}` sind alle Bild-Dateien aufrufbar. Um eine kleinere Version eines Bildes aufzurufen, kann einen Filter mit der gewünschten Auflösung an die Adresse gehängt werden:

| Aufbau        | Beispiel           
| ------------- |-------------
| `{DATEINAME}/thumb/{BREITE}x{HÖHE}`|`example.jpg/thumb/300x300`

Anstelle von DATEINAME den Dateinamen eingeben und anstelle von BREITE und HÖHE die gewünschte Grösse in Pixel. Um eine Seite dynamisch zu berechnen kann der Wert `null` verwendet werden. 

Ein Beispiel mit der Original Bild Datei `https://storage.flyo.cloud/integrationsgruppe-flyowebseite_7a158241.jpg`:

<figure>
  <img src="https://storage.flyo.cloud/integrationsgruppe-flyowebseite_7a158241.jpg">
</figure>

Eine Thumb-Filter Adresse für die oben genannte URL könnte wie folgt aussehen `https://storage.flyo.cloud/integrationsgruppe-flyowebseite_7a158241.jpg/thumb/250x250`.

| Grösse      | Beispiel           
| ------------- |-------------
| 250x250       |Gleiche Höhe und Breite definiert:<br /><br />![Flyo Storage](https://storage.flyo.cloud/filter/thumb/250x250/integrationsgruppe-flyowebseite_7a158241.jpg)
| 250xnull       |Höhe dynamisch berechnet anhand der Breite mit dem originalen Seitenverhältnis:<br /><br />![Flyo Storage](https://storage.flyo.cloud/filter/thumb/250xnull/integrationsgruppe-flyowebseite_7a158241.jpg)
| nullx250       |Breite dynamisch berechnet anhand der Höhe mit dem originalen Seitenverhältnis:<br /><br />![Flyo Storage](https://storage.flyo.cloud/filter/thumb/nullx250/integrationsgruppe-flyowebseite_7a158241.jpg)

::: info
Bilder in Flyo werden auf eine maximale Breite oder Höhe von 2560 Pixel zugeschnitten. Daher gilt dies auch als Limit für Breiten- und/oder Höhendefinitionen.
:::

## Fokus

Manchmal kommt es vor (gewollt oder ungewollt), dass das wichtigste Element in einem Bild nicht genau in der Mitte liegt. Aus diesem Grund kannst du in Flyo bei jedem Bild einen Fokuspunkt definieren. Sobald du bei einem Bild einen Fokuspunkt setzt, wird das Bild auf diesen Punkt zentriert. Du kannst den Fokuspunkt setzen oder verschieben, in dem du mit der Maus an die entsprechende Stelle im Bild klickst. Der Fokuspunkt wird angewendet, sobald das entsprechende Bild mit einem URL-Filter aus Flyo abgerufen wird. Achtung: eine bestimmte Bildstelle zu zentrieren, bedeutet immer, dass das Bild zugeschnitten werden muss - darum wirst nur dort einen Effekt sehen, wo das Bild zugeschnitten wird. Wenn der Fokuspunkt zu nahe am Rand liegt im Verhältnis zum gesamten Bildausschnitt, wird er nicht zentriert werden können. Dennoch hilft er dabei, den idealen Bereich auszuschneiden.

::: tip
Der Fokus kommt nur bei Zuschneidungen **ohne dynamische** Seitenverhätlnisse zum tragen. Konkret heisst das, das `250x250` den Fokus verwenden würde, aber `250xnull` nicht.
:::

![Filter Mapping](assets/focus.png)

## Format konvertieren

In gewissen Szenarien kann ein bestimmtes Dateiformat Vorteile bieten, z.B. JPG für eine bessere Bildqualität und PNG als Ersatz für GIF mit der Möglichkeit transparenter Hintergründe. Webp als Beispiel, erzeugt sehr effiziente Bilder und sollte für Webseiten verwendet werden. Um diesen Anforderungen gerecht zu werden, kann das Format bei der Erstellung eines Filters mit dem Parameter `format` query ausgewählt werden. Es ist also nur möglich, das Zielformat der Datei beim Beschneiden zu wählen, nicht für die Originaldatei. Ein Beispiel würde folgendermassen aussehen: `image_7a158241.jpg/thumb/250x250?format=webp`. Die folgenden Formate werden unterstützt:

+ webp
+ jpg
+ jpeg
+ png
+ gif

## Filter und Mapping

Beim Mapping von Integrations-Feldern kann i.d.R auch direkt ein Filter angewendet werden, um eine bestimmte Grösse der Bilder zur Verfügung zu stellen:

![Filter Mapping](assets/image-filter-mapping.png)

## Download

Standardmässig werden die Bilder und Dateien im Browser angezeigt (Disposition Inline). Wenn stattdessen das Bild oder die Datei automatisch heruntergeladen werden soll, kann dem Link die Ergänzung `?download=1` angehängt werden (also z.B. `https://storage.flyo.cloud/{DATEI}?download=1`).

```
https://storage.flyo.cloud/integrationsgruppe-flyowebseite_7a158241.jpg?download=1
```

# Embed Integration

Ein Embed Code kann Inhalte aus Content Pools via HTML-Code ausgeben. Die Flyo Embed Codes basieren auf `Web Components`, welche mit allen [modernen Browsern](https://caniuse.com/custom-elementsv1) funktionieren.

Ein Beispiel für einen Embed Code könnte so aussehen:

```html
<script src="https://embed.flyo.cloud/embed.min.js"></script>
<embed-list id="XX" token="123123123123123123123123123123123"></embed-list>
```

## Layouts

Es gibt verschieden Layouts, die für einen Embed Code zur Verfügung stellen. Sie bieten unterschiedlich viel Platz für Informationen und setzen den Fokus entweder auf visuelle (z.B. Layout "Card") oder inhahltiche (z.B. Layout "Dense List") Elemente:

### Layout "List"

![Flyo List Embed](assets/embed/example-list.png)

### Layout "Card"

![Flyo Card Embed](assets/embed/example-card.png)

## Embed Code einbetten

Wenn immer möglich, sollte der Script-Teil `<script src="https://embed.flyo.cloud/embed.min.js"></script>` in die `<head>` Section einer Webseite eingebunden werden, wobei der Script-Teil für den Inhalt am späteren Ausgabeort eingebunden wird:

```html
<html>
 <head>
  <title>Meine Webseite</title>
  <script src="https://embed.flyo.cloud/embed.min.js"></script>
 </head>
 <body>
  <p>Hier kommt mein Embed Code:</p>
  <embed-list id="XX" token="123123123123123123123123123123123"></embed-list>
 </body>
</html>
```

> Werden mehrere Embed Codes auf einer Seite eingebunden, sollte das `embed.min.js`-Script nur einmal eingebunden werden.

## Schriftart und Schriftgröße

Embed Codes verwenden Schriftgrößen in der Einheit `em`. Dies bedeutet, dass die Schriftgröße relativ zur Schriftgröße des übergeordneten Elements (z. B. `div`, `body`) bestimmt wird.

In folgendem Beispiel wird die Basis-Schriftgröße durch das `div` auf 18px gesetzt:

```html
<div style="font-size:18px">
    <embed-list id="80" token="Token" />
</div>
```

Die Angabe `18px` setzt die Basis-Schriftgröße (100%) innerhalb des Embed Codes auf 18px fest. Jede Angabe in `em` innerhalb dieses Containers verhält sich relativ zu diesen 18px. Das bedeutet, dass der Embed Code dynamisch mit unterschiedlichen Schriftgrößen arbeitet, je nachdem, wie `em` im Code verwendet wird. Beispiel:

```html
<div style="font-size:18px">
    <embed-list>
        <p style="font-size:1em">Dieser Text hat eine Schriftgröße von 18px.</p>
        <p style="font-size:1.5em">Dieser Text hat eine Schriftgröße von 27px (1.5 × 18px).</p>
    </embed-list>
</div>
```

Der Embed Code arbeitet also mit relativen Werten, sodass die Schriftgröße proportional zur festgelegten Basis-Schriftgröße (`18px`) angepasst wird. Wenn du die Basisgröße im übergeordneten Element änderst, passen sich auch alle `em`-basierten Schriftgrößen entsprechend an. 

### Schriftart

Die Schriftart wird von den allgemeinen CSS-Regeln im `<body>` oder `<html>`-Tag übernommen, Beispiel:

```html
<html style="font-family: Arial, sans-serif;">
    <body>
        <div style="font-size:18px">
            <embed-list id="80" token="Token" />
        </div>
    </body>
</html>
```

In diesem Fall wird die Schriftart `Arial` für alle untergeordneten Elemente, einschließlich des `List`-Embed Code, verwendet.

## Legacy

Embed Codes verwenden eine moderne Form von Javascript-Komponenten, welche von älteren Browsern nicht unterstützt werden. Dies gilt insbesondere für den Microsoft Internet Explorer 11 und älter. Wenn diese Versionen dennoch unterstützt werden sollen, muss zusätzlich das Script `<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script>` eingebunden werden.

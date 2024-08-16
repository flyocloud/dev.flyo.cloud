# Venue Integration

Die Venue Integration ermöglicht es ausgewählten Content-Administratoren, Inhalte zu deinem Flyo hinzuzufügen oder zu bearbeiten, ohne dass sie direkten Zugang zur Flyo-Administration benötigen. Dieser Bereich ist klar abgegrenzt und erlaubt den Administratoren nur den Zugriff auf spezifische Inhalte, für die sie berechtigt sind. Sie können entweder bestehende Inhalte bearbeiten oder, sofern sie die entsprechende Berechtigung haben, neue Inhalte hinzufügen. Als Flyo-Benutzer kannst du diese Inhalte anschließend prüfen und freigeben.

Ein typisches Anwendungsbeispiel ist die Verwaltung von Veranstaltungen in deinem Flyo, bei der externe Partner die Pflege der Veranstaltungen übernehmen sollen. Über die Venue Integration erhalten diese Partner Zugriff auf die entsprechenden Veranstaltungsinhalte und können diese bearbeiten oder neue Veranstaltungen erstellen.

Die Venue Integration kann entweder direkt über einen Vue App Embed Code eingebunden werden oder mittels der API-Schnittstellen, die Venue bereitstellt, um die Integration nahtlos in deine eigene Anwendung zu integrieren. Dies ermöglicht es, die Venue Integration mit einem individuellen Look & Feel an das Design deiner Applikation anzupassen.


## Content-Administratoren

+ [Lese mehr über Externe Content Editoren im Help Center](https://help.flyo.cloud/hc/de/articles/17391910960541)
+ [Lese mehr über wie und wo Administratoren konfiguriert werden im Help Center](https://help.flyo.cloud/hc/de/articles/20925021505565)

## Vue Embed Code

Die Vue-App kann direkt in deine Webseite eingebunden werden, indem ein einfacher HTML-Code verwendet wird. Wenn Vue 3 bereits in deiner Webseite integriert ist, ist es nicht erforderlich, Vue erneut einzubinden, da die vorhandene Instanz genutzt werden kann.

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
<script src="https://venue.flyo.cloud/venue.umd.js"></script>
<link rel="stylesheet" href="https://venue.flyo.cloud/venue.css">
<div id="venueApp">
  <venue id="XYZ" token="XYZXYZXYZXYZ"></venue>
</div>
<script>Vue.createApp({components: {venue: venue}}).mount('#venueApp')</script>
```

> Die ID und Token findest du in der Flyo Integration.

## OpenAPI Spezifikation

Die öffentliche [OpenAPI-Spezifikation](https://api.flyo.cloud/venue/openapi) für die Venue Integration ist verfügbar. Diese Spezifikation hilft dir als Entwickler, die API effizient zu nutzen, da sie eine umfassende Dokumentation der verfügbaren Endpunkte, Methoden und Datenstrukturen bereitstellt.
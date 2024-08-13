# Konfiguration (Config)

Der Konfigurations-API-Endpunkt bietet umfassende Informationen, die für die Konfiguration des Layouts von Websites erforderlich sind. Er umfasst verschiedene wesentliche Elemente, darunter Container mit Seiten, eine umfangreiche Liste verfügbarer Slugs, Globals, die Daten des Inhalts-Pools enthalten, und wichtige Details über die Nitro-Konfiguration selbst. Durch den Zugriff auf diesen Endpunkt können Entwickler alle notwendigen Daten sammeln, um ihre Websites effektiv zu gestalten und zu strukturieren. Der Endpunkt bietet einen ganzheitlichen Blick auf das Layout der Website und ermöglicht es Entwicklern, das Benutzererlebnis anzupassen und das Gesamtdesign zu optimieren.

https://nitro-openapi.flyo.cloud/#tag/Config/operation/config

## Nitro

Beinhaltet basis informationen zur aktuellen Konfiguration von Nitro Integrationen:

+ version: Immer wenn Flyo neue Daten generiert, wird die Versionsnummer entsprechend erhöht. Wird dieser Wert für das Caching verwendet, erfolgt die Bereinigung seltener im Vergleich zum updated_at-Wert, wodurch seine Lebensdauer verlängert wird.
+ updated_at: Ein Unix-Zeitstempel, der angibt, wann das Nitro zuletzt aktualisiert wurde. Dieser Zeitstempel steht nicht in Verbindung mit der Versionsnummer. Wird dieser Wert für Caching-Zwecke verwendet, wird er häufiger bereinigt als die Versionsnummer, was zu kürzeren Caching-Intervallen führt.
+ language: Die aktuelle Sprache der Website.

## Pages

Ein einzigartiges Array von Slugs ist für die gesamte Site-Konfiguration verfügbar und bietet Ihnen die Flexibilität, spezifische Routen für Ihre Anwendung zu registrieren oder einen Slug gegen dieses Array zu vergleichen. Dieser Vergleich ermöglicht es Ihnen zu bestimmen, ob eine "404 Nicht gefunden"-Ausnahme zurückgegeben oder die Anfrage anders behandelt werden soll. Durch die Nutzung dieses Arrays können Sie die in Ihrer Anwendung verwendeten Slugs leicht verwalten und kontrollieren, um sicherzustellen, dass nur gültige und registrierte Routen zugänglich sind. Dieser Ansatz hilft, die Integrität und Sicherheit der Navigation Ihrer Website zu wahren und verhindert, dass Benutzer auf undefinierte oder unbefugte Seiten zugreifen.

## Containers

Dieser Endpunkt verwaltet Container, die für die Erstellung von Navigationsmenüs unerlässlich sind. Jedes Navigationsmenü befindet sich in einem eigenen Container. Diese Container werden durch zwei Hauptmerkmale gekennzeichnet: ein Label und ein Identifikator. Das Label beschreibt den Zweck oder die Position des Menüs (z.B. "Footer Nav" oder "Hauptnavi"), während der Identifikator ein slug-formatierter Text für eine einfache Referenzierung ist (z.B. "footer-nav"). In jedem Container gibt es ein "Items"-Objekt. Dieses Objekt enthält die eigentlichen Seitenelemente, die die Struktur des Menüs ausmachen.

## Globals

Der Globals-Bereich dient als wesentlicher Bestandteil in der Gesamtstruktur des Codes. Er besteht aus einem assoziativen Array, das es Benutzern ermöglicht, ihre eigenen einzigartigen Schlüssel zu definieren, von denen jeder ein Array von Elementen enthält, die Daten aus einem Content Pool repräsentieren. Diese Daten sind essentiell, da sie im gesamten Umfang der Website zugänglich sein müssen, um bei Bedarf verfügbar zu sein. Durch die Nutzung dieses Globals-Bereichs können Entwickler diese global bedeutenden Datensätze effizient verwalten und darauf zugreifen.
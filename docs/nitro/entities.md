# Entitäten

https://nitro-openapi.flyo.cloud/#tag/Entities

## Finde die Entität anhand der einzigartigen ID

Der `entityByUniqueid` API-Endpunkt liefert umfassende Informationen über eine bestimmte Entität. Eine Entität stellt eine Sammlung von Informationen dar, die sich auf einen spezifischen Datentyp beziehen und wird durch ein Schlüssel-Wert-Paar definiert. Du kannst verschiedene Datentypen wie Blogs, Veranstaltungen oder jegliche andere relevante Daten nutzen. Allerdings muss, um auf eine Entität zugreifen zu können, diese ordnungsgemäß im Nitro-Konfig eingerichtet sein.

https://nitro-openapi.flyo.cloud/#tag/Entities/operation/entityByUniqueid

## Finde die Entität anhand des Slugs und optionaler Typ-ID

Der `entityBySlug` API-Endpunkt ermöglicht das Abrufen von Entitäten basierend auf ihrem Slug, mit einer optionalen Entity-Type-ID für genauere Ergebnisse. Er gehört zum `Entities`-Tag. Der Endpunkt erfordert einen `slug`-Parameter, der im Pfad übergeben werden muss und für die Identifizierung der Entität notwendig ist. Da Slugs jedoch nicht einzigartig unter verschiedenen Entitäten sind, wird dringend empfohlen, auch den `typeId`-Parameter über die Abfrage bereitzustellen, um falsche oder unbeabsichtigte Ergebnisse zu vermeiden. Diese `typeId` dient als Entity-Definition-Schema-ID und gewährleistet eine präzisere und gezieltere Entitätenabfrage, indem die Entitäten klarer unterschieden werden. Der `slug`-Parameter ist obligatorisch und sollte ein String sein (z.B. 'hello-world'), während der `typeId`-Parameter optional ist und ein Integer sein sollte (z.B. 123), der die Entity-Definition-Schema-ID darstellt.

https://nitro-openapi.flyo.cloud/#tag/Entities/operation/entityBySlug

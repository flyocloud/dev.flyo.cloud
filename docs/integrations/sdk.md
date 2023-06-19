# API SDK Integration

Die Integration `API SDK` erstellt eine OpenApi-Datei mit den ausgewählten Pools. Die OpenApi-Datei kann mittels Generator in ein SDK verwandelt werden, welches der gewünschten Programmiersprache entspricht. Die OpenAPI-Datei beschreibt die Endpunkte und kann auch als Dokumentation verwendet werden, um die Endpunkte zu konsumieren ohne ein SDK zu generieren.

Alle Endpunkte sind automatisch für CORS Anfragen freigegeben.

## Öffentliche Schnittstelle

Wenn ein SDK öffentlich ist, wird kein Authorization Token verlangt. Zusätzlich werden die Endpunkte mittels Caching Technology um ein vielfaches schneller. Es lohnt sich also, die Schnittstelle öffentlich zu machen, solange nicht sensible Daten übertragen werden oder es wichtig ist, dass man den Authorization Token austauschen kann.

::: danger Recaptcha verifzierung
Wenn POST- und PUT-Requests auf einer öffentlichen Schnittstelle gemacht werden, müssen die Anfragen mittels Recaptcha verifziert werden!
:::

## Verifzieren von POST und PUT Requests

In einer SPA-Umgebung (JavaScript Seite, die direkte Aufrufe an die API macht) ist es für ein öffentliches SDK zwingend, die Anfragen zu verfizieren. In einer SPA-Umgebung empfiehlt es sich, dies auch für nicht öffentliche SDKs einzführen. 

::: tip
In einer SPA-Umgebung empfiehlt es sich immer, alle POST- und PUT-Request mittels Recaptcha zu validieren, das verhindert unnötige SPAM-Einträge und generiert somit weniger Anfragen.
:::

Für die Verifzierung verwenden wir [Google's Recaptcha V3](https://www.google.com/recaptcha/) Mechanismus. Das heisst, dass die SPA-Webseite beim Übermitteln von POST- und PUT-Requests einen Response Code lösen muss, über welchen Google Rcaptcha verfiziert, ob es sich um einen wirklichen Benutzer handelt. Dieser Response Code muss mittels `recaptcha_response` Bestandteil der Body Parameter sein. Flyo validiert diese Response serverseitig mit dem in Flyo definierten Secret. Bei einem Fehler wird ein `Validation Error` ausgegeben und der Request schlägt fehl.

Recpatcha JavaScript Framework Libraries:

+ [Nuxt.JS Recaptcha](https://www.npmjs.com/package/@nuxtjs/recaptcha)

### Eintrag erstellen (POST)

Einträge, welche über die API SDK Schnittstellen in Flyo erstellt werden, erhalten standardmässig den Status `zu prüfen` und erscheinen somit automatisch im Benutzer-Digest und der Benachrichtigungsleiste. Somit wird sichergestellt, dass die Einträge nicht direkt online sind. Man muss diese also von Hand onlineschalten oder, wenn der Datensatz fehlerhaft oder nicht benötigt wird, löschen. 

::: tip Events generieren Veranstaltungsvorschlag
Veranstaltungen haben einen speziellen Stellenwert. Aus diesem Grund werden im SDK die Veranstaltungen (Events) zuerst in den `Veranstaltungsvorschläge` Funnel hinzugefügt, von dort können diese angenommen oder abgelehnt werden.
![OpenAPI JSON](assets/sdk/eventsinbox.png)
:::

### Eintrag aktualisieren (PUT)

Wenn man via SDK einen Eintrag aktualisiert, wird ein `Änderungsvorschlag` generiert, welcher in Flyo angenommen oder abgelehnt werden kann. Ein Änderungsvorschlag überschreibt einen vorangegangenen Änderungsvorschlag. Will heissen, wenn man den Titel auf `Test 123` ändert und später via PUT auf `ABC 456` ist in Flyo nur der Änderungsvorschlag `ABC 456` vorhanden.

![OpenAPI JSON](assets/sdk/proposal.png)

## Filter Parameter

Der Filter `?filter` Parameter erlaubt es, auf der Schnittstelle `where`-Konditionen zu setzen. Das ist ein starkes Tool, welches hilft, nur die gewünschten Daten aufzurufen. Der `?filter` Parameter muss jedoch als Array übergeben werden. Dazu einige Erklärungen und Beispiele. In der OpenAPI-Datei ist der Filter wie folgt beschrieben:

::: tip Filtering
Allows you to pass filtering options any attribute. `?filter[id]=123` or `?filter[author][like]=John`. Example of accessing nested array values `?filter[tags.alias]=food`
:::

Es können mehrere Anweisungen hintereinander eingefügt werden welche danach als `UND` Verbindungen zusammengefügt werden. Als Beispiel würde `?filter[email][like]=example.com&filter[is_active]=1` nun alle Daten zurück geben, bei welchen die E-Mail Adresse `example.com` beinhaltet **und** is_active auf 1 ist.

Folgende Operatoren können verwendet werden:

|Operator|SQL|Ausdruck|Beispiel|
|--------|---|--------|--------|
|`eq`|`=`|equal|`?filter[email][eq]=john@example.com`
|`neq`|`!=`|not equal|`?filter[email][neq]=john@example.com`
|`gt`|`>`|greater then|`?filter[created_at][gt]=12345678`
|`gte`|`>=`|greater and equal then|`?filter[created_at][gte]=12345678`
|`lt`|`<`|lower then|`?filter[age][lt]=18`
|`lte`|`<=`|lower and equal then|`?filter[age][lte]=18`
|`like`|`LIKE '%xyz%'`|enthält|`?filter[content][like]=Foobar`
|`in`|`IN (X,Z)`|in einem Array enthalten (ODER Verbindung)|`?filter[id][in][]=X&filter[id][in][]=Y`
|`nin`|`NOT IN (X,Z)`|*nicht* in einem Array enthalten (ODER Verbindung)|`?filter[id][nin][]=X&filter[id][nin][]=Y`


## Verschachtelte Objekte/Arrays

Ein wichtiges Element bei der Abfrage von Daten ist der Zugriff auf verschachtelte Elemente, also auf verschachtelte Objekte oder Arrays. Eine Beispielantwort mit einem Array von Tags und einem Objekt namens "state" sieht wie folgt aus:

```json
[
  {
    "id": 1,
    "title": "Flyo Cloud",
    "state": {
      "online": 1
    },
    "tags": [
      {
        "id": 1,
        "alias": "essen"
      },
      {
        "id": 2,
        "alias": "bar"
      }
    ]
  }
]
```

### Arrays

Es ist möglich, alle Einträge zu filtern, die ein bestimmtes verschachteltes Element enthalten. Um auf ein verschachteltes Element zuzugreifen, wird ein Punkt (`.`) verwendet, z.B. `tags.alias`. Ein vollständiges Beispiel für den Aufruf eines verschachtelten Array-Elements wäre `?filter[tags.alias]=essen`. Wenn mehrere verschachtelte Verbindungen angewendet werden, werden diese als ODER-Verbindung eingesetzt, z.B. `?filter[tags.alias][]=essen&filter[tags.alias][]=trinken` - alle Einträge mit dem Tag "essen" ODER "trinken".

### Objekte

Um mit dem obigen Beispiel alle Einträge abzurufen, bei denen `state.online = 1`, wird ein Doppelpunkt (`:`) verwendet. Dadurch kann direkt auf das Element eines Objekts verwiesen werden. Ein Beispielaufruf, um alle Einträge mit dem Zustand 1 abzurufen, würde wie folgt aussehen: `?filter[state:online]=1`. Es sind auch alle Operatoren aus der Liste möglich, z.B. `?filter[state:online][gte]=1`.

#### AND/OR Verbindungen

Innerhalb der Filterung können `AND` und `OR`-Verknüpfungen vorgenommen werden. Dies erhöht jedoch die Komplexität der Parameterspezifikation erheblich. Am einfachsten lässt sich dieser Filter daher in einer Array-Annotation darstellen, hier als Beispiel in JavaScript ein Filter, der alle Einträge mit Bahnhofstraße und einem dieser ausgewählten Tags ausgibt:

```json
{
  "and": [
    {
      "content": {
        "like": "Foobar"
      }
    },
    {
      "or": [
        {
          "tags.alias": "tag1"
        },
        {
          "tags.alias": "tag2"
        }
      ]
    }
  ]
}
```

Die Annotation des `filter` Parameters würde wie folgt aussehen:

```
filter[and][0][content][like]=Foobar&filter[and][1][or][0][tags.alias]=tag1&filter[and][1][or][1][tags.alias]=tag2
```

Diese Ausgabe wurde [Automatisch erstellt via 3v4l.org erstellt](https://3v4l.org/vNgns) und kann helfen beim erstellen von filter Abfragen. 

#### Beispiele

Hier eine paar Beispiele zur Veranschaulichung und Kombination der Filter:

::: details ?filter[tags.id][]=X&filter[tags.id][]=Y
Einträge mit dem Tag ID X **oder** Y. In einem SQL-Format würde dies wie folgt aussehen: `WHERE tags.id IN (X,Y)`
:::

::: details ?filter[id][in][]=X&filter[id][in][]=Y
Einträge mit der ID X **oder** Y. In einem SQL-Format würde dies wie folgt aussehen: `WHERE id IN (X,Y)`
:::

::: details ?filter[id][in][]=X&filter[id][in][]=Y&filter[start_timestamp][lt]=1654466400
Einträge, die kleiner sind als 1654466400 und Tags X **oder** Y haben. In einem SQL-Format würde dies wie folgt aussehen: `WHERE start_timestamp <= 1654466400 AND id IN (X,Y)`
:::

::: details ?filter[or][0][firstname]=Foo&filter[or][1][lastname]=Bar
Eine einfach ORDER Verbindung anstelle von UND Verbindung als SQL `WHERE firstname = 'Foo' OR lastname = 'Bar'` veranschaulicht mittels PHP:
```php
['or' => [['firstname' => 'Foo'], ['lastname' => 'Bar']]];
```
:::

::: details ?filter[and][0][content][like]=Foobar&filter[and][1][or][0][tags.alias]=tag1&filter[and][1][or][1][tags.alias]=tag2
Ein Beispiel mit UND und ODER Verbindungen als SQL `WHERE (content LIKE `%Foobar%`) AND (tags.alias = 'tag1' OR tags.alias = 'tag')` veranschaulicht mittels PHP:
```php
[
    'and' => [
        [
            'content' => ['like' => 'Foobar'],
        ],
        [
            'or' => [
                ['tags.alias' => 'tag1'],
                ['tags.alias' => 'tag2'],
            ],
        ],
    ],
]
```
:::

In einem JavaScript SDK Kontext könnte der Filter-Paramter wie folgt verwendet werden `sdk.getXYZPool({filter: [{'tags.alias':'essen'}]})` oder in PHP SDKs `$apiInstance->getPointsOfInterestPool(1, 100, '-id',  ['tags.alias' => 'essen'])`. In einer PHP Umgebung können die Filter wie folgt als query param übergeben werden `urldecode(http_build_query(['filter' => [/*...*/]))`.

## Felder Limitieren

Standardmässig werden alle Felder zurückgegeben, die in Flyo für den Content Pool ausgewählt wurden. Um nur bestimmte Felder aus dieser Auswahl zurückzugeben und damit den Datentransfer schlank zu halten, kann mit dem Abfrageparameter `fields` eine komma-separierte Liste von Feldern angegeben werden, die zurückgegeben werden sollen, z.B. `fields=id,firstname,lastname`.

## Sortieren

Um die Ausgabe zu sortieren, kann der Parameter `sort` verwendet werden, wobei `ASC` einem vorangestellten `+` oder keinem Vorzeichen und `DESC` einem `-` entspricht. Mehrere Sortierattribute können durch Komma getrennt angegeben werden, z.B. `sort=firstname,-birthday`, was auch `sort=+firstname,-birthday` entspricht.

## Paginierung

Die Rückgabedaten des SDK werden paginiert, d.h. jeweils nur eine gewisse Anzahl von Einträgen sind in einer einzelnen Anfrage enthalten. Alle Informationen zur Paginierung finden sich im Response-HEADER, unter folgenden Variabeln:

+ `X-Pagination-Total-Count` Anzahl der einträge/items
+ `X-Pagination-Page-Count` Anzahl Seiten
+ `X-Pagination-Current-Page` Die nummer der aktuellen Seite
+ `X-Pagination-Per-Page` Wieviel Einträge pro Seite zurück gegeben werden

Mittels `per-page` (Standard ist 20 Einträge) kann man bis zu 100 Einträge pro Abrufe erhalten. Mit dem `page` Parameter (default 1) kann man zur nächsten Seiten mit Einträgen wechseln.

## OpenAPI Client generieren

In unserem Beispiel verwenden wir den [OpenAPI Generator](https://openapi-generator.tech/). Dieser muss mittels `npm install @openapitools/openapi-generator-cli -g` global verfügbar sein. Es gibt aber auch andere Wege, um den Client zu generieren, siehe [Installations Anleitung](https://openapi-generator.tech/docs/installation)

Die Clients werden anhand des von Flyo für diese Integration generierten OpenApi JSON Dokument generiert. Dieses ist in der Flyo-Oberfläche sichtbar. Die URL zur JSON-Datei ist auch im Preview des SDKs zu finden.

![OpenAPI JSON](assets/sdk/openapi.jpg)

::: details PHP

Ein Beispiel-Command, um einen SDK-Client für PHP zu erstellen, könnte wie folgt aussehen:

```sh
openapi-generator-cli generate -i https://api.flyo.cloud/integration/sdk/<id>/<token> -g php -o sdk
```

Wenn das SDK in einer Applikation verwendet wird, ist es wichtig, den Composer PSR4 Eintrag in das Projekt einzufügen, das obige Beispiel würde benötigen:

```json
"autoload" : {
  "psr-4" : {
    "OpenAPI\\Client\\" : "sdk/lib/"
  }
}
```
:::

::: details JavaScript

Ein Beispiel-Command, um einen SDK-Client für JavaScript zu erstellen, könnte wie folgt aussehen:

```sh
openapi-generator-cli generate -i https://api.flyo.cloud/integration/sdk/<id>/<token> -g javascript -o sdk --additional-properties=usePromises=true
```

Oder um noch Docs und Tests zu deaktivieren:

```sh
openapi-generator-cli generate -i https://api.flyo.cloud/integration/sdk/<id>/<token> -g javascript -o sdk --global-property=apis,models,apiTests=false,modelsTest=false,apiDocs=false,modelDocs=false,supportingFiles --additional-properties=usePromises=true
```

Füge unnötige Dateien zu `.gitignore` hinzu, hier ein Beispiel:

```
sdk/.*
sdk/test
sdk/git*
sdk/mocha*
sdk/package*
```
:::

::: details NuxtJS Plugin

Wenn das populäre [NuxtJS Framework](https://nuxtjs.org/) verwendet wird, empfiehlt es sich, ein Plugin zu erstellen. 

```js
export default ({ app }, inject) => {
  const WebsiteSDK = require('~/sdk/src/index.js');
  const defaultClient = WebsiteSDK.ApiClient.instance;
  // reset or set oder headers in config of the client
  defaultClient.defaultHeaders = {}
  const bearerAuth = defaultClient.authentications['bearerAuth'];
  bearerAuth.accessToken = "__INSERT_TOKEN__"
  inject('sdk', WebsiteSDK)
  inject('pois', new WebsiteSDK.PoisApi())
}
```

Somit wäre ein Zugriff via `const response = await this.$pois.getAllPool()` möglich.
:::

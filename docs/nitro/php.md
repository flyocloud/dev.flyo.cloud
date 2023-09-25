# Nitro PHP SDK

:::danger Im Aufbau
Dieser Abschnitt wird derzeit noch bearbeitet.
:::

Ein SDK für alle PHP Applikationen:

+ [Flyo Nitro auf Packagist](https://packagist.org/packages/flyo/nitro-php)
+ [Flyo Nitro PHP SDK auf GitHub](https://github.com/flyocloud/nitro-php-sdk)

Im Entwicklungsmodus kann die Anwendung auf das `pageRefresh` Ereignis warten, nach dem die Seite neu geladen wird. Dies ist nützlich, wenn die Seite im Flyo Nitro angezeigt wird und Daten geändert werden:

```js
window.addEventListener("message", (event) => {
    if (event.data?.action === 'pageRefresh') {
        window.location.reload(true);
    }
})
```

Direktes öffnen des Inhaltselement durch klick in der Vorschau:

```js
const window = window.parent || window.opener;
window.postMessage({
  action: 'openEdit',
  data: JSON.parse(JSON.stringify({
    item: {uid: "the-block-uid-goes-here"}
  }))
}, 'https://flyo.cloud')
```

## PHP Frameworks

Für die folgenden PHP-Frameworks stehen Adapter zur Verfügung. Die Adapter übernehmen die Auflösung der Slugs durch das Routing des Frameworks und ermöglichen eine schnelle Integration von Nitro. 

|Name|Package|Example Project
|----|-------|--------------
|Yii2 Framework|[GitHub](https://github.com/flyocloud/nitro-yii2)|[Yii2 Example App](https://github.com/flyocloud/yii2-zooexample.com)
|Laravel|[GitHub](https://github.com/flyocloud/nitro-laravel)|[Laravel Example App](https://github.com/flyocloud/laravel-zooexample.com)

# PHP

Ein SDK für alle [PHP](https://php.net) Applikationen:

| Name | Links
|------|------
| Flyo Nitro PHP SDK | [GitHub](https://github.com/flyocloud/nitro-php-sdk) [Packagist](https://packagist.org/packages/flyo/nitro-php)


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
function getActualWindow() {
    if (window === window.top) {
        return window;
    } else if (window.parent) {
        return window.parent;
    }
    return window;
}

function openBlockInFlyo(blockUid) {
    getActualWindow().postMessage({
        action: 'openEdit',
        data: JSON.parse(JSON.stringify({item:{uid: blockUid}}))
    }, 'https://flyo.cloud')
}
```

Danach muss beim Element die Funktion wie folgt aufgerufen werden: `onclick="openBlockInFlyo(uniqueId)"`.

## Frameworks

Für die folgenden PHP-Frameworks stehen Adapter zur Verfügung. Die Adapter übernehmen die Auflösung der Slugs durch das Routing des Frameworks und ermöglichen eine schnelle Integration von Nitro. 

| Name            | Links                                                                                              | Example Project                                     |
|-----------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Flyo Nitro Yii2 Framework  | [GitHub](https://github.com/flyocloud/nitro-yii2) [Composer](https://packagist.org/packages/flyo/nitro-yii2) | [Yii2 Example App](https://github.com/flyocloud/yii2-zooexample.com) |
| Flyo Nitro Laravel         | [GitHub](https://github.com/flyocloud/nitro-laravel) [Composer](https://packagist.org/packages/flyo/nitro-laravel) | [Laravel Example App](https://github.com/flyocloud/laravel-zooexample.com) |

## Bridge

Die PHP Bridge ist eine PHP-Bibliothek, die die Kommunikation zwischen dem Flyo Nitro und dem PHP Projekt ermöglicht. Sie beinhaltet Hilfsfunktionen wie z.B. das Handling von WYSIWYG Editor Daten.


| Name | Links
|------|------
| Flyo Nitro PHP Bridge | [GitHub](https://github.com/flyocloud/nitro-php-bridge) [Packagist](https://packagist.org/packages/flyo/nitro-php-bridge)
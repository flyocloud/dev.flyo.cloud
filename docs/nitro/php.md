# Nitro PHP SDK

Ein SDK für alle PHP Applikationen:

+ [NitroCMS auf Packagist](https://packagist.org/packages/flyo/nitrocms-php)
+ [NitroCMS PHP SDK auf GitHub](https://github.com/flyocloud/nitrocms-php-sdk)

Im Entwicklungsmodus kann die Anwendung auf das `pageRefresh` Ereignis warten, nach dem die Seite neu geladen wird. Dies ist nützlich, wenn die Seite im Flyo Nitro angezeigt wird und Daten geändert werden:

```js
const parentWindow = window.parent || window.opener;
window.addEventListener("message", (event) => {
    if (event.data?.action === 'pageRefresh') {
        window.location.reload(true);
    }
})
```

## PHP Frameworks

Für die folgenden PHP-Frameworks stehen Adapter zur Verfügung. Die Adapter übernehmen die Auflösung der Slugs durch das Routing des Frameworks und ermöglichen eine schnelle Integration von Nitro. 

|Name|Package|Example Project
|----|-------|--------------
|Yii2 Framework|https://github.com/flyocloud/nitrocms-yii2|https://github.com/flyocloud/yii2-zooexample.com
|Laravel|https://github.com/flyocloud/nitrocms-laravel|https://github.com/flyocloud/laravel-zooexample.com

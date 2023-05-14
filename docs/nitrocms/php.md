# Nitro CMS PHP SDK

Ein SDK für alle PHP Applikationen:

https://github.com/flyocloud/nitrocms-php-sdk

Im development modus kann die Applikation auf den `pageRefresh` event hören, danach wir die Seite neu geladen. Dies ist hilfreich wenn sie im Flyo Nitro anezeigt wird und Daten verändert werden:

```js
const parentWindow = window.parent || window.opener;
window.addEventListener("message", (event) => {
    if (event.data?.action === 'pageRefresh') {
        window.location.reload(true);
    }
})
```

## PHP Frameworks

|Name|Package|Example Project
|----|-------|--------------
|Yii2 Framework|https://github.com/flyocloud/nitrocms-yii2|https://github.com/flyocloud/yii2-zooexample.com
|Laravel|https://github.com/flyocloud/nitrocms-laravel|https://github.com/flyocloud/laravel-zooexample.com

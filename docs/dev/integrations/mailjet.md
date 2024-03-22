# Mailjet Integration

[Mailjet](https://mailjet.com) ist ein Dienst zum Versenden von E-Mails. Aus Flyo lassen sich Kontakte und Inhalte synchronisieren. Die Inhalte werden als sogenannte Sections an Mailjet gesendet und stehen danach dort im Drag-n-Drop Editor unter "gespeicherte Abschnitte) zur Verfügung. Die Kontakte werden der gewählten Kontaktliste hinzugefügt.

## API Key und Secret einrichten

Beim Ausetzen der Integration in Flyo muss zuerst eine Mailjet-Verbindung ausgewählt werden. Falls noch keine besteht, muss eine neue Verbindung erstellt werden. Dazu wird ein API-Key und der API-Geheimcode seitens Mailjet benötigt. Dieser findet sich Konto-Einstellungen / REST API / API-Key.
Seitens Mailjet kann pro Konto resp. Unterkonto nur 1 API-Key gelöst werden. Das dazugehörige Secret kann nur beim erstmaligen Erstellen angeschaut werden. Muss zu einem späteren Zeitpunkt eine weitere Verbindung hergestellt werden, muss ein neues Secret generiert werden und allfällige andere, bestehende Verbindungen entsprechend aktualisiert werden.

## Templates

::: warning Diese Seite ist noch im Aufbau
https://www.flyo.ch/story/mailjet-flyo-integration
:::

### Iteration von Inhalten

Du kannst mit der [Template Engine](../infos/template.md) Daten, zum Beispiel aus einer Relation, iterieren. Dafür verwendest du einen `foreach`-Block, der üblicherweise in einer Section eingesetzt wird, um die darin enthaltenen Elemente zu wiederholen. Standardmäßig konvertiert die Integration alle Array-Inhalte in eine kommagetrennte Liste, was für viele Situationen ausreichend ist. Wenn du jedoch das Array erneut benötigst, kannst du den Filter "Zeichenkette Teilen" verwenden, um aus der kommagetrennten Liste wieder ein Array zu erstellen, über das du anschließend mit `foreach` iterieren kannst.

![Explode](assets/mailjet/array-foreach.png)

```html
<mj-section>
    <mj-column>
        {foreach $labels as $label}>
            <mj-text>{$label}</mj-text>
        {/foreach}
    </mj-column>
</mj-section>
```

### Metrik Pixel

Um [Metriken](../infos/metrics.md) für einen Newsletter einzurichten, müssen zunächst die Metrikdaten als Variable (1) verfügbar gemacht werden. Anschließend müssen sie innerhalb des jeweiligen Elements in ein `mj-raw`-Tag (2) eingebettet werden. Dies ermöglicht die effektive Verfolgung und Analyse von Newsletter-Metriken.

![Alle benötigten Bedienflächen](assets/mailjet/mjml-metric.png)

Beispiel Code:

```html
<mj-section full-width="full-width">
    <mj-column width="50%">
        <mj-image src="{$image}" alt="" padding-bottom="20px" padding-top="20px"></mj-image>
    </mj-column>
    <mj-column width="50%" vertical-align="middle">
        <mj-text align="left">{$title}<br /><br />{$teaser}</mj-text>
    </mj-column>
</mj-section>
<mj-raw>{$metric}</mj-raw>
```

Wenn der Newsletter geöffnet wird und das Tracking-Pixel nicht von einem E-Mail-Client blockiert wird, erfolgt nun für jeden Eintrag eine Metrikerfassungsanfrage.

## Kontakt (E-Mails) Sync

::: warning Diese Seite ist noch im Aufbau
:::

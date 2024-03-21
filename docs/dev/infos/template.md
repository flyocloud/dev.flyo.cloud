# Template Engine

Flyo verwendet die Template Engine an verschiedenen Stellen, wie z.B. für die Erstellung von E-Mails, der Generierung von HTML-Code und der Erstellung von benutzerdefinierten Elementen im WYSIWYG-Editor. Flyo nutzt das Template-System [Latte](https://latte.nette.org/) im Strict-Modus, was bedeutet, dass du dich auf die grundlegenden Funktionen von Latte beschränken musst. Latte ist bekannt für seine Einfachheit und Leistungsfähigkeit, wodurch es besonders leicht zu erlernen und benutzerfreundlich ist.

Um Variablen anzusprechen, verwende die Syntax `${name}`. Die Existenz von Variablen kannst du mit den Konstrukten `{if $name}`, `{else}` und `{/if}` überprüfen. Für die Integration von Einträgen in deine Templates nutze `{foreach $items as $item}` und `{/foreach}`.

::: warning Abstand in Variable Name
Achtung, der Syntax `${ name }` ist nicht valid, es dürfen keine Leerzeichen verwendet werden, um auf eine Variable zuzugreifen. ~~`${ name }`~~ ➔ `${name}`
:::

Schauen wir uns ein Beispiel an, wie du prüfen kannst, ob die Variable `$image` vorhanden ist. Wenn ja, wird das Bild angezeigt; andernfalls erscheint eine Meldung, dass das Bild nicht existiert:

```html
{if $image}
  <img src="{$image}" alt="Bildbeschreibung" />
{else}
  Das Bild existiert nicht.
{/if}
```

Nun zu weiteren Codebeispielen, die zeigen, wie du Latte für verschiedene Aufgaben nutzen kannst.

### Schleifen mit `foreach` nutzen

Um eine Liste von Items durchzugehen, kannst du `foreach` verwenden. Hier ein Beispiel, wie du eine Liste von Produktnamen ausgeben könntest:

```html
<ul>
{foreach $products as $product}
  <li>{$product->name}</li>
{/foreach}
</ul>
```

### Bedingte Anweisungen nutzen

Du kannst mit `if`-Anweisungen Bedingungen in deinem Template setzen. Hier ein Beispiel, wie du prüfen kannst, ob ein Benutzer eingeloggt ist:

```html
{if $loggedIn}
  Willkommen zurück, {$username}!
{else}
  Bitte logge dich ein, um fortzufahren.
{/if}
```

### Variablen und Filter

Das Template-System ermöglicht dir auch, Filter zu nutzen, um die Ausgabe deiner Variablen zu modifizieren. Angenommen, du möchtest den Namen eines Benutzers grosschreiben:

```html
Hallo, {$username|upper}!
```

Latte bietet eine Vielzahl von Filtern, die du in deinen Templates nutzen kannst, um die Ausgabe deiner Variablen zu manipulieren und zu formatieren. Hier ist eine Liste der verfügbaren Filter in Latte, inklusive einer Verlinkung zur offiziellen Latte-Website für weitere Details und Beispiele. Bitte beachte, dass sich die Liste der Filter und ihre Funktionalitäten mit zukünftigen Versionen von Latte ändern können. Daher ist es immer eine gute Idee, die [offizielle Latte-Dokumentation](https://latte.nette.org/en/filters) zu konsultieren.

### Standard Latte Filter:

- **|date**: Formatieren von Datums- und Zeitangaben.
- **|time**: Wandelt eine Zeitangabe in einen lesbaren Text um.
- **|number**: Formatierung von Zahlen.
- **|currency**: Formatierung von Beträgen als Währung.
- **|trim**: Entfernt Leerzeichen vom Anfang und Ende eines Strings.
- **|upper**: Wandelt einen String in Großbuchstaben um.
- **|lower**: Wandelt einen String in Kleinbuchstaben um.
- **|capitalize**: Macht den ersten Buchstaben eines Strings groß.
- **|firstUpper**: Macht den ersten Buchstaben eines Strings groß, ohne andere zu ändern.
- **|substr**: Gibt einen Teilstring zurück.
- **|stripTags**: Entfernt HTML- und PHP-Tags aus einem String.
- **|safeUrl**: Bereinigt eine URL, um sie sicher in einem href- oder src-Attribut verwenden zu können.
- **|replace**: Ersetzt Teile des Strings durch einen anderen.
- **|nl2br**: Wandelt Zeilenumbrüche in `<br>` Tags um.
- **|repeat**: Wiederholt den String mehrfach.
- **|batch**: Gruppiert Elemente in einem Array in Batches fester Größe.
- **|indent**: Fügt vor jede Zeile eines Strings einen bestimmten String ein.
- **|escape**: Escaped einen String für die sichere Ausgabe in HTML.
- **|noescape**: Markiert einen String als sicher, sodass er nicht automatisch escaped wird.

Die vollständige Liste der Filter und ihre detaillierten Beschreibungen findest du auf der [Latte-Website unter dem Abschnitt "Filters"](https://latte.nette.org/en/filters). Dort findest du auch Beispiele und Anwendungsfälle für jeden Filter, was besonders nützlich ist, wenn du neu in der Verwendung von Latte bist oder spezifische Funktionalitäten für dein Projekt benötigst.

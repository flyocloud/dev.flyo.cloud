# WYSIWYG / Rich Text Editor

Flyo hat einen starken WYSIWYG Editor eingebaut, der es ermöglicht, Texte mit Formatierungen zu versehen und auch eigene Elemente zu erstellen. Der Editor basiert auf der technischen basis von [ProseMirror](https://prosemirror.net/).

## Custom Elemente

## Rekursive Inhaltseingabe

## Template

### 1. Variablenausgabe
Variablen können direkt in das Template eingebettet werden. Latte sorgt automatisch für die Escapierung von Zeichen zur Vermeidung von XSS-Angriffen.

**Beispiel:**
```
Name: {$name}
```

### 2. Kontrollstrukturen
Latte unterstützt gängige Kontrollstrukturen wie if-else-Anweisungen und Schleifen.

**Beispiel (if-else):**
```
{if $condition}
    <p>Bedingung erfüllt</p>
{else}
    <p>Bedingung nicht erfüllt</p>
{/if}
```

**Beispiel (for-Schleife):**
```
{for $i = 0; $i < 10; $i++}
    <p>Nummer {$i}</p>
{/for}
```

### 3. Makros
Latte bietet eine Vielzahl von Makros zur Implementierung komplexer Logik.

**Beispiel (define-Makro):**
```
{define title}
    <h1>Willkommen auf meiner Seite</h1>
{/define}

{use title}
```

### 4. Filter
Latte ermöglicht die Verwendung von Filtern zur Manipulation der Ausgabe.

**Beispiel (Filter):**
```
{$price|number_format:2:',':' '}
```

## Wichtige Syntax

- **Variable:** `{$variableName}`
- **If-Anweisung:** `{if $condition} ... {else} ...{/if}`
- **For-Schleife:** `{for $var in $array} ... {/for}`
- **Makro-Definition:** `{define macroName} ... {/define}`
- **Makro-Verwendung:** `{use macroName}`
- **Filter:** `{$variable|filterName}`

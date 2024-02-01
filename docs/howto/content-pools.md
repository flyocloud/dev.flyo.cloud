# Content Pools

Content Pools funktionieren wie Ordner für Dateien auf einem Computer und dienen dazu, Inhalte für unterschiedliche Anwendungszwecke zu organisieren und zu automatisieren:

![Überblick Content Pools](assets/content-pools-overview.svg)

::: info Berechtigungen im Kontext von Content Pools
Mit der Berechtigungslogik für Content Pools wird in erster Linie gesteuert, welche Teammitglieder mit welchen Inhalten in Flyo arbeiten dürfen. [Mehr Informationen](/howto/manage-permissions)
:::

## Typen von Content Pools
Es gibt zwei Typen von Content Pools in Flyo. Während bei kuratierten Content Pools die Elemente im Pool von Hand definiert werden, stellt Flyo bei regelbasierten Content Pools die Elemente automatisiert anhand von dir festgelegten Filterkriterien zusammen und aktualisiert diese in Real-Time.

### Kuratierte Content Pools
In einem kuratierten Content Pool können die Inhalte frei bestimmt werden. Inhalte können von Hand oder nach einem Fahrplan oder Trigger Automationen hinzugefügt oder entfernt werden. Ebenso kann die Reihenfolge der Inhalte im Content Pool frei bestimmt werden.

Eigenschaften:
- Mehrere Entitäten --> Ein kuratierter Content Pool kann Inhalte einer oder mehrerer Entitäten beinhalten
- Kuratierung --> Die Reihenfolge der Einträge im Content Pool kann per Drag & Drop gesteuert werden
- Fahrplan --> Jeder Inhalt im Content Pool kann zeitgesteuert einem kuratierten Content Pool hinzugefügt oder daraus entfernt werden
- Trigger --> Die Sichtbarkeit von Inhalten in Integrationen kann zeit- und wetterbasiert gesteuert werden
- Limit --> Limitieren, wie viele Inhalte in einem Content Pool sein dürfen
- Duplikate vermeiden --> Verhindert, dass ein Inhalt mehrfach in einen Content Pool eingefügt wird

![Kuratierter Content Pool](assets/kuratierte-content-pool-1.svg) 

Erklärung der Icons (v.l.n.r):
- Reihenfolge anpassen (Drag & Drop)
- Automation erstellen
- Inhalt zeitbasiert aus dem Content Pool entfernen
- Inhalt sofort entfernen (Indikation zeigt, dass Inhalt bereits zeitbasiert entfernt wird)
- Das Datum zeigt an, wann der Eintrag in den Content Pool hinzugefügt wurde

Für jeden kuratierten Content Pool kann in der Seitenleiste ein Fahrplan (Liste / Kalender) mit den geplanten Änderungen angezeigt werden:

![Kuratierter Content Pool](assets/kuratierte-content-pool-2.svg) 

### Regelbasierte Content Pools
Mit einem regelbasierten Content Pool können Inhalte nach bestimmten Regeln zusammengefasst werden. Alle Inhalte, die den definierten Regeln des Content Pools entsprechen, werden in Real-Time in den Content Pool hinzugefügt oder entfernt.

Eigenschaften:
- Einzelne Entität --> Ein regelbasierter Content Pool kann Inhalte einer einzelnen Entität beinhalten
- Filter --> Als Filterkriterien können Felder angewendet werden, die für die entsprechende Entität konfiguriert wurden
- Real-Time --> Inhalte, die bearbeitet werden und neu bzw. nicht mehr den Kriterien des Content Pools entsprechen, werden in Real-Time in den Content Pool hinzugefügt oder daraus entfernt

Screenshots folgen.

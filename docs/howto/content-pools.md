# Content Pools

Content Pools funktionieren wie Ordner für Dateien auf einem Computer und dienen dazu, Inhalte für unterschiedliche Anwendungszwecke zu organisieren und zu automatisieren:

### Content Pools für interne Workflows:
- Zusammenfassen von Inhalten zu einem bestimmten Thema
- Freigabe von bestimmten Inhalte zur Bearbeitung für ein Teammitglied

### Content Pools für Integrationen:
- Sammlung von Inhalten, die auf einer Webseite angezeigt werden sollen
- Steuern der Sichtbarkeit von Inhalten in einer Integration (z.B. auf einer Webseite) mit Automationen
- Definition eines Content Fahrplans zur Steuerung der Sichtbarkeit von Inhalten in einer Integration

![Überblick Content Pools](assets/content-pools-overview.svg)

## Typen von Content Pools
Es gibt zwei Typen von Content Pools in Flyo. Während bei kuratierten Content Pools die Elemente im Pool von Hand definiert werden, stellt Flyo bei regelbasierten Content Pools die Elemente automatisiert anhand von dir festgelegten Filterkriterien zusammen und aktualisiert diese in Real-Time.

### Kuratierte Content Pools
In einem kuratierten Content Pool können die Inhalte frei bestimmt werden. Inhalte können von Hand oder nach einem Fahrplan oder Trigger Automationen hinzugefügt oder entfernt werden. Ebenso kann die Reihenfolge der Inhalte im Content Pool frei bestimmt werden.

Screenshot 

- Mehrere Entitäten --> Ein kuratierter Content Pool kann Inhalte einer oder mehrerer Entitäten beinhalten
- Kuratierung --> Die Reihenfolge der Einträge im Content Pool kann per Drag & Drop gesteuert werden
- Fahrplan --> Jeder Inhalt im Content Pool kann zeitgesteuert einem kuratierten Content Pool hinzugefügt oder daraus entfernt werden
- Trigger --> Die Sichtbarkeit von Inhalten in Integrationen kann zeit- und wetterbasiert gesteuert werden
- Limit --> Limitieren, wie viele Inhalte in einem Content Pool sein dürfen
- Duplikate vermeiden --> Verhindert, dass ein Inhalt mehrfach in einen Content Pool eingefügt wird

### Regelbasierte Content Pools
Mit einem regelbasierten Content Pool können Inhalte nach bestimmten Regeln organisiert werden. Alle Inhalte, die den definierten Regeln entsprechen, werden in Real-Time in diesem Content Pool dargestellt.

- Einzelne Entität --> Ein regelbasierter Content Pool kann Inhalte einer einzelnen Entität beinhalten
- Filter --> Ein regelbasierter Content Pool kann nach einem oder mehreren Feldern gefiltert werden, die für die entsprechende Entität vorhanden sind (siehe unten)
- Real-Time --> Inhalte, die in Flyo verändert werden und neu bzw. nicht mehr den Kriterien des Content Pools entsprechen, werden in Real-Time in den Content Pool hinzugefügt oder daraus entfernt

Screenshot

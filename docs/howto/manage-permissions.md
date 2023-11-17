# Über Berechtigungen

![Überblick Berechtiungen](assets/permissions-overview.svg)

## Allgemeines
Flyo bietet ein flexibles Berechtigungssystem, um vielfältige Content Workflows abbilden zu können.

Das Berechtigungssystem orientiert sich dabei am Konzept der Datensparsamkeit. Das meint im Kontext von Flyo, dass Berechtigungen proaktiv vergeben werden müssen und nicht standardmässig für neue Benutzer:innen gelten.

::: info Beispiel zur Datensparsamkeit
Wird ein neuer Content Pool erstellt, müssen die berechtiguten Benutzer:innen definiert werden. Standardmässig sind ausser den Benutzer:innen mit der Benutzerrolle "Manager" keine Benutzer:innen berechtigt.
:::

## Benutzerrollen
Mit Benutzerrollen können Berechtigungen für das Hinzufügen von Inhalten sowie für zentrale Funktionen in Flyo vergeben werden.

- Inhalte erstellen -> Legt für jede Entität fest, ob Benutzer:innen mit dieser Benutzerrolle neue Inhalte erstellen dürfen oder nicht
- Zentrale Funktionen in Flyo -> Definiert den Zugriff mit dieser Benutzerrolle auf folgende Funktionen
    - Aktivitäten -> Zugriff auf den globalen Änderungsverlauf aller Inhalte (Logbuch)
    - Verbindungen -> Verwalten der aktiven authenfizierungspflichtigen externen Dienste (z.B. Webflow-Verbindung)
    - Fokus Boards -> Erstellen, Bearbeiten, Löschen von Fokus Boards
    - Integrationen -> Hinzufügen neuer Integrationen
    - Integrationsgruppen -> Erstellen, Bearbeiten, Löschen von Integrationsgruppen
    - Payment -> Zugriff auf den aktiven Preisplan und Zahlungsmethode
    - Content Pools -> Erstellen, Bearbeiten, Löschen von Content Pools
    - Qualitätsprüfung -> Zugriff auf die Funktion zur automatisierten Qualitätsprüfung
    - Cross Checks -> Erhält Benachrichtigungen über Cross Checks und kann Inhalte online schalten
    - Benutzerrollen -> Erstellen, Bearbeiten, Löschen von Benutzerrollen
    - Entitäten -> Erstellen, Bearbeiten, Löschen von Entitäten
    - Social Media -> Kann via verknüpfte Social Media-Konten Inhalte publizieren
    - Statistiken -> Zugriff auf den Statistikbereich (gilt nicht für Statistiken im Dashboard)
    - Social Tags -> Erstellen, Bearbeiten, Löschen von Social Tags
    - Team -> Erstellen, Bearbeiten, Löschen von Teammitgliedern
 
::: info Erstellen, Bearbeiten, Löschen
Die Berechtigungen für Erstellen, Bearbeiten, Löschen können seperat vergeben werden, z.B. nur erstellen oder nur bearbeiten und löschen, etc.
:::

::: info Eigene Inhalte
Inhalte, die mit dem eigenen Benutzeraccount erstellt wurden, können immer bearbeitet und gelöscht werden. Unabhängig davon, welche Berechtiugungen für Content Pools vorliegen.
:::

## Content Pools
XXX

- Inhalt bearbeiten
- Inhalt löschen
- Onlinestatus ändern

Was passiert, wenn Inhalt A in Pool B und C vorhanden ist, ein User aber nur auf C berechtigt ist?

## Integrationsgruppen
XXX

## Fokus Boards
XXX

# Hook-Integration

Die Flyo Hook-Integration führt zu einem bestimmten Zeitpunkt einen Request auf die angegebene Zielseite aus.

## Verwendung

Ein Hook ist ein praktisches Mittel, um eine Synchronisation von Daten auszulösen. Wenn man Daten z.B über eine Flyo API importieren will, passiert dies häufig über einen Cronjob. Um diesen Prozess dynamischer zu gestalten, kann ein Hook eingerichtet werden, welcher das Script aufruft welches danach die Synchronisation ausführt. Das bedeutet: wenn in Flyo ein Ereignis geschieht (siehe unten), aktiviert dies über den Hook das Synchronisationsskript. So werden neue Änderungen schnell publiziert und gleichzeitig "Leerlauf-Synchronisationen" ohne Änderungen vermieden.

## Zeitpunkt

Der Hook wird aktiviert, wenn sich mindestens eines der nachfolgenden Ereignisse im gewählten [Content Pool](../dev/infos/pools) ereignet.

+ Ein neuer Eintrag im Pool
+ Ein Eintrag wird aus dem Pool entfernt
+ Kuratierte Content Pools: Ein Eintrag wird verschoben

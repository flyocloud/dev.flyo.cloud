<script setup>
import ChangeLog from '../components/ChangeLog.vue'
</script>

# Changelog

Flyo ist eine proprietäre Software, weshalb der Quellcode nicht frei zugänglich ist. Wir möchten unseren Kunden aber grösstmögliche Transparenz bieten und veröffentlichen deshalb für die neusten Releases ein Changelog. Unser Release-Zyklus umfasst wöchentliche Updates für die produktive Flyo-Umgebung.

Die Versionierung (Nummerierung) bezieht sich auf die gesamte Flyo-Infrastruktur. Die einzelnen Dienste (z.B `api`, `app`, `nitro`, `connect`, `payment`, `map`, `venue` oder `embed`) verfügen über eigene Versionierungen und Release-Zyklen. Den Status der einzelnen Dienste findest du im [Status Monitor](https://status.flyo.cloud).

<Suspense>
  <ChangeLog />
  <template #fallback>
    Die Changelog Daten werden geladen ...
  </template>
</Suspense>


---
*Es werden die neusten 15 Einträge angezeigt.*
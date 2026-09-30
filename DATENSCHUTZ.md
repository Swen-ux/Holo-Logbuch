# Datenschutz im Holo-Logbuch

**Kurz:** Die App sammelt nichts, schickt nichts und braucht keine Berechtigungen.

- **Keine Server, kein Konto:** Gewohnheiten, Trainings, Tagebuch und dein Tier werden nur im Speicher
  deines Browsers auf deinem Gerät abgelegt (localStorage). Nichts davon verlässt das Gerät.
- **Keine fremden Anbieter:** 3D-Bibliothek, Effekte und Schriften liegen in dieser Version im Ordner mit
  und werden nicht von Google, jsDelivr oder anderen Diensten geladen. Eine Sicherheitsregel (Content-Security-Policy)
  verbietet der App zusätzlich jede Verbindung zu fremden Adressen.
- **Keine Berechtigungen:** kein Standort, keine Kamera, kein Mikrofon, keine Kontakte, keine Dateien.
  - Benachrichtigungen fragt die App nur, wenn du bei einer Gewohnheit eine Erinnerung einstellst. Ablehnen ist möglich,
    dann erscheinen Erinnerungen nur innerhalb der App.
  - „Bildschirm anlassen“ beim Bildschirmschoner braucht keine Freigabe.
- **Kein Tracking:** keine Werbung, keine Analyse, keine Cookies.
- **Löschen:** Einstellungen → „Alle Daten löschen“, oder die App deinstallieren bzw. die Websitedaten im Browser löschen.

Einzige Verbindung ins Netz: das Laden der App selbst von deiner eigenen Adresse (z. B. GitHub Pages).
Danach läuft sie komplett offline.

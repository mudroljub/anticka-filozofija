# TODO

## Sadržaj

- prevesti Marko Aurelije — *Samome sebi*
  - [ ] popraviti kompletan stsl prevod Marko Aurelije — *Samome sebi* u skladu sa PREVODJENJE_NA_STAROSLOVENSKI.md
  - [ ] popraviti kompletan srpski prevod Marko Aurelije — *Samome sebi* u skladu sa PREVODJENJE_NA_SRPSKI.md

- popraviti Aristotel - Metafizika
  - [ ] popraviti kompletan stsl u skladu sa PREVODJENJE_NA_STAROSLOVENSKI.md
    - Ostaje potpuna filološka redakcija: blokovi pod `982b` i `994b` sadrže ponovljen i izmešten tekst; sidra i sintaksa zahtevaju proveru prema izvorniku. Postojeći manifest obuhvata `980a–1043b`.
    - Nastaviti redakciju staroslovenskog teksta i preostalih izmeštenih sidara od `1035a` nadalje.
    - Popraviti staroslovenski tekst i izmeštena sidra u rasponu `1026a–1027b`.
  - [ ] popraviti kompletan srpski u skladu sa PREVODJENJE_NA_SRPSKI.md
    - Nastaviti redakciju srpskog teksta od `1038b` i proveru sledećih granica; i raniji odeljci van dosad redigovanih raspona zahtevaju celovitu proveru.

- prevesti Plotin — *Eneade*
  - (status: `data/works/plotinus/enneads/work.draft.json`, id `mw-000010`)
    - Pripremljena su sidra za 653 odeljka (`citationScheme: book-chapter-section`; fajlovi `ennead-{i..vi}.{sr,stsl}.md`), ukupno 653 srpska i 653 staroslovenska bloka.
    - Svi prevodni blokovi su prazni (`emptySr=653`, `emptyStsl=653`), pa je potrebno potpuno novo prevođenje.
    - Grčki izvornik `First1KGreek tlg2000.tlg001` postoji lokalno; alat `build-work-originals.mjs --drafts` već podržava proveru svih odeljaka nacrta bez pisanja generisanih fajlova. Odsustvo nacrta iz produkcionih indeksa nije odsustvo izvornika.
    - Sledeći posao: prevesti i redigovati svih 653 odeljka na oba jezika, zatim aktivirati manifest i generisati indekse prema `docs/CELA_DELA.md`.
  - [ ] prevesti Eneadu I, rasprave I.1–I.9; svaku raspravu dovršiti i redigovati pre sledeće
  - [ ] prevesti Eneadu II, rasprave II.1–II.9
  - [ ] prevesti Eneadu III, rasprave III.1–III.9
  - [ ] prevesti Eneadu IV, rasprave IV.1–IV.9
  - [ ] prevesti Eneadu V, rasprave V.1–V.9
  - [ ] prevesti Eneadu VI, rasprave VI.1–VI.9
  - [ ] uraditi celovitu redakciju svih 54 rasprava: pojmovne porodice, STSL gramatika i grafija, srpski ritam i naslovi
  - [ ] aktivirati `plotinus/enneads` (preimenovati `work.draft.json` → `work.json`) kada svih 653 odeljka budu prevedena i proverena na oba jezika; pokrenuti `npm run build:work-data` da se generišu `works-index.json` i `work-originals.json`. Generisane indekse ne uređivati ručno. Do aktivacije izvornike proveravati pomoću `npm run audit:work-drafts`.

## Terminologija i UI

- za duge citate, dugme Prikaži više treba pre imena autora, ne posle
- proveriti glavne filozofske termine ručno (AGENTI STOP) u rečniku i works:
   - sušto, biće
   - nebiće
   - bitije

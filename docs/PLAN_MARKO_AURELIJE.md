# Marko Aurelije — plan redakcije

Raditi redom, od knjige I do XII. Svaka stavka obuhvata oba prevoda.
Manje celine imaju najviše osam odeljaka i približno do 700 reči postojećeg
srpskog prevoda; duži pojedinačni odeljak ostaje zasebna celina.

Stavku označiti tek posle poređenja celog raspona sa grčkim izvornikom,
provere termina u `RECNIK.md`, redakcije staroslovenskog, usklađivanja
srpskog i završne provere smisla, ritma, potpunosti i sidara.
Popunjen prevodni blok sam po sebi ne znači da je redakcija završena.

Izvornik: `data/sources/canonical-greekLit/data/tlg0562/tlg001/tlg0562.tlg001.perseus-grc2.xml`.
Prevodi: `data/works/marcus-aurelius/meditations/book-*.{sr,stsl}.md`.
Pravila: `PREVODJENJE_NA_STAROSLOVENSKI.md`, `PREVODJENJE_NA_SRPSKI.md`,
`GRAMATIKA.md` i `KLESANJE_PREVODA.md`.

Završeno: **I.1–I.12** (oba prevoda). Sledeća celina: **I.13–I.15**.

## Beleške završenih celina

### I.5–I.12 — 2026-09-09

- Upoređen pun grčki izvornik svih osam odeljaka sa oba prevoda.
  Pasusi I.7, I.8 i I.9 sada prate raspored izvornika, bez promene sidara.
- I.5: razjašnjena je privrženost Zelenima i Plavima, odnosno borcima s
  malim i velikim štitovima; latinski nazivi uklonjeni su iz staroslovenskog.
  Ostaju trpeljivost, male potrebe, samostalno obavljanje poslova,
  nemešanje u tuđe poslove i neprijemčivost za klevetu.
- I.6: popravljena nepotpuna konstrukcija uz filozofiju, dečji uzrast i
  završna veza sa helenskim odgojem. `диалогꙑ` zamenjeno je sa `бесѣдꙑ`;
  srpski koristi razgovore. Ime Βακχεῖος preneto je sa početnim B u oba prevoda.
- I.7: razlikovano je pisanje od govorenja nagovornih besedica; vraćena
  su oba svojstva pri pomirenju, laka umoljivost i spremnost na pomirenje.
  `φαντασία → мьчьта / predstava` oslanja se na postojeću projektnu upotrebu
  u citatima Antipatra iz Tarsa i Hrisipa, ne na novu rečničku normu.
  Mudrovanje i besedništvo zamenjuju grčke tuđice u staroslovenskom.
- I.7–I.9: porodica θεωρ- povezana je sa rečničkim `зрѣніє / motrenje`,
  ἐνεργ- sa `дѣиство`, a `ἔννοια` sa `мыслъ / misao`.
  U I.9 `δόγματα` su učenja, a ne `мьнѣніꙗ / mnenja` određena za δόξα;
  očuvani su bestrasnost, prisna ljubav i mnogoučenost bez razmetanja.
- I.10: književnik, nekorenje i nenametljivo popravljanje tuđeg izraza;
  zadržana su sva tri jezička nedostatka i svi načini posrednog ispravljanja.
- I.11: sačuvana je ublažena komparativna tvrdnja o manjku prisne ljubavi,
  umesto ranije apsolutne tvrdnje da ljubavi nema. I.12: ispravljen genitiv
  `нѫждꙑ` i pojednostavljena rečenica o izbegavanju dužnosti pod izgovorom poslova.
- Korpusni oslonci: `мѫдровати` u `suprasliensis.txt`, zapis `1001207`;
  `кънижъникъ` u `marianus.txt`, zapis `1081900`; porodica `бесѣда` u
  `Beseda na eres.txt`. Projektne izvedenice i prilagođeni oblici nisu time
  proglašeni neposredno istorijski potvrđenim.
- Pomoćna provera kulturnih oznaka i smisla: [Haines, knjiga I, 5–12](https://en.wikisource.org/wiki/Marcus_Aurelius_%28Haines_1916%29/Book_1).
  Grčki izvornik i `RECNIK.md` ostaju autoriteti; rečnik nije menjan.
- `npm run build:work-data` prolazi. Provereni su raspored i jedinstvenost
  sidara, nepraznost osam odeljaka, pasusi I.7–I.9 i osnovna STSL grafija
  i interpunkcija. SHA-256 potvrđuje da I.1–I.4 i I.13 nadalje nisu menjani.

### I.1–I.4 — 2026-09-09

- Proveren pun grčki tekst 1.1–1.4 u lokalnom XML-u. U I.1 srpski vraća
  vezu καλόηθες sa naravi (`ἦθος → нравъ / narav`); staroslovenski zadržan.
- I.2 proveren na oba jezika i zadržan bez izmene.
- U I.3 razdvojeni su bogočestije, štedrost i uzdržavanje; sačuvana je
  razlika između zlodelanja i same pomisli. Ispravljeni su genitivi posle
  `отъ`, a bogataški način života više nije zamenjen samim izobiljem.
- Za `богочьстіє` oslonac je porodica potvrđena oblikom `богочьстиво`
  u `data/sources/corpus/suprasliensis.txt`, zapis `1004229`; konkretan oblik
  u prevodu ovde je projektna tvorba, ne tvrdnja o neposrednoj potvrdi.
  `щедротꙑ` je potvrđeno u prvom odeljku `О письменьхъ.txt`.
  Srpsko *štedrost* ovde znači darežljivost, ne štedljivost.
- U I.4 uklonjen je prezent iz staroslovenskog opisa stečenog obrazovanja;
  oba prevoda čuvaju javna učilišta, dobre kućne učitelje i izdašno trošenje
  na obrazovanje. Zadržana je rečnička porodica `γιγνώσκω → знати / znati`
  kroz `поꙁнахъ / poznah`.
- Pomoćna provera smisla: [Haines, knjiga I](https://en.wikisource.org/wiki/Marcus_Aurelius_%28Haines_1916%29/Book_1).
  Osnova prevoda ostaje lokalni grčki izvornik.
- `npm run build:work-data` prolazi. Sidra knjige I ostala su ista;
  sadržaj od I.5 nadalje ostao je nepromenjen na oba jezika, provereno
  SHA-256 otiscima. Plan pokriva svih 486 postojećih odeljaka tačno jednom.

## Završna provera celog dela

- [ ] Pročitati svih dvanaest knjiga u kontinuitetu i proveriti doslednost oba prevoda.
- [ ] Proveriti vlastita imena, ponovljene izraze, izostavljanja i dupliranja prema grčkom.
- [ ] Proveriti svih 486 sidara i pokrenuti `npm run build:work-data`.
- [ ] Razjasniti granicu XII.17/XII.18: sadašnji manifest preskače XII.18; proveriti prema izvorniku da li je sadržaj spojen pod XII.17 i uskladiti oba prevoda i manifest.

## Celine


### I

- [x] `I.1–I.4`
- [x] `I.5–I.12`
- [ ] `I.13–I.15`
- [ ] `I.16`
- [ ] `I.17`

### II

- [ ] `II.1–II.8`
- [ ] `II.9–II.14`
- [ ] `II.15–II.17`

### III

- [ ] `III.1–III.3`
- [ ] `III.4–III.6`
- [ ] `III.7–III.14`
- [ ] `III.15–III.16`

### IV

- [ ] `IV.1–IV.8`
- [ ] `IV.9–IV.16`
- [ ] `IV.17–IV.24`
- [ ] `IV.25–IV.32`
- [ ] `IV.33–IV.40`
- [ ] `IV.41–IV.48`
- [ ] `IV.49–IV.51`

### V

- [ ] `V.1–V.7`
- [ ] `V.8–V.11`
- [ ] `V.12–V.19`
- [ ] `V.20–V.27`
- [ ] `V.28–V.35`
- [ ] `V.36`

### VI

- [ ] `VI.1–VI.8`
- [ ] `VI.9–VI.16`
- [ ] `VI.17–VI.24`
- [ ] `VI.25–VI.32`
- [ ] `VI.33–VI.40`
- [ ] `VI.41–VI.47`
- [ ] `VI.48–VI.55`
- [ ] `VI.56–VI.59`

### VII

- [ ] `VII.1–VII.8`
- [ ] `VII.9–VII.16`
- [ ] `VII.17–VII.24`
- [ ] `VII.25–VII.32`
- [ ] `VII.33–VII.40`
- [ ] `VII.41–VII.48`
- [ ] `VII.49–VII.56`
- [ ] `VII.57–VII.64`
- [ ] `VII.65–VII.72`
- [ ] `VII.73–VII.75`

### VIII

- [ ] `VIII.1–VIII.8`
- [ ] `VIII.9–VIII.16`
- [ ] `VIII.17–VIII.24`
- [ ] `VIII.25–VIII.32`
- [ ] `VIII.33–VIII.40`
- [ ] `VIII.41–VIII.48`
- [ ] `VIII.49–VIII.56`
- [ ] `VIII.57–VIII.61`

### IX

- [ ] `IX.1–IX.8`
- [ ] `IX.9–IX.16`
- [ ] `IX.17–IX.24`
- [ ] `IX.25–IX.32`
- [ ] `IX.33–IX.40`
- [ ] `IX.41–IX.42`

### X

- [ ] `X.1–X.8`
- [ ] `X.9–X.16`
- [ ] `X.17–X.24`
- [ ] `X.25–X.32`
- [ ] `X.33–X.38`

### XI

- [ ] `XI.1–XI.8`
- [ ] `XI.9–XI.16`
- [ ] `XI.17–XI.20`
- [ ] `XI.21–XI.28`
- [ ] `XI.29–XI.36`
- [ ] `XI.37–XI.39`

### XII

- [ ] `XII.1–XII.8`
- [ ] `XII.9–XII.16`
- [ ] `XII.17`
- [ ] `XII.19–XII.25`
- [ ] `XII.26–XII.33`
- [ ] `XII.34–XII.36`

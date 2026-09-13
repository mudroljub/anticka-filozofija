---
name: popravi-sidra
description: "Popravlja strukturu celih dela u `data/works`: kanonska sidra, granice, redosled, duplikate i pogrešnu pripadnost prevoda grčkim odeljcima. Ne služi za jezičku redakturu prevoda."
---

# Popravka strukture i kanonskih sidara

Ova veština vraća kanonsku strukturu prevodnih Markdown fajlova dela iz
`data/works` prema grčkom izvorniku i `work.json`. Ona rešava:

- pogrešno postavljena ili nedostajuća HTML sidra `<!-- anchor:... -->`;
- prevod pod pogrešnim sidrom ili u pogrešnom poglavlju;
- poremećen redosled odlomaka;
- rascepljen odlomak i njegovu pogrešnu pripadnost susednim jedinicama;
- dupliran prevodni sadržaj kada isti grčki odlomak zauzima više mesta.

Strukturna popravka sme da premesti, spoji, razdvoji ili ukloni samo dokazano
suvišan duplikat postojećeg prevodnog sadržaja. Ne preformuliše ni ne
prevodi tekst: za smisao, jezik, stil i nedostajući prevod služi
`popravka-prevoda`.

## Merilo i obim

Pročitaj `docs/CELA_DELA.md`, `work.json`, oba prevodna fajla i odgovarajući
grčki korpus. `work.json` je jedini autoritet za niz sidara i fajl svake
jedinice. Proveri ceo traženi obim, redom; kod celog dela to su sva sidra
manifesta, ne uzorak.

Najpre za svaku jezičku verziju utvrdi niz: kanonsko sidro → stvarni prevodni
sadržaj → odgovarajući grčki odlomak. Čitaj granicu sa obe strane; sidro može
stajati usred pasusa. Ne pretpostavljaj da je tekst ispravno razvrstan samo
zato što su oznake jedinstvene i rastućeg redosleda.

Svaki kanonski grčki odlomak mora nakon postupka imati upravo jedno pripadno
mesto u svakom prevodu, osim ako je prevod zaista odsutan. Sadržaj koji
odgovara drugom poglavlju jeste strukturna, a ne stilska greška.

## Postupak

1. Pokreni `audit:work-anchors` za traženi opseg; kada se pokaže obrazac,
   proveri celo delo redom. Uporedi svaki prevodni blok sa odgovarajućim
   grčkim odlomkom i neposrednim kontekstom.
2. Razvrstaj nalaz pre izmene:
   - **samo sidro** — sadržaj je na pravom mestu, oznaka nije;
   - **strukturni sadržaj** — sadržaj je dupliran, rascepljen, preskočen ili
     pripada drugom sidru/poglavlju;
   - **nedostajući prevod** — nijedan postojeći blok ne odgovara kanonskom
     grčkom odlomku.
3. Za grešku samo sidra sačuvaj proverene, jedinstvene lokatore za oba jezika
   u `tools/anchor-maps/`, pokreni `align:work-anchors` bez `--write`, pa
   primeni proverenu mapu alatom `apply-work-anchor-map.mjs --write`. Ne
   pomeraj samostalno samo HTML komentare.
4. Za strukturni sadržaj neposredno preuredi Markdown tako da postojeći
   sadržaj stoji jednom, pod pravim kanonskim sidrom i u pravom redosledu.
   Ne menjaj njegovu formulaciju. Duplikat ukloni tek po poređenju sa grčkim
   i zadrži jedini primerak na kanonskom mestu.
5. Ako posle razvrstavanja grčki odlomak nema nikakav prevod, ne izmišljaj
   sadržaj pod ovom veštinom: predaj baš taj odsutni odlomak
   `popravka-prevoda`. Ne prekrivaj prazninu pogrešnim preimenovanjem sidra.
6. Ponovo proveri da su sva sidra iz `work.json` prisutna tačno jednom, da je
   njihov redosled kanonski i da svaki sadržaj pripada svom grčkom odlomku.
   Zatim pokreni `build:works`; po potrebi i propisani generator izvornika.

Alat za mapu mora potvrditi da je tekst prevoda bez sidara neizmenjen. To
pravilo važi samo za slučaj „samo sidro”; ono ne sprečava nužno strukturno
preuređivanje postojećih blokova.

Ne menjaj `data/work-originals.json`, `data/works-index.json` ni druge
generisane fajlove ručno. U predaji navedi obim, strukturne nalaze, pomerena
sidra, premeštene ili uklonjene duplikate, preostale nedostajuće odlomke i
rezultat provere; ne stvaraj poseban izveštaj ocene prevoda.

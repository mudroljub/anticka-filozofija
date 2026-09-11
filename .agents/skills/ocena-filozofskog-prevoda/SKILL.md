---
name: ocena-filozofskog-prevoda
description: Ocenjuje kvalitet postojećih prevoda starogrčke filozofije na projektni staroslovenski (`stsl`) i/ili srpski (`sr`). Koristi ovu veštinu kada korisnik traži filološku proveru, pregled kvaliteta, audit, uzorkovanu ocenu ili izveštaj o prevodima u jednom ili više fajlova. Veština proverava vernost grčkom, slovensku prirodnost, sažetost, ritam, važne pojmovne veze i jezičke norme, uz razumno uzorkovanje koje jasno ograničava zaključke.
---

# Ocena kvaliteta filozofskog prevoda

Ocenjuj prevod prema grčkom izvorniku i projektnim pravilima, a ne prema tome koliko mehanički ponavlja rečnik ili imitira starinu. Cilj izveštaja je da korisniku pokaže šta je snažno, šta zaista zahteva doradu i koliko je zaključak pouzdan.

## Učitaj merila prema obimu ocene

Uvek pročitaj:

1. `docs/PREVODJENJE_NA_STAROSLOVENSKI.md`
2. `docs/PREVODJENJE_NA_SRPSKI.md`
3. `docs/KLESANJE_PREVODA.md`

Učitaj kada je relevantno:

- `docs/RECNIK.md` i `docs/MREZA_PREVODA.md` za pojmovne veze i ranija rešenja — rečnik je orijentir, ne obrazac za pretragu-zamenu;
- `docs/GRAMATIKA.md` i `docs/KORPUS.md` za `stsl` morfologiju, sintaksu ili istorijsku mogućnost oblika;
- `docs/PODELA_UNOSA.md`, `docs/CELA_DELA.md`, `docs/POINTER_FORMAT.md`, `docs/IDENTIFIKATOR.md` i `docs/DATIRANJE.md` kada ocena obuhvata strukturu projektnih unosa, sidra ili metapodatke.

## Uzorkovanje koje čuva smisao celine

Najpre odredi čitalačke jedinice: pojedinačne citate, JSON unose, kanonska sidra ili smisaone pasuse. Ne uzorkuj nasumce samo po broju redova.

Ako korisnik nije odredio obim, primeni sledeći podrazumevani uzorak:

| Obim | Uzorak |
| --- | --- |
| Do 20 jedinica | Pregledaj sve. |
| 21–100 jedinica | Pregledaj 12 jedinica. |
| Više od 100 jedinica | Pregledaj 20 jedinica. |
| Više fajlova | Pregledaj najmanje 2 jedinice iz svakog fajla, zatim raspodeli preostali budžet do najviše 30 jedinica prema dužini i riziku. |

Uzorak rasporedi kroz početak, sredinu i kraj svakog većeg teksta. Obavezno uključi jedinice sa gustim filozofskim terminima, složenom grčkom sintaksom, argumentom, paradoksom, dijalogom, pripovešću ili već uočenom nedoslednošću. Za svaki izabrani odlomak pročitaj dovoljno susednog grčkog konteksta da ne pogrešno oceniš referencu ili elipsu.

Kada je fajl mali, pregledaj ga celog. Kada nalaz ukaže na sistemski problem, proširi uzorak ciljano za još 3–5 jedinica i zabeleži razlog. Ne prikazuj uzorkovanu ocenu kao potpunu proveru celog korpusa.

## Merila ocene

Za svaku jedinicu najpre proveri grčku misao: značenje, negaciju, logički odnos, referencu, važne dvosmislenosti, metafore, suprotnosti, ponavljanja i korenske veze.

Zatim proceni:

1. **Vernost izvorniku** — da li prevod prenosi ono što grčki zaista kaže, bez dodavanja, gubitka ili zamene odnosa.
2. **Filozofska građa** — da li su sačuvane bitne pojmovne razlike, argument i korenske veze; ne kažnjavaj opravdano odstupanje od rečnika.
3. **Prirodnost i ritam** — da li rečenica zvuči kao neposredna, sažeta i lepa slovenska misao, a ne kao grčka konstrukcija u slovenskim rečima.
4. **Ciljni jezik** — za `stsl`: istorijski moguća gramatika i prirodna slovenska sintaksa; za `sr`: neposredno značenje iz grčkog, dok `stsl` služi samo kao stilski oslonac za blago uzvišen, prirodan izraz.
5. **Klesanje** — da li postoje suvišne reči, teški participi, nepotrebna kopula ili opisna konstrukcija koju je moguće skratiti bez gubitka misli.

Grafiju `stsl` proveravaj kao završni, tehnički sloj. Označi očigledne greške, ali joj ne daj veću težinu od smisla, duha, sažetosti, ritma i lepote.

## Nalazi i težina problema

Svaki nalaz veži za tačnu jedinicu, kratak grčki kontekst i postojeći prevod. Jasno objasni zašto je problem, a predloženu preradu navedi samo kada korisniku stvarno pomaže.

- **Kritično** — menja osnovni smisao, poriče/obrće tvrdnju ili kvari ključni argument.
- **Značajno** — gubi filozofsku razliku, važnu vezu ili prirodnost tako da je potrebna dorada.
- **Manje** — lokalna stilska, gramatička ili grafijska dorada bez značajnog gubitka smisla.
- **Vrlina** — naročito uspešno rešenje koje vredi sačuvati kao uzor.

Ne izmišljaj greške da bi svaki odeljak imao primedbu. Razdvoji filološki dokaz od ličnog stilskog predloga i označi stvarnu neizvesnost.

## Izveštaj korisniku

Po pravilu vrati sažet izveštaj u razgovoru. Fajl izveštaja napravi samo ako ga korisnik izričito traži ili je to deo zadatka.

Koristi ovaj oblik:

```md
# Ocena kvaliteta prevoda: <obim>

## Sažetak
<opšti sud u 2–4 rečenice, bez lažne preciznosti>

## Obim i pouzdanost
- Pregledano: <broj i vrste jedinica>
- Metod uzorka: <raspodela i razlog izbora>
- Granica zaključka: <šta uzorak može, a šta ne može dokazati>

## Ocena po merilima
| Merilo | Sud | Dokaz iz uzorka |
| --- | --- | --- |
| Vernost grčkom | snažno / mešovito / slabo | ... |
| Filozofska građa | ... | ... |
| Prirodnost i ritam | ... | ... |
| Ciljni jezik | ... | ... |
| Klesanje | ... | ... |

## Najvažniji nalazi
1. **<težina> — <jedinica>**: <dokaz, objašnjenje i po potrebi predlog>

## Uspele tačke
- **<jedinica>**: <zašto je rešenje dobro>

## Prioritet dorade
1. <najkorisnija sistemska ili lokalna sledeća radnja>
```

Ako uzorak ne otkrije značajne nedostatke, reci da „u pregledanom uzorku nisu nađeni”, ne da ih nema u celom skupu. Ako se utvrdi sistemski obrazac, navedi njegovu verovatnu rasprostranjenost i preporuči ciljanu punu proveru te kategorije.

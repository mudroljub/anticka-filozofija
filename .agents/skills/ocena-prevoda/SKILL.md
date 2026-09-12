---
name: ocena-prevoda
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

## Potpunost dokaza i ograničeni uzorci

Najpre odredi čitalačke jedinice: pojedinačne citate, JSON unose, kanonska sidra ili smisaone pasuse. Ne uzorkuj nasumce samo po broju redova.

U `data/quotes` fajl je osnovna jedinica ocene, a njegov autor osnovna jedinica izveštaja. Kada zahtev obuhvata više fajlova ili ceo direktorijum, ne pravi jedan slučajno sastavljen korpusni uzorak. Za svaki fajl odredi zaseban uzorak i izvedi zaseban sud; opšti zaključak sme samo sažeti te sudove, ne zameniti ih.

Unosi čiji je `type` `quote` ili `reported` predstavljaju glavni filozofski korpus autora i imaju prednost nad svim ostalim tipovima.

Unose drugih tipova (`bio`, `anecdote`, `mention` i slično) uključi dopunski: da proveriš pripovedni prevod, imena, istorijski opis, dijalog ili već uočeni rizik. Ne dopusti da brojni biografski unosi potisnu `quote` i `reported` iz ograničenog uzorka. Ako fajl nema nijedan takav unos, uzorkuj njegove druge tipove i jasno navedi ograničenje u izveštaju.

Za numeričku ocenu autora koristi **reprezentativan, stratifikovan uzorak** svih `quote` i `reported` unosa. Uzorak ne sme biti samo prva dva citata: rasporedi ga kroz početak, sredinu i kraj fajla, obuhvati oba tipa kada postoje i obavezno uključi terminološki guste, argumentativno složene ili ranije označene rizične jedinice. Uz ocenu uvek navedi broj pregledanih i ukupan broj prioritetnih unosa.

Ako korisnik nije odredio stroži obim, primeni sledeći podrazumevani uzorak:

| Fajl | Uzorak za njegovu ocenu |
| --- | --- |
| 1–5 prioritetnih unosa | Pregledaj sve `quote` i `reported` unose. |
| 6–50 | Pregledaj tačno 5, ravnomerno raspoređenih kroz fajl. |
| 51–100 | Pregledaj najmanje 10, ravnomerno raspoređenih kroz fajl. |
| Više od 100 | Pregledaj najmanje 5% prioritetnih unosa, zaokruženo naviše, ali ne manje od 10; ravnomerno raspoređenih kroz fajl. |
| Nema `quote` ni `reported` | Pregledaj 1–2 druga unosa i sud označi kao ograničen na pripovedne ili biografske prevode. |

Kada fajl ima više od 10 prioritetnih unosa, uzorak je obavezan: ne pregledaj ceo fajl i ne prikazuj odnos kao `18/18`, osim ako korisnik izričito zatraži potpuni pregled. I za fajlove sa 6–10 prioritetnih unosa primeni uzorak od 5, osim ako korisnik zatraži potpuni pregled.

Ovaj postupak daje dovoljno širok dokaz za **uzorkovanu autorovu ocenu i rang-listu**, ali u izveštaju mora jasno stajati da je ocena uzorkovana, uz odnos poput `10/65 quote/reported`. Nemoj je predstavljati kao potpunu filološku potvrdu svih unosa.

Kod zahteva za ocenu svih autora ili ceo direktorijum, primeni ovaj minimum zasebno na svaki fajl. Ako se planirani uzorak ne može završiti, izričito navedi koje fajlove i koliko prioritetnih unosa nisi pregledao; ne dodeljuj im ocenu niti ih prikrivaj opštim korpusnim sudom.

Za svaki izabrani odlomak pročitaj dovoljno susednog grčkog konteksta da ne pogrešno oceniš referencu ili elipsu. Kada nalaz pokaže sistemski problem, proširi uzorak za još najmanje tri prioritetna unosa iz istog fajla; ako se problem ponovi, snizi ocenu ili preporuči punu proveru autora.

Ne prikazuj uzorkovanu ocenu fajla kao potpunu proveru svakog njegovog unosa. Jasno odvoji kvalitet filozofskih izreka od dopunski pregledanih biografskih i pripovednih tekstova.

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

## Ocene po autorima

Kada je pregledan propisani reprezentativni uzorak autora, dodeli mu ocenu od 1 do 5 po istim merilima:

- **5** — izuzetno pouzdano u pregledanom uzorku; bez značajne primedbe.
- **4** — snažno; postoje samo manje, lokalne dorade.
- **3** — mešovito; bar jedna značajna dorada potrebna je za punu pouzdanost.
- **2** — slabo; više značajnih ili jedna kritična poteškoća narušava upotrebljivost uzorka.
- **1** — neprihvatljivo; osnovni smisao ili oblik prevoda učestalo ne služi izvorniku.

Za **svaki** ciljni jezik ocenjuj zasebno: vernost grčkom, prirodnost, isklesanost/sažetost i njegovu opštu ocenu. Vernost za `sr` proverava se neposredno prema grčkom, kao i vernost za `stsl`; prirodnost i sažetost procenjuju se prema normama odgovarajućeg ciljnog jezika. Ne prikazuj nijednu zajedničku, neoznačenu kolonu „Vernost“, „Prirodnost“, „Sažetost“ ili „Opšta“.

Opšta ocena svakog jezika je obrazložen stručni sud, ne aritmetička sredina: vernost ima veću težinu od stila. Kritična greška u jednom jeziku ne dopušta njegovu opštu ocenu višu od 2 dok se ne popravi; značajna neotklonjena greška u pravilu ne dopušta ocenu višu od 3. Za uzorak koji nema `quote` ni `reported` prikaži ocenu kao ograničenu i ne rangiraj je ravnopravno s filozofskim prevodima.

Posle odvojenih ocena oba jezika izračunaj jednu **ocenu prevoda (srpski + staroslovenski)** kao aritmetičku sredinu `srpski ocena` i `staroslovenski ocena`. Prikaži celobrojnu ocenu bez decimalnog nastavka (`4`, ne `4.0`); prikaži decimalu samo kada sredina nije ceo broj, na primer srpski 4 i staroslovenski 5 daju ocenu **4.5**. Ne zamenjuj ovaj račun dodatnim stručnim ili subjektivnim zaokruživanjem.

Rangiraj autore prvo po oceni prevoda, opadajuće. Pri istom rezultatu poređaj najpre veću slabiju od dve opšte jezičke ocene, zatim veću vernost grčkom u slabijem jeziku, pa veći udeo pregledanih prioritetnih unosa i autora azbučnim redom. Uz svaku ocenu navedi broj pregledanih i ukupan broj `quote`/`reported` unosa. Autora bez tih tipova prikaži odvojeno, bez ravnopravne filozofske rang-ocene.

## Izveštaj korisniku

Svaka izvršena ocena prevoda podrazumeva ažuriranje **jedinog kanonskog Markdown izveštaja**: `docs/OCENA_PREVODA.md`, uz sažetak u razgovoru. Kanonska tabela u tom fajlu je jedino važeće mesto za ocenu autora; za ograničeni obim ažuriraj samo njegov red i njegove nalaze u istom fajlu. Ne stvaraj, ne ažuriraj i ne čuvaj pojedinačne autorske izveštaje niti druge `OCENA_PREVODA_*.md` fajlove.

Koristi ovaj oblik:

```md
# Ocena kvaliteta prevoda: <obim>

## Sažetak
<opšti sud u 2–4 rečenice koji sažima raspodelu ocena po autorima, bez lažne preciznosti>

## Obim i pouzdanost
- Pregledano: <broj fajlova, autora, jedinica i tipova>
- Metod uzorka: <uzorak unutar svakog fajla, s prvenstvom `quote`/`reported`>
- Granica zaključka: <šta ocene po fajlu mogu, a šta ne mogu dokazati>

## Ocena po autoru
| autor | pregledano | srpski vernost | srpski prirodnost | srpski sažetost | srpski ocena | staroslovenski vernost | staroslovenski prirodnost | staroslovenski sažetost | staroslovenski ocena | ocena |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ... | 10/65 `quote`/`reported` | 5 | 4 | 4 | **4** | 5 | 4 | 5 | **5** | **4.5** |

## Zajednički obrasci u proveravanim fajlovima
| Merilo | Sud | Dokaz iz uzorka |
| --- | --- | --- |
| Vernost grčkom | snažno / mešovito / slabo | ... |
| Filozofska građa | ... | ... |
| Prirodnost i ritam | ... | ... |
| Ciljni jezik | ... | ... |
| Klesanje | ... | ... |

## Najvažniji nalazi po fajlovima
1. **<težina> — <autor>, <jedinica>**: <dokaz, objašnjenje i po potrebi predlog>

## Uspele tačke po autorima
- **<autor>, <jedinica>**: <zašto je rešenje dobro>

## Prioritet dorade
1. <fajl ili grupa fajlova i najkorisnija sledeća radnja>
```

Ako uzorak ne otkrije značajne nedostatke, reci da „u pregledanom uzorku nisu nađeni”, ne da ih nema u celom skupu. Ako se utvrdi sistemski obrazac, navedi njegovu verovatnu rasprostranjenost i preporuči punu proveru tog autora.

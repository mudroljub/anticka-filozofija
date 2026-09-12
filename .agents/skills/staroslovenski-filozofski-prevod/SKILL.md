---
name: staroslovenski-filozofski-prevod
description: Prevod i redaktura starogrčkih filozofskih tekstova na projektni rekonstruisani slovenski filozofski jezik VIII veka (polje `stsl`). Koristi ovu veštinu kad god korisnik traži prevod, proveru, doradu ili unos starogrčke filozofije, izreka, dijaloga, pisama ili biografskih odlomaka na staroslovenski u ovom projektu — uključujući zahteve koji pominju grčki izvornik, arhaičnu ćirilicu, filozofsku terminologiju, `stsl`, citate ili dela. Veština koristi projektni rečnik kao orijentir, a daje prvenstvo punom smislu, prirodnom slovenskom izrazu, istorijski mogućoj gramatici i sažetom ritmu prevoda.
---

# Prevod starogrčke filozofije na staroslovenski

Izradi prevod koji zvuči kao moguća, sažeta i lepa slovenska filozofska misao VIII veka. Ne pravi mehaničku zamenu grčkih reči staroslovenskim oblicima: prenesi punu misao, njene pojmovne veze, udar i ritam.

Red prvenstva je: **smisao i duh izvornika → sažetost, ritam i lepota slovenske rečenice → terminološke porodice → istorijski moguća gramatika → grafijsko doterivanje**. Grafija služi dobrom prevodu; ne sme upravljati izborom živog izraza niti pretvoriti rad u mehaničko proveravanje slova.

U ovom projektu „staroslovenski” označava rekonstruisani rani književni slovenski filozofski jezik VIII veka, osim kada kontekst izričito govori o istorijskom staroslovenskom i njegovim spomenicima.

## Učitaj autoritete pre rada

Pre svakog prevoda pročitaj, ovim redom:

1. `docs/PREVODJENJE_NA_STAROSLOVENSKI.md` — osnovni cilj, grafija, stil, terminološka načela i greške koje treba izbeći.
2. `docs/RECNIK.md` — terminološki orijentir, izvor već istraženih rešenja i porodica reči, ne obrazac za doslovnu zamenu pojmova.
3. `docs/GRAMATIKA.md` — istorijski moguća morfologija, sintaksa i tvorba.
4. `docs/KLESANJE_PREVODA.md` — završno sažimanje bez gubitka smisla.

Učitaj i sledeće kada su relevantni:

- `docs/KORPUS.md` pri proveri oblika, sintakse, tvorbe ili novog termina;
- `docs/PREVODJENJE_NA_SRPSKI.md` kada se uz `stsl` daje ili menja polje `sr`;
- `docs/PODELA_UNOSA.md`, `docs/DATIRANJE.md`, `docs/IDENTIFIKATOR.md` i `docs/POINTER_FORMAT.md` kada se stvaraju ili dele unosi u `data/quotes`;
- `docs/CELA_DELA.md` kada se uređuje sadržaj u `data/works`.

Projektni dokumenti i prethodna rešenja daju važan kontekst, ali grčki izvornik, njegov smisao i prirodnost dovršenog prevoda ostaju presudni. Ne menjaj postojeću odluku u `RECNIK.md` bez izričitog zahteva, ali nemoj je ni tretirati kao obavezu da se svaki grčki pojam u svakom kontekstu prevede istom rečju.

## Radni postupak

### 1. Razumi izvornik pre prevođenja

- Pročitaj puni grčki odlomak i dovoljno neposrednog konteksta da razrešiš referencu, negaciju, ironiju, elipsu i logički odnos.
- Izdvoji filozofski važne reči, njihove grčke korene, suprotnosti, ponavljanja i igre reči. Ne gubi ove odnose radi površinske sažetosti.
- Odredi da li je tekst izreka, argument, pripovest, dijalog ili naslov; oblikuj slovensku rečenicu prema njegovoj funkciji, ne prema grčkom redu reči.

### Akademska provera filozofskog smisla

Ako posle čitanja grčkog, neposrednog konteksta i projektnih merila ostane
stvarna dilema o filozofskom značenju, argumentu, tehničkom pojmu, referenci
ili višeznačnoj konstrukciji, **obavezno konsultuj akademske autoritete na
mreži pre nego što usvojiš prevod**. Prednost imaju naučna izdanja i komentari,
stručni leksikoni, radovi ili monografije dostupni preko univerziteta i drugih
akademskih ustanova, te potpisane stručne enciklopedije.

Grčki ostaje primarni izvor; akademski izvor služi da razreši stvarnu dilemu,
ne da ga zameni. Ne zasnivaj odluku na nepotpisanim popularnim tumačenjima,
blogovima ili automatskim prevodima. U završnoj belešci navedi izvor samo kada
je njegova konsultacija odlučila između stvarno mogućih prevodnih rešenja.

### 2. Odluči terminološki sloj

- Najpre pretraži `RECNIK.md` da razumeš ranije odluke, moguća rešenja i porodice reči. Ne radi pretragu-zamenu: rečnički izraz nije obavezan kada bi u konkretnom odlomku zatamnio smisao, narušio ritam ili zvučao prisilno.
- Kada rečnički izraz dobro služi misli, slobodno ga upotrebi i izvedi istorijski moguć oblik iz iste porodice. Kada ne služi, izaberi razumljiviji i prirodniji slovenski izraz, pa proveri da ne brišeš stvarnu filozofsku razliku izvornika.
- Čuvaj grčke korenske veze, suprotnosti i ponavljanja kada su nosioci misli; to je cilj prevoda, ne mehaničko pravilo `jedna grčka reč → jedna slovenska reč`.
- Kada termin nije utvrđen, istraži redom: prioritetni istorijski korpus iz `docs/KORPUS.md`, praslovenski koren i etimologiju, istorijski moguću tvorbu, zatim kasnije slovenske izvore kao pomoć.
- Nepotvrđena reč je dopuštena ako je fonološki, morfološki i semantički moguća. Označi je u belešci kao **projektnu rekonstrukciju**; ne predstavljaj je kao istorijski potvrđenu.
- Ne uvodi grčke ili latinske filozofske pozajmljenice. Lična imena su jedini izuzetak od načela da je leksika slovenska.
- Ako se pokaže da bi novo rešenje bilo korisno i šire od jednog odlomka, možeš ga predložiti korisniku uz kratko obrazloženje; ne prepravljaj `RECNIK.md` bez izričitog zahteva.

### 3. Sagradi istorijski moguću rečenicu

- Odredi deklinaciju ili glagolsku klasu pre oblikovanja novog oblika. Nikada ne izmišljaj paradigmu samo zato što deluje arhaično.
- Biraj slovenske padeže, vid, vreme i red reči prema smislu, a ne mehanički prema grčkom ili savremenom srpskom. U pripovedanju je aorist često prirodan; dvojinu čuvaj kada se govori baš o dvama bićima ili predmetima.
- Koristi participe i dativ apsolutni kada zbijaju rečenicu prirodno, ali ne preslikavaj svaki grčki particip ili genitiv apsolutni.
- Izostavi `єсть` kada je kratka definicija jasna bez kopule; zadrži ga kada nosi značenje, kontrast ili prirodnu konstrukciju.
- Partikule `же`, `бо`, `ѹбо` i `ли` upotrebi samo kada nose ritam ili odnos. Piši ih odvojeno kada to odgovara starijoj analitičkoj strukturi.

### 4. Iskleši prevod

Prođi pet slojeva iz `KLESANJE_PREVODA.md`:

1. Zameni dugu ili apstraktnu reč kraćim, starijim korenom samo ako celina značenja ostaje netaknuta.
2. Ukloni pomoćne glagole, zamenice, veznike i ponavljanja koja ne pripadaju izvorniku.
3. Razbij grčku participijalnu ili zavisnu konstrukciju ako sprečava prirodan slovenski iskaz.
4. Vrati korenske veze, suprotnosti, paralelizme i namerna ponavljanja koji nose misao; termin iz rečnika vrati samo ako u tom kontekstu zaista pomaže jasnoći i lepoti.
5. Pročitaj naglas: cilj su kratke, teške i ritmične celine, ne dekorativna arhaičnost.

Ne gradi superlativ mehanički sa `наи-`; prednost imaju prirodan komparativ, oblik poput `мѫдрѣиши вьсѣхъ`, ili sažetiji iskaz kada smisao to dopušta.

Pitaj za svaku reč: „nosi li misao ili samo opterećuje rečenicu?” i za svaku konstrukciju: „zvuči li kao slovenska misao, a ne kao grčka rečenica obučena u slovenske reči?” Ne žrtvuj namernu etimološku vezu, suprotnost ili paralelizam radi površinske kratkoće.

### 5. Doteraj projektnu grafiju

Grafiju proveravaj tek kada su smisao, termin i ritam rešeni. To je završno doterivanje, ne merilo kvaliteta prevoda. Ako je grafijski detalj neizvestan, ne zaustavljaj dobar prevod niti ga kvari neprirodnom konstrukcijom: zadrži najbolju rečenicu i, po potrebi, kratko označi tehničku nedoumicu.

Pre isporuke proveri najmanje sledeće:

- `ѹ`, ne `у` ili `ꙋ`; `ꙁ`, ne `з`;
- etimološke `ѣ`, `ѧ` i `ѫ`; nazale ne menjaj kasnijim vokalima;
- `ѭ` samo gde potiče od praslovenskog *jǫ*, a `ꙗ` razlikuj od `ѧ` po etimologiji;
- završetak trećeg lica prezenta `-ть` i nastavak `-ніє`;
- grčka slova `ѡ`, `ѳ`, `ѯ`, `ѱ`, `ѵ` samo u ličnim imenima prema grčkom izvorniku — nikad u slovenskim rečima;
- ne koristi `ѣ`/`ъ`/`ь`/nazale kao ukrasnu arhaizaciju, niti kasnija slova `Ћ`, `Ї`, `Я`;
- umesto ostale interpunkcije koristi samo srednju tačku `·`; svaka `stsl` rečenica završava se sa `·`.

Grčka imena prenosi prema grčkom izvorniku, ne prema kasnijem tradicionalnom obliku, i čuvaj isti oblik kroz ceo tekst.

## Rad u projektnim podacima

- U postojećem unosu menjaj samo tražena izvorna polja. Ne diraj generisane fajlove i ne upisuj ručno generisani `pointer`.
- Za `data/quotes` očuvaj `id`; ne zasnivaj identitet na `_id`. Pri podeli sledi `PODELA_UNOSA.md`, a datiranje dodaj samo za `bio` i `anecdote` prema `DATIRANJE.md`.
- Za celovita dela čuvaj `work.json`, kanonska HTML sidra i tačnu granicu odeljka; ne deli pasus samo zato što sidro pada usred njega.
- Kada prevodiš i `sr`, prevodi ga neposredno iz potvrđenog grčkog smisla.
  `stsl` koristi kao jezički i stilski oslonac za ritam, sažetost i blago
  uzvišen slovenski ton, nikada kao posredni izvor značenja. Po mogućnosti
  čuvaj korisne korenske veze, ali prednost daj isklesanom, arhaičnom i
  razumljivom srpskom izrazu koji zvuči organski razvijen iz staroslovenskog
  tokom vekova. To je projektna književna pretpostavka, ne istorijska tvrdnja
  da srpski genetski potiče od staroslovenskog.

## Predaja rezultata

Za običan zahtev vrati samo gotov prevod, u obliku koji korisnik traži. Ako format nije određen, koristi:

```text
stsl: <prevedeni tekst sa srednjim tačkama>
```

Dodaj najviše kratku belešku kada je potrebna za proveru: nova projektna rekonstrukcija, višeznačnost izvornika, neizvesna morfologija ili predlog za budući unos u rečnik. U belešci jasno razlikuj istorijski potvrđen oblik, praslovensku rekonstrukciju i projektnu rekonstrukciju.

Pre konačnog odgovora proveri redom: da li prevod potpuno nosi grčku misao; da li zvuči slovenski, sažeto, ritmično, lepo i razumljivo; da li čuva one korenske veze i razlike koje su bitne za misao; da li je gramatika istorijski moguća; pa tek zatim da li su rečnik i grafija korisno primenjeni, bez grecizama i sa srednjim tačkama.

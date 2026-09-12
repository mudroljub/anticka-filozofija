---
name: popravka-prevoda
description: Paralelno popravlja i rediguje postojeće prevode starogrčke filozofije na projektni staroslovenski (`stsl`) i srpski (`sr`). Koristi ovu veštinu kad god korisnik traži zajedničku doradu, usklađivanje, klesanje, popravljanje ili redakturu oba prevoda istog grčkog odlomka, citata, unosa, dijaloga, pisma ili celog dela. Veština čita grčki kao jedini izvor značenja, uređuje oba prevoda u jednom prolasku i sprečava da srpski postane posredni prevod staroslovenskog.
---

# Paralelna redaktura starogrčkog filozofskog prevoda

Rediguj oba prevoda uz isti otvoreni grčki odlomak. Grčki određuje smisao i kanonsku granicu; staroslovenski i srpski su dva samostalna odgovora na njega. Njihovo paralelno čitanje služi da se uoče razilaženja, očuvaju važne pojmovne veze i izbegne dvostruko čitanje izvornika.

Ovu veštinu koristi kada se menjaju **oba** polja ili fajla. Za prevod ili doradu samo jednog jezika upotrebi odgovarajuću jezičku veštinu.

## Učitaj merila

Pre rada uvek pročitaj:

1. `docs/PREVODJENJE_NA_STAROSLOVENSKI.md`
2. `docs/PREVODJENJE_NA_SRPSKI.md`
3. `docs/KLESANJE_PREVODA.md`
4. `docs/RECNIK.md` i `docs/MREZA_PREVODA.md`

Učitaj kada je potrebno:

- `docs/GRAMATIKA.md` i `docs/KORPUS.md` za staroslovenski oblik, tvorbu ili sintaksu;
- `docs/CELA_DELA.md` kada se uređuju `data/works`, kanonska sidra ili granice odeljaka;
- `docs/PODELA_UNOSA.md`, `docs/DATIRANJE.md`, `docs/IDENTIFIKATOR.md` i `docs/POINTER_FORMAT.md` kada se uređuju unosi u `data/quotes`.

`RECNIK.md` je orijentir za ranija rešenja i pojmovne porodice, ne mapa za doslovnu zamenu. Ne prepravljaj ga bez izričitog zahteva.

## Jedan prolazak, tri otvorena teksta

Za svaku čitalačku jedinicu otvori paralelno:

```text
grčki izvornik  ←  stsl
       ↑
       └────────── sr
```

Ne idi putem `grčki → stsl → sr`. Srpski se uvek proverava prema grčkom; staroslovenski mu daje samo ritam, zbijenost, slovensku sliku i blagu uzvišenost.

## Akademska provera filozofskog smisla

Ako posle čitanja grčkog, neposrednog konteksta i projektnih merila ostane
stvarna dilema o filozofskom značenju, argumentu, tehničkom pojmu, referenci
ili višeznačnoj konstrukciji, **obavezno konsultuj akademske autoritete na
mreži pre nego što promeniš prevod**. Prednost imaju naučna izdanja i komentari,
stručni leksikoni, radovi ili monografije dostupni preko univerziteta i drugih
akademskih ustanova, te potpisane stručne enciklopedije.

Grčki ostaje primarni izvor; akademski izvor služi da razreši stvarnu dilemu,
ne da ga zameni. Ne zasnivaj odluku na nepotpisanim popularnim tumačenjima,
blogovima ili automatskim prevodima. U predaji navedi izvor samo kada je njegova
konsultacija odlučila između stvarno mogućih prevodnih rešenja.

### 1. Najpre utvrdi grčku misao i granicu

- Pročitaj grčki odlomak i dovoljno susednog teksta da razrešiš negaciju, referencu, elipsu, argument, metaforu, opozicije, ponavljanja i korenske veze.
- Kod celog dela proveri i mesto kanonskog sidra prema izvorniku. Sidro sme stajati usred pasusa; ne zaključuj o njegovoj grešci samo iz teksta koji sledi posle oznake.
- Sažmi za sebe jezgro iskaza: ko šta tvrdi, kojim razlogom, uz koju ogradu i sa kojim pojmovnim razlikama. Tek onda menjaj prevode.

Ako je granica sidra očigledno pogrešna, odvoji taj nalaz od prevodne redakture. Za `data/works` koristi postupak i jednoznačne lokatore iz `docs/CELA_DELA.md`; fizičko pomeranje sidra ne sme menjati tekst prevoda.

### 2. Popravi staroslovenski neposredno prema grčkom

Staroslovenski oblikuj kao sažetu, prirodnu i lepu slovensku filozofsku misao VIII veka.

Poštuj prvenstvo najranijeg mogućeg slovenskog sloja; merila izbora oblika nalaze se u `docs/PREVODJENJE_NA_STAROSLOVENSKI.md`.

- Sačuvaj grčki argument, razlike i korenske veze koje nose misao.
- Klesanjem ukloni višak, teške kalke, nepotrebnu kopulu i grčki red reči kada guše slovenski udar.
- Prednost imaju kratke težinske celine, snažne imenice i glagoli, prirodan red reči i čestice samo kada nose odnos ili ritam.
- Rečničko rešenje primeni kada služi konkretnom iskazu; izaberi drugi istorijski moguć slovenski izraz kada je razumljiviji, lepši ili ritmički bolji.
- Grafiju i tehničke oblike proveri tek pošto su rešeni smisao, sažetost i ritam. Ne žrtvuj dobru rečenicu radi površinske arhaizacije.

Za stilski uzor odredi vrstu iskaza: za etičke izreke koristi
`data/sources/corpus/isus.json` — kratak, neposredan i težinski udar; za
metafiziku i kosmologiju koristi `data/sources/corpus/Бытиѥ.md` — miran,
graditeljski ritam, nizanje bića i poredaka, te jasne uzročne veze. Uzor
usmerava ritam i oblik rečenice, nikada ne zamenjuje grčki izvor značenja.

### 3. Popravi srpski neposredno prema grčkom

Ponovo pogledaj grčki, zatim srpski. Ne izvodi srpsko značenje iz upravo dorađenog `stsl`.

- Napiši živ, razumljiv i blago uzvišen književni srpski.
- Neka deluje kao da je kroz vekove organski izrastao iz staroslovenskog prevoda, ali bez kopiranja njegovih oblika, redosleda ili nejasnoća.
- Preuzmi iz `stsl` samo korisne stilske osobine: zbijenost, ritam, slovensku sliku, štedljivu kopulu i snažan iskaz.
- Klesanjem ukloni opisnost, nepotrebne veznike i grčke konstrukcije; gde prirodno odgovara, upotrebi infinitiv, particip ili aorist.
- Terminološku porodicu sačuvaj kada nosi grčku vezu, ali ne po cenu razumljivosti ili lepote srpske rečenice.

## Zajednička provera posle obe dorade

Uporedi oba rezultata s grčkim, ne jedan s drugim kao sa izvornikom.

Proveri:

1. Da li oba prevoda čuvaju istu tvrdnju, negaciju, razlog i ogradu iz grčkog?
2. Da li je važna razlika ili korenska veza očuvana u oba jezika, kada je ona važna za argument?
3. Da li razlika između `stsl` i `sr` ima dobar razlog: prirodnost ciljnog jezika, ritam ili kontekst — a ne previd?
4. Da li je `stsl` samostalno slovenski, sažet i ritmičan?
5. Da li je `sr` samostalan, razumljiv i blago uzvišen, a ne staroslovenski presvučen savremenim rečima?

Ne insistiraj da iste grčke reči imaju isti izraz u svakom pojavljivanju, niti da se `stsl` i `sr` podudaraju reč po reč. Ispravi samo razilaženje koje menja smisao, briše važnu vezu ili čini iskaz zaista nejasnim ili zbunjujućim.

## Visok prag za zamenu reči

Ne menjaj već ispravnu reč samo zato što postoji lepši, kraći ili jednako dobar sinonim. Zamena reči je opravdana samo kada možeš jasno pokazati jedan od ovih nedostataka prema grčkom:

- pogrešan, izostavljen ili obrnut smisao, negacija, referenca ili argument;
- bitna filozofska razlika ili korenska veza koju prevod stvarno briše;
- teška dvosmislenost, nejasnoća ili nespretna sintaksa zbog koje razuman čitalac ne može pouzdano razumeti iskaz;
- stvarna gramatička, grafijska ili sidrena greška koja menja čitanje ili upotrebljivost teksta.

Razlika u nijansi, redosledu reči, stepenu arhaičnosti ili ličnom stilskom ukusu nije dovoljan razlog za zamenu sinonima. Ako se nedostatak ne može kratko i konkretno objasniti uz grčki izvornik, ne menjaj tu reč i ne predlaži varijante.

To ne sprečava pravo klesanje prevoda. Kada je smisao potpun, prvenstvo imaju lepota, sažetost i ritam: ukloni stvarni višak, raskini tešku grčku konstrukciju, sabij dve slabe reči u jednu snažnu i uredi udar rečenice — ali samo dok ne gubiš nijansu, terminološku vezu ili deo misli. Prednost daj oduzimanju i preuređenju postojećeg iskaza, ne zameni već valjane reči drugima.

## Potpuna procedura popravke

Kada korisnik navede fajl, autora, delo ili drugu zbirku bez ograničavanja na
pojedinačne `id`-jeve, predmet popravke je **ceo taj obim**. Pregledaj svaku
čitalačku jedinicu koja ima prevod, redom od početka do kraja, u oba polja
`stsl` i `sr`. Ne uzorkuj, ne biraj reprezentativne jedinice i ne završavaj
posao nakon dela fajla.

Broj unosa nikada ne sužava obim popravke. Pravila uzorkovanja iz
`ocena-prevoda` važe isključivo za naknadnu ocenu kvaliteta; ne određuju koje
će se jedinice čitati, popravljati ili preskočiti u `popravka-prevoda`.

Radi ovim redom:

1. Odredi potpun niz prevodivih jedinica i njihov redosled u zadatom obimu.
2. Prođi svaku jedinicu paralelno uz njen grčki izvor: najpre smisao i
   argument, zatim pojmove, prirodnost, sažetost, ritam i tehničke oblike.
   Zabeleži samo da li je jedinica promenjena ili je proverena bez izmene;
   nijedna ne sme ostati nepročitana.
3. Kada je prvi prolazak završen, pročitaj ceo dorađeni obim ponovo kao dva
   samostalna slovenska teksta i uporedi ga s grčkim po jedinicama. Popravi
   sve nove ili ranije propuštene nedostatke.
4. Ponovi potpuni prolazak onoliko puta koliko je potrebno. Posao je završen
   tek kada ceo obim prođe bez preostale opravdane dorade prema merilima ove
   veštine — bez sadržajne greške, nejasnoće, izgubljene razlike, teškog
   kalka ili uklonjivog viška koji slabi iskaz.

Ne proglašavaj prevod popravljenim zato što je reprezentativan uzorak dobar,
zato što je ispravljeno nekoliko očiglednih mesta ili zato što je dostignut
unapred zamišljen broj izmena. Ako obim zahteva više iteracija, obavi ih sve.
Ograniči se samo na izričito zadati fajl ili delo; potpunost znači potpunost
tog obima, ne proširivanje na druge autore.

Za jednu seriju odlomaka učitaj projektna merila jednom i grčku analizu uradi
jednom po jedinici za oba prevoda. Susedne jedinice možeš čitati u istoj
radnoj celini kada dele argument ili pojmovnu porodicu, ali to ne dopušta
preskakanje ijedne jedinice.

Ne troši pažnju jednako na svaku nesavršenost. Rediguj ovim redom:

1. smisao, negaciju, argument, referencu i kanonsku granicu;
2. filozofske razlike, pojmovne porodice i namerna ponavljanja;
3. neprirodnu sintaksu, kalke i razilaženja oba prevoda bez dobrog razloga;
4. sažetost, ritam i lepotu;
5. grafiju i druge tehničke sitnice.

Dobra rečenica nije sirovina za preoblikovanje, ali je prvi tačan prevod još kamen za klesanje. Najpre očuvaj ceo smisao; zatim ukloni višak i oslobodi ritam; tek poslednje razmatraj pojedinačnu reč. Ne menjaj valjan izraz zbog sinonima — ako prevod može postati lepši, neka to najpre postigne sažimanjem, prirodnijim sklopom i jačim udarom iste misli.

Vodi kratku radnu belešku samo kada ona štedi budući rad: za novu projektnu rekonstrukciju, stvarnu dvosmislenost grčkog, važnu odluku o pojmovnoj porodici ili ponavljajući stilski problem. Ne pravi beleške o rutinskim stilskim izborima, niti poseban izveštaj ako ga korisnik nije tražio.

## Obim izmene i bezbednost

- Menjaj samo odlomke koje korisnik odredi ili koje proveravaš u tom prolasku. Ne prepisuj celo delo iz početka ako se problem može rešiti redakturom.
- Ne radi globalni search-replace nad terminima.
- Čuvaj trajne `id`, metapodatke, strukturu unosa i kanonska sidra.
- Ne menjaj generisane fajlove ni `pointer` polja ručno.
- Kada je nova staroslovenska reč potrebna, proveri njenu mogućnost prema gramatici i korpusu. Jasno razlikuj istorijski potvrđen oblik, praslovensku rekonstrukciju i projektnu rekonstrukciju.

## Ocena posle potpune popravke

Tek pošto je potpuna procedura za zadati obim završena, odmah ponovo oceni tog autora po postupku veštine `ocena-prevoda`. Upotrebi propisani uzorak za taj fajl, ali ga jasno odvoji od potpunog prolaska popravke: uzorak meri ocenu, a ne obim izvršene redakture. Ne ocenjuj ponovo ceo direktorijum samo zbog jedne popravke.

Ažuriraj samo kanonski izveštaj `docs/OCENA_PREVODA.md`: njegov red u tabeli i nalaze za tog autora, tako da nijedna prethodna ocena ne ostane zasnovana na staroj verziji prevoda. Ne stvaraj pojedinačni autorski izveštaj. U predaji navedi novu ocenu autora i da je kanonski izveštaj osvežen.

## Predaja

Kada korisnik traži samo redakturu teksta, prikaži oba dovršena oblika:

```text
stsl: <dorađeni staroslovenski prevod>
sr: <dorađeni srpski prevod>
```

Za izmenu fajlova kratko navedi da je ceo zadati obim pregledan, broj
pregledanih prevodivih jedinica, koje su jedinice izmenjene i da li su menjana
sidra. Ne predstavljaj posao kao završen ako ceo obim nije prošao punu
proceduru. Objasni samo stvarnu terminološku ili tekstualnu nedoumicu; ne
zatrpavaj korisnika beleškama o grafiji kada ona nije uticala na smisao, duh
ili lepotu prevoda.

Pre predaje poslednji put pročitaj oba prevoda naglas: najpre kao dve slovenske rečenice, pa uz grčki kao merilo. Ako se nešto ne može oduzeti bez gubitka misli, redaktura je završena.

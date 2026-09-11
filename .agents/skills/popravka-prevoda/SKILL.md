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

### 1. Najpre utvrdi grčku misao i granicu

- Pročitaj grčki odlomak i dovoljno susednog teksta da razrešiš negaciju, referencu, elipsu, argument, metaforu, opozicije, ponavljanja i korenske veze.
- Kod celog dela proveri i mesto kanonskog sidra prema izvorniku. Sidro sme stajati usred pasusa; ne zaključuj o njegovoj grešci samo iz teksta koji sledi posle oznake.
- Sažmi za sebe jezgro iskaza: ko šta tvrdi, kojim razlogom, uz koju ogradu i sa kojim pojmovnim razlikama. Tek onda menjaj prevode.

Ako je granica sidra očigledno pogrešna, odvoji taj nalaz od prevodne redakture. Za `data/works` koristi postupak i jednoznačne lokatore iz `docs/CELA_DELA.md`; fizičko pomeranje sidra ne sme menjati tekst prevoda.

### 2. Popravi staroslovenski neposredno prema grčkom

Staroslovenski oblikuj kao sažetu, prirodnu i lepu slovensku filozofsku misao VIII veka.

- Sačuvaj grčki argument, razlike i korenske veze koje nose misao.
- Klesanjem ukloni višak, teške kalke, nepotrebnu kopulu i grčki red reči kada guše slovenski udar.
- Prednost imaju kratke težinske celine, snažne imenice i glagoli, prirodan red reči i čestice samo kada nose odnos ili ritam.
- Rečničko rešenje primeni kada služi konkretnom iskazu; izaberi drugi istorijski moguć slovenski izraz kada je razumljiviji, lepši ili ritmički bolji.
- Grafiju i tehničke oblike proveri tek pošto su rešeni smisao, sažetost i ritam. Ne žrtvuj dobru rečenicu radi površinske arhaizacije.

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

## Redosled prioriteta i ekonomija dorade

Štednja tokena je radni prioritet, jer paralelni postupak treba da bude brži od dva odvojena čitanja. Ona ne opravdava preskakanje grčkog konteksta, provere značenja ili one jezičke provere koja je potrebna za novu staroslovensku tvorbu.

- Za jednu seriju odlomaka učitaj projektna merila jednom, a zatim čitaj samo lokalni kontekst svake naredne jedinice.
- Grčku analizu uradi jednom po jedinici i upotrebi je za oba prevoda; ne sastavljaj dva nezavisna sažetka istog grčkog iskaza.
- Susedne kratke jedinice obrađuj u jednoj radnoj celini kada dele argument ili pojmovnu porodicu, ali ne proširuj kontekst bez razloga.
- Ne pravi duple tabele, pune prepisе izvora ni izveštaj ako korisnik traži samo izmenu. Sačuvaj samo odluke koje će služiti sledećoj jedinici.
- Ako je jedinica već verna, prirodna i ritmična, zabeleži da nema izmene i pređi dalje.

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

## Predaja

Kada korisnik traži samo redakturu teksta, prikaži oba dovršena oblika:

```text
stsl: <dorađeni staroslovenski prevod>
sr: <dorađeni srpski prevod>
```

Za izmenu fajlova kratko navedi koje su jedinice izmenjene i da li su menjana sidra. Objasni samo stvarnu terminološku ili tekstualnu nedoumicu; ne zatrpavaj korisnika beleškama o grafiji kada ona nije uticala na smisao, duh ili lepotu prevoda.

Pre predaje poslednji put pročitaj oba prevoda naglas: najpre kao dve slovenske rečenice, pa uz grčki kao merilo. Ako se nešto ne može oduzeti bez gubitka misli, redaktura je završena.

---
name: klesanje-prevoda
description: Kleše postojeće filozofske prevode na projektni staroslovenski (`stsl`) i/ili srpski (`sr`): sažima ih, preoblikuje u kratke i prirodne iskaze, oslobađa teške sintakse i izoštrava ritam bez nove filološke redakture. Koristi ovu veštinu kad korisnik traži klesanje, sažimanje, zgusnuće, ritam, lepši tok ili oslobađanje postojećeg prevoda od viška, a smisao je već prihvaćen kao tačan.
---

# Klesanje postojećeg prevoda

Klesanje počinje od pretpostavke da prevod prenosi grčku misao. Njegov posao nije nova filološka redaktura ni provera svake grčke reči, nego da iz već tačnog teksta isklese kraći, neposredniji i lepši iskaz. To nije puko brisanje: ponekad rečenicu treba preurediti ili opisni oblik zameniti snažnijim, ali samo kada se 100% informacije očuva.

## Granica posla

Koristi ovu veštinu samo kada korisnik želi stilsku doradu postojećeg prevoda. Za grešku značenja, negaciju, argument, terminološku porodicu, gramatiku ili sidro upotrebi `popravka-prevoda` ili odgovarajuću jezičku prevodilačku veštinu.

Ne otvaraj grčki izvornik rutinski. Otvori ga samo ako predloženo skraćenje može izbaciti odnos čiji smisao nije siguran; tada ne prepravljaj taj deo bez jasnog razrešenja.

Kada su data oba prevoda, kleši ih svaki kao sopstveni jezik. Ne izvodi srpski iz `stsl`, niti nameći da budu isti po rečima ili dužini.

## Nepromenljiva granica

Klesanje sme menjati oblik, red reči, sažetost i ritam, ali ne i sadržaj. Sačuvaj 100% onoga što prevod kaže: tvrdnju, negaciju, ogradu, uzrok, uslov, vremenski odnos, lice, broj, vid, poređenje i ton koji nose značenje. Ako kraći oblik makar i nijansirano sužava, proširuje ili menja informaciju, nije klesanje nego nova redaktura.

## Merilo

Pre rada pročitaj `docs/KLESANJE_PREVODA.md`. Za staroslovenski zatim pročitaj `docs/PREVODJENJE_NA_STAROSLOVENSKI.md`, a za srpski `docs/PREVODJENJE_NA_SRPSKI.md`.

Najpre čitaj rečenicu naglas. Traži samo ovo:

1. reč, veznik, kopulu, zamenicu ili ponavljanje koje može nestati ili ustupiti mesto kraćem, življem obliku;
2. dugu ili grčki savijenu konstrukciju koja se može raspresti u kratke slovenske udare;
3. opisnost koju može preuzeti snažna imenica ili glagol;
4. slab red reči, ritam ili pauzu koji se mogu popraviti bez pomeranja smisla ili pojmovne mreže.

Prednost imaju oduzimanje, premeštanje i sažimanje. Kada to nije dovoljno, zameni opisni ili mlitavi oblik kraćim i jačim, ali samo zato što cela rečenica time postaje prirodnija i snažnija — ne zbog usamljenog sinonima koji izvan rečenice deluje lepše. Pre promene proveri da li novi oblik čuva svu informaciju, a ne samo opšti smisao.

Na primer, `Pukla mi je guma dok sam se vraćao sa posla.` može postati `Puče mi guma dok sam išao s posla.` Događaj i odnos vremena ostaju, ali izveštaj postaje neposredan udar.

## Šta ostaje netaknuto

Ne uklanjaj filozofsku razliku, terminološku porodicu, namerno ponavljanje, opoziciju, negaciju, ogradu, uzročni odnos ni dvosmislenost izvornika. Ako se nešto ne može oduzeti bez mogućeg gubitka misli, ostavi ga.

Ne menjaj `id`, metapodatke, HTML sidra, pokazivače ili generisane fajlove. U `data/works` sidro može stajati usred rečenice i nije razlog da se rečenica cepa.

## Potpuna procedura klesanja

Kada korisnik navede fajl, autora, delo ili drugu zbirku bez ograničavanja na
pojedinačne `id`-jeve, predmet klesanja je **ceo taj obim**. Utvrdi potpun niz
čitalačkih jedinica koje imaju `stsl` i/ili `sr`, pa ih obradi redom od početka
do kraja. Ne uzorkuj, ne staj posle nekoliko očiglednih mesta i ne izvodi
zaključak o celom fajlu iz reprezentativnih primera.

Za svaku jedinicu proveri oba prevoda kao samostalne rečenice:

1. odredi najjači udar iskaza;
2. ukloni samo dokazivi višak;
3. razbij tešku konstrukciju kada muti ritam, bez skraćivanja same misli;
4. pročitaj rezultat naglas i zadrži ga samo ako je kraći, jasniji ili
   ritmički jači uz potpuno očuvan sadržaj.

Po završetku prvog prolaska ponovo pročitaj ceo dorađeni obim, redom, u oba
jezika. Isklesaj sva preostala opravdana mesta i ponovi potpuni prolazak koliko
je potrebno. Posao je završen tek kada nijedna čitalačka jedinica ne ostane
neproverena, a u celom obimu više nema uklonjivog viška, teške sintakse ili
slabog ritma koji se može popraviti bez pomeranja smisla.

Dobra rečenica nije sirovina za stalno preoblikovanje: jedinicu koja već čuva
svu misao i ne dobija sažetošću, prirodnošću ili ritmom ostavi netaknutu. Ali
ne proglašavaj ceo prevod isklesanim samo zato što je nekoliko jedinica dobro
ili je ispravljeno nekoliko najočiglednijih mesta.

Pravila uzorkovanja iz `ocena-prevoda` važe samo za naknadnu ocenu kvaliteta;
nikada ne određuju koje će jedinice biti pročitane ili isklesane.

## Predaja

Kada se tekst menja, prikaži samo dovršene oblike:

```text
stsl: <isklesani oblik>
sr: <isklesani oblik>
```

Za izmenu fajlova kratko navedi da je ceo zadati obim pregledan, broj
pregledanih prevodivih jedinica i čitalačke jedinice koje su isklesane. Ne
pravi izveštaj o bezbroj mogućih varijanti i ne predstavljaj posao kao završen
ako ceo obim nije prošao potpunu proceduru.

## Ocena posle klesanja

Kada je klesanje sačuvano u autorskom fajlu, odmah ažuriraj ocenu tog autora
prema veštini `ocena-prevoda`. Uzorak mora obavezno uključiti isklesane
jedinice, ali za autora sa više od 10 prioritetnih `quote`/`reported` unosa
ostaje propisani uzorak, a ne ceo fajl.

Ažuriraj samo autorov red i nalaze u kanonskom izveštaju
`docs/OCENA_PREVODA.md`. Ne stvaraj pojedinačni Markdown izveštaj.
Ako provera otkrije sadržajni pomak, zabeleži ga kao nalaz i ne prepravljaj
prevod bez posebne komande za `popravka-prevoda`.

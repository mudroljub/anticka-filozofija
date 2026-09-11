---
name: klesanje-prevoda
description: Kleše postojeće filozofske prevode na projektni staroslovenski (`stsl`) i/ili srpski (`sr`): sažima ih, oslobađa teške sintakse i izoštrava ritam bez ponovnog prevođenja ili zamene već valjanih reči sinonimima. Koristi ovu veštinu kad korisnik traži klesanje, sažimanje, zgusnuće, ritam, lepši tok ili oslobađanje postojećeg prevoda od viška, a smisao je već prihvaćen kao tačan.
---

# Klesanje postojećeg prevoda

Klesanje počinje od pretpostavke da prevod prenosi grčku misao. Njegov posao nije nova filološka redaktura, provera svake grčke reči ni potraga za lepšim sinonimima, nego da iz već tačnog teksta ukloni ono što mu ne služi.

## Granica posla

Koristi ovu veštinu samo kada korisnik želi stilsku doradu postojećeg prevoda. Za grešku značenja, negaciju, argument, terminološku porodicu, gramatiku ili sidro upotrebi `popravka-prevoda` ili odgovarajuću jezičku prevodilačku veštinu.

Ne otvaraj grčki izvornik rutinski. Otvori ga samo ako predloženo skraćenje može izbaciti odnos čiji smisao nije siguran; tada ne prepravljaj taj deo bez jasnog razrešenja.

Kada su data oba prevoda, kleši ih svaki kao sopstveni jezik. Ne izvodi srpski iz `stsl`, niti nameći da budu isti po rečima ili dužini.

## Merilo

Pre rada pročitaj `docs/KLESANJE_PREVODA.md`. Za staroslovenski zatim pročitaj `docs/PREVODJENJE_NA_STAROSLOVENSKI.md`, a za srpski `docs/PREVODJENJE_NA_SRPSKI.md`.

Najpre čitaj rečenicu naglas. Traži samo ovo:

1. reč, veznik, kopulu, zamenicu ili ponavljanje koje može nestati;
2. dugu ili grčki savijenu konstrukciju koja se može raspresti u kratke slovenske udare;
3. opisnost koju može preuzeti snažna imenica ili glagol iz postojećeg izraza;
4. slab red reči, ritam ili pauzu koji se mogu popraviti bez izmene rečnika misli.

Prednost imaju oduzimanje, premeštanje i sažimanje. Ne menjaj ispravnu reč samo zato što postoji drugi sinonim, čak ni ako deluje modernije, arhaičnije ili lepše izvan rečenice.

## Šta ostaje netaknuto

Ne uklanjaj filozofsku razliku, terminološku porodicu, namerno ponavljanje, opoziciju, negaciju, ogradu, uzročni odnos ni dvosmislenost izvornika. Ako se nešto ne može oduzeti bez mogućeg gubitka misli, ostavi ga.

Ne menjaj `id`, metapodatke, HTML sidra, pokazivače ili generisane fajlove. U `data/works` sidro može stajati usred rečenice i nije razlog da se rečenica cepa.

## Postupak

1. Obeleži jednu čitalačku celinu i odredi njen najjači udar.
2. Ukloni samo dokazivi višak.
3. Razbij tešku konstrukciju ako ona muti ritam; ne skraćuj samu misao.
4. Pročitaj novu verziju naglas. Ako nije kraća, jasnija ili ritmički jača, vrati je.
5. Kada klesanje više ništa ne dobija, stani. Dobra rečenica nije sirovina za stalno preoblikovanje.

## Predaja

Kada se tekst menja, prikaži samo dovršene oblike:

```text
stsl: <isklesani oblik>
sr: <isklesani oblik>
```

Za izmenu fajlova kratko navedi čitalačke jedinice koje su isklesane. Ne pravi izveštaj o bezbroj mogućih varijanti.

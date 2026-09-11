---
name: srpski-filozofski-prevod
description: Prevod i redaktura starogrčkih filozofskih tekstova na projektni srpski jezik (polje `sr`). Koristi ovu veštinu kad god korisnik traži srpski prevod, proveru ili doradu grčkih filozofskih izreka, dijaloga, pisama, odlomaka, citata ili unosa u ovom projektu. Srpski prevod gradi neposredno iz grčkog, a staroslovenski koristi kao stilski oslonac za sažet, blago uzvišen i organski slovenski izraz.
---

# Prevod starogrčke filozofije na srpski

Napiši živ, razumljiv i prirodan književni srpski koji neposredno prenosi grčku misao. Neka deluje kao da je tokom vekova organski izrastao iz staroslovenskog prevoda: sažet, ritmičan i blago uzvišen, ali bez ukrasne arhaizacije.

Ovo je projektna književna pretpostavka, ne istorijska tvrdnja da savremeni srpski genetski potiče od staroslovenskog.

## Učitaj odgovarajuće projektne dokumente

Pre rada pročitaj `docs/PREVODJENJE_NA_SRPSKI.md` i `docs/KLESANJE_PREVODA.md`.

Po potrebi učitaj:

- `docs/RECNIK.md` kao orijentir za ranije istražena rešenja i porodice reči;
- `docs/PREVODJENJE_NA_STAROSLOVENSKI.md` kada postoji prateći `stsl` prevod ili kada se traži zajedničko oblikovanje oba prevoda;
- `docs/GRAMATIKA.md` i `docs/KORPUS.md` kada se proverava ili oblikuje prateći staroslovenski izraz;
- `docs/PODELA_UNOSA.md`, `docs/DATIRANJE.md`, `docs/IDENTIFIKATOR.md`, `docs/POINTER_FORMAT.md` i `docs/CELA_DELA.md` kada se uređuju projektni podaci ili celovita dela.

## Načelo izvora

Grčki izvornik je jedino merilo značenja. Čitaj ceo odlomak i dovoljno konteksta da razrešiš referencu, elipsu, negaciju, ironiju, logički odnos, ključne pojmove, suprotnosti i namerna ponavljanja.

`stsl` nije međukorak i iz njega ne izvodiš srpsko značenje. Oba prevoda neposredno odgovaraju grčkom. Staroslovenski koristi samo da osvetli slovenski ritam, zbijenost, red reči, slike, snažne imenice i glagole, štedljivu kopulu, te nenametljivu arhaičnost.

`RECNIK.md` nije mapa za pretragu-zamenu. Upotrebi rečnički izraz kada prirodno služi misli. Kada je u konkretnom odlomku nejasan, težak ili ritmički loš, izaberi prirodniji srpski izraz koji ne briše filozofsku razliku izvornika. Korenske veze čuvaj kada one nose argument, a ne radi formalne simetrije.

## Oblikuj prevod

- Prevedi grčki smisao neposredno na srpski; ne preslikavaj mehanički ni grčku ni staroslovensku sintaksu.
- Traži kratke celine, neposredne iskaze, proste i snažne reči, prirodan red reči i jasne pauze.
- Kada odgovara, upotrebi particip umesto teške odnosne rečenice, infinitiv umesto `da + prezent`, a aorist za svršenu pripovednu radnju.
- Izostavi nepotreban glagol „biti”, zamenicu, veznik i opisni izraz, ali sačuvaj svaku reč, suprotnost ili paralelizam koji pripada izvornoj misli.
- Ne piši savremeno samo zato što je poznatije, ali ni arhaično samo da bi zvučalo staro. Traži blag, organski književni ton.
- Pojmove poput `vreme`, `bog`, `slučaj` i `nužda` ne piši velikim slovom osim na početku rečenice.

## Iskleši tekst

Posle prvog tačnog prevoda:

1. skrati reči i izraze samo dok značenje ostaje celo;
2. ukloni višak;
3. razbij tešku grčku konstrukciju u prirodan srpski iskaz;
4. vrati pojmovne razlike, etimološke veze, igre reči i ponavljanja koji nose misao;
5. pročitaj naglas i dotegni ritam.

Prevod je gotov kada se više ništa ne može oduzeti bez gubitka misli, a rečenica i dalje zvuči kao sopstveni, razumljiv srpski književni jezik.

## Rad u projektnim podacima

- Menjaj samo tražena izvorna polja; ne uređuj generisane fajlove niti ručno upisuj generisani `pointer`.
- U `data/quotes` očuvaj trajni `id`; datiranje se dodaje samo za `bio` i `anecdote`.
- U `data/works` čuvaj `work.json`, kanonska sidra i granice odeljaka; ne cepaj pasus samo zbog sidra.

## Predaja i provera

Ako korisnik nije odredio format, vrati:

```text
sr: <prevedeni tekst>
```

Dodaj kratku belešku samo za stvarnu višeznačnost izvornika, novu projektnu rekonstrukciju ili terminološku odluku koja bi mogla imati širi značaj.

Pre isporuke proveri: da li srpski neposredno i potpuno prenosi grčki; da li `stsl` služi samo kao stil; da li su važne pojmovne veze očuvane; da li je prevod sažet, ritmičan, blago uzvišen, razumljiv i prirodan; i da li bez veštačkog arhaiziranja deluje kao da je organski izrastao iz staroslovenskog.

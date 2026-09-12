---
name: datiranje
description: Dodeljuje ili proverava polje `year` u biografskim i anegdotskim unosima projekta, prema `docs/DATIRANJE.md`, životnom opsegu autora i istorijskoj hronologiji. Koristi kada korisnik traži datiranje, hronologiju, vremensku liniju, proveru godina ili raspored biografskih događaja u `data/quotes`.
---

# Datiranje unosa

Godina je prvenstveno tačka za smislen redosled na vremenskoj liniji, a ne tvrdnja o lažno tačnom istorijskom datumu. Dodeli najprikladniju i istorijski moguću godinu; u prevodu po potrebi zadrži ili dodaj ogradu poput „oko“ samo kada je procena zaista približna.

Pre rada pročitaj `docs/DATIRANJE.md` u celini. Za unos proveri njegov `type`, autora i opseg `born`/`died` u `data/authors.json`, zatim redosled susednih događaja i izvorni tekst.

## Koji unosi se datiraju

- Svaki `bio` i `anecdote` mora imati `year`.
- `quote`, `reported` i `works` nemaju polje `year`; nemoj ga dodavati.
- Druge tipove ne datiraj bez izričite projektne norme ili korisnikovog zahteva.

Godina `bio` ili `anecdote` unosa u pravilu mora ležati u opsegu života autora iz `data/authors.json`. Dopušten je izlazak iz tog opsega samo ako je stvarni nosilac događaja autorov predak ili potomak, ili je događaj očigledno posthuman; zabeleži razlog uz predaju.

## Kako proceniti godinu

Najpre učvrsti poznate istorijske oslonce — vladare, ratove, olimpijade, službe, putovanja i druge datirane događaje. Zatim smesti preostale unose prema uzrastu, uzroku i posledici, trajanju događaja i prirodnom toku života: rano doba, mladost, zrelost, rad i smrt.

Kada postoje dve jednako razumne približne godine, upotrebi njihovu sredinu samo ako ona ostaje istorijski moguća i ne stvara novu hronološku teškoću. Ne pretvaraj nespojiva predanja u prividnu preciznost srednjom godinom.

Za događaj koji traje više godina izaberi tačku najkorisniju za njegovo mesto na vremenskoj liniji — često početak, završetak ili sredinu, prema tome šta unos kaže. Veliki vremenski skok treba da ostavi vidljivu prazninu u nizu godina. Mitsko ili legendarno trajanje ne tumači doslovno: dodeli razumnu godinu za redosled.

## Celi brojevi i decimale

Koristi celu godinu po pravilu. Decimalu upotrebi samo za više tesno vezanih, zasebnih koraka čiji je red poznat unutar iste godine, na primer poziv → dolazak → obred → ishod. Decimalni deo označava redosled, ne mesec ili precizan datum.

Ne koristi decimale samo zato što je jedna priča razlomljena na više unosa. Nepovezane događaje rasporedi celim godinama prema životnom toku.

## Izmena i provera

Menjaj samo `year` polja unosa obuhvaćenih zahtevom; ne menjaj `id`, prevode, izvornik, pokazivače ni druge metapodatke. Ne datiraj generisani fajl ako postoji izvorni fajl.

Pre predaje proveri:

- svaki obavezni tip ima godinu, a zabranjeni tip nema;
- godine su u životnom opsegu ili je izuzetak obrazložen;
- redosled unosa odgovara poznatim događajima i međusobnim uzrocima;
- decimale označavaju samo stvarnu, blisku sekvencu;
- JSON se i dalje može učitati.

Za izmenu fajla kratko navedi koje su jedinice datirane, koje su godine procenjene i postoje li opravdani izuzeci. Kada korisnik traži samo proveru, ne menjaj podatke: prijavi tačne unose koji krše pravila i razlog.

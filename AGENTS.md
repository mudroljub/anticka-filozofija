# Uputstvo za agente

Zavisno od zadatka koristi:

* `docs/RECNIK.md` — terminološki orijentir i zbirka ranije istraženih rešenja
* `docs/GRAMATIKA.md` — gramatika i normativna pravila rekonstruisanog slovenskog jezika
* `docs/PREVODJENJE_NA_STAROSLOVENSKI.md` — pravila rekonstrukcije i staroslovenskog prevoda
* `docs/PREVODJENJE_NA_SRPSKI.md` — pravila srpskog prevoda
* `docs/KORPUS.md` — sastav i hijerarhija istorijskog korpusa
* `docs/PODELA_UNOSA.md` — podela i atomizacija unosa
* `docs/CELA_DELA.md` — format čitavih knjiga, dijaloga i pisama
* `docs/DATIRANJE.md` — pravila datiranja unosa
* `docs/IDENTIFIKATOR.md` — format i dodela identifikatora
* `docs/POINTER_FORMAT.md` — format pokazivača na izvore
* `docs/KLESANJE_PREVODA.md` — sažimanje prevoda bez gubitka sadržaja

## Osnovna pravila

`docs/RECNIK.md` je važan terminološki orijentir, ne obavezna mapa za doslovno prevođenje.

Najpre ga proveri da razumeš postojeća rešenja i porodice reči, ali ne radi pretragu-zamenu grčkih pojmova. U konkretnom odlomku slobodno izaberi prirodniji, razumljiviji i lepši slovenski izraz kada rečnički oblik ne služi punom smislu, ritmu ili duhu prevoda. Ne menjaj sam rečnički unos bez izričitog zahteva; odstupanje u prevodu nije promena rečnika.

Cilj staroslovenskog prevoda nije ograničavanje na reči neposredno potvrđene u sačuvanim spomenicima, već rekonstrukcija autentičnog i istorijski mogućeg slovenskog filozofskog jezika VIII veka.

Istorijska potvrđenost je prednost, ali nije uslov za upotrebu reči.

Kod istraživanja novih termina koristi naročito:

1. `docs/RECNIK.md` i već izgrađene porodice termina;
2. istorijski slovenski korpus opisan u `docs/KORPUS.md`;
3. Wiktionary — Proto-Slavic lemmas:
   https://en.wiktionary.org/wiki/Category:Proto-Slavic_lemmas
4. praslovenske korene, rekonstruisane oblike i etimologiju;
5. istorijski moguće slovenske tvorbene obrasce;
6. kasnije slovenske jezike i izvore kao pomoćni komparativni materijal.

Rekonstruisana praslovenska reč ili koren predstavlja važnu pozitivnu evidenciju čak i kada odgovarajući oblik nije neposredno potvrđen u staroslovenskom korpusu.

Odsustvo reči iz sačuvanog korpusa ne znači da je ona istorijski nemoguća.

Pri rekonstrukciji novog termina proveri:

* da li postoji odgovarajući praslovenski koren;
* njegovo osnovno i izvedeno značenje;
* porodicu srodnih slovenskih reči;
* istorijske tvorbene obrasce;
* fonološku i morfološku mogućnost oblika;
* analogne oblike u istorijskom korpusu;
* odnos prema postojećim terminološkim porodicama iz `docs/RECNIK.md`.

Prednost ima rešenje koje potpuno prenosi grčku misao, zvuči kao živa slovenska rečenica, sažeto je i lepo, a zatim je istorijski moguće i po potrebi povezano sa ostalim terminima projekta.

Čuvaj porodice reči kada su bitne za misao: isti grčki koren, gde značenje i prirodan izraz to dopuštaju, može predstavljati isti slovenski koren.

Korpus koristi za proveru stvarne istorijske upotrebe, morfologije, sintakse, značenja, tvorbenih obrazaca i autentičnosti jezika. Ne koristi ga kao zatvoren spisak dozvoljenih reči.

Ako tvrdiš da je određeni oblik istorijski potvrđen, potvrdi ga u korpusu ili drugom istorijskom izvoru. Jasno razlikuj:

* istorijski potvrđen oblik;
* rekonstruisan praslovenski oblik;
* projektnu rekonstrukciju.

Za gramatičke oblike i konstrukcije poštuj `docs/GRAMATIKA.md`. Ako gramatika još ne propisuje konkretan slučaj, istraži istorijski korpus i praslovenski sistem pre donošenja nove projektne norme.

Ne menjaj generisane fajlove ako postoji izvorni fajl iz kojeg se generišu.

## Dozvole i Git

Sve bezbedne radnje u okviru ovog projekta — čitanje, pretraga, izmene izvornih
fajlova, pokretanje lokalnih alata, provera tipova, testovi i build — izvršavaj
bez prethodnog traženja dozvole kada su potrebne za korisnikov zahtev.

Ne pokreći nijednu `git` komandu. Zabrana važi i za komande koje samo čitaju
stanje repozitorijuma, kao što su `git status`, `git diff`, `git log` i
`git show`, kao i za sve komande koje menjaju repozitorijum ili komuniciraju sa
udaljenim repozitorijumom. Ne traži odobrenje za Git: koristi druge alate za
čitanje i proveru fajlova, a radnje koje zahtevaju Git prepusti korisniku.

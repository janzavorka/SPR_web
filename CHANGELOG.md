# Changelog
All notable changes to this project will be documented in this file.
### 03.05.2020
> Jan Závorka
- Přidány infromace k 7. ročníku (2020)
  - Úprava html stránek
  - Přidán plakát, leták, .ics záznam
------------------------------------------------------------------

### 30.06.2019
> Jan Závorka
- Přidány fotografie a výsledková listina z 6. ročníku (2019)
- Upraveny dílčí .html soubory
------------------------------------------------------------------

### 28.06.2019
> Jan Závorka
- Přidán soubor _analyzaTOPlist.js_ pro počítání návštěvníků
- Oproti Google analytics poskytuje méně informací, ale pro spuštění skriptu není potřeba souhlas z cookie lišty
------------------------------------------------------------------

### 23.03.2019
> Jan Závorka
- Nahrány informace o nové (6) ročníku:
  - změna času, startuje se v 11:00
  - Upraven plakát a leták a .ics souboru
  - Upravena stránka _letos_ a _letos_nahrada_
  - Přidáno _foto\_2019.html_ a příslušný soubor pro komentáře
------------------------------------------------------------------

### 22.01.2019
> Jan Závorka
- Kontaktní formulář - php skript:
  - opraveny chyb dle issue [#9](https://github.com/janzavorka/SPR_web/issues/9) :
    - v php skriptu se přímo ověřuje emailová adresa podle filtru
    - použití funkce ```mb_send_mail ($to, $subject, $mess, $extra); ```, správně zobrazuje českou diakritiku
    - opraveny hlášky při neplatném emailu/zprávě
------------------------------------------------------------------

### 18.01.2019
> Jan Závorka
- Úprava kontaktního formuláře:
  - Ověření správnosti tvaru emailové adresy (javascript)
  - Ověření zda zpráva není prázdná
  - Vypisují se chybové hlášky (vůbec se nezavolá php script)
  - Antibot (pomocí neviditelného pole)
  - Přesun obou scriptů do složky "contactForm"
  - Drobné úpravy PHP scriptu:
    - Při odeslání se jen ověřuje, že vstupní pole jsou neprázdná (prázdné pro antibota)
    - Ověření odeslání mailu (návratová hodnota mail())
    - Přesměrování po odeslání i se správným kódem
------------------------------------------------------------------

### 11.01.2019
> Jan Závorka
- Úprava galerie:
    - Loadovací symbol při načítání fotografie
    - Upraveno vkládání chybové hlášky při nenalezení fotografie (nyní nerozbíjí HTML)
- Přesunutí funkce pro vkládání externího html/textu do stránky do _tools.js_ (pro budoucí použití)
- Úprava analýzy návštěvnosti:
    - Zrušení analýzy pomocí toplist.cz, zůstává pouze Google analytics
    - Úprava cookie lišty: funkce pro analýzu návštěvnosti je volána až když uživatel odsouhlasí používání cookie (viz. _EUCookie.js_) tj. pokud uživatel neposkytl souhlas, analýza se neporvede
    - původní soubor pro analýzu _analyza.js_ je nyní zbytečný, úplně odstraněn
------------------------------------------------------------------

### 08.01.2019
> Jan Závorka
- Změna defaultní _branch_ na githubu, aktuálně použito a defaultně nastaveno na _main_, _master_ byl smazán, mělo by se tím zabránit indexování a zobrazování repozitáře při vyhledávání googlem !!!
------------------------------------------------------------------

### 05.01.2019
> Jan Závorka
- Úprava informačního textu při nenačtení fotografie ve fotogalerii
------------------------------------------------------------------

### 02.01.2019
> Jan Závorka
- Přidáno 2014.sprwd testovací databáze pro prezentaci výsledků na webu
------------------------------------------------------------------
### 27.12.2018
> Jan Závorka
- Úprava fotogalerie
  - oprava hlášení, že obrázek nebyl nalezen (nyní správně uprostřed)
- Návod na aktivaci JavaScriptu (```enable_javascript.html```)
- Odkaz na návod v jednotlivých galeriích (pokud od nich uživatel vstoupí s vypnutým JS)
- Úprava formátu číslovaných seznamů (v _Styles.css_)
- Přidáno _humans.txt_ (dle http://humanstxt.org/)
- Oprava formátování kódu u dalších stránek
- Oprava souboru _robots.txt_
- Přidání meta ```<meta name="robots" content="noindex"/>``` do stránek, které se nemají indexovat
------------------------------------------------------------------
### 26.12.2018
> Jan Závorka
- Úprava fotogalerie
  - úprava cursoru na miniaturách na _pointer_
  - změna _opacity_ při najetí na obrázek
  - import komentářů k fotkám - správné zobrazení hlášky, když soubor nebyl nalezen (hláška se běžně nezobrazuje)
  - přidání funkce pro zobrazování obrázků jiných formátů (.gif, .png), defaultně .jpg, poté se zkouší další vybrané koncovky, pak zobrazí chybu, že obrázek nebyl nalezen (využito _onerror_ u _<img>_)
------------------------------------------------------------------
### 08.10.2018
> Jan Závorka
- Úprava stránek 'letos' a letos_informace' pro 6. ročník
- Změna jmen souboru (aby se zobrazovaly všechyn informace, ne jen náhradní stránka) letos -> letos\_nahrada; letos\_infromace -> letos
- Úprava v souboru 'stahnout' - oprava jména staženého letáku z "Sprint\_proti\_radaru-plakat" na "Sprint\_proti\_radaru-letak"
- Příprava správného .ics souboru pro 6. ročník
- Změna ikony stránky 'favico.ico', použit běžec z hlavičky - vypadá to lépe
- Opraven bug se špatným náhledem webu na Facebooku
	- přidán meta ```<meta property="og:image" content="img/logo_FB.png">```
	- nyní se zobrazuje logo se zeleným pozadí
- Na hlavní stránce 'index.html' změna datumu na 30.6.2019
- Aktualizováno logo (použito, to co je na webu) v náhradních stránkách ve složce 'web under construction'
------------------------------------------------------------------
### 01.07.2018
> Jan Závorka
- Úprava všech odkazů na hotel Králíček na novou adresu www.hotel-kralicek.cz
- Nahrání materiálnů z 5. ročníku (2018):
  - fotografie
  - výsledková listina
  - úprava stránek: umisteni, index, galerie, letos
------------------------------------------------------------------
### 29.06.2018
> Jan Závorka
- Úprava fotogalerie:
  - lepší pozicování šipek pro změnu miniatur
  - počet miniatur se řídí šířkou stránky
  - galerie lépe zobrazuje obrázky s vyšším rozlišením
  - pokudje zobrazena fotografie, která má komentář, jen komentář vepsán do atributu _alt_ (defaultně _alt_ nastavený na "Sprint proti radaru 20xx")
  - úprava tlačítka pro skrytí miniatur pro Firefox - definování velikosti apod. pro FF v .css souboru
- Pro všechny ročníky (2014, 2015, 2016, 2017) zkoprimovány miniatury pomocí 'Trimage image compressor' - velikost nižší o asi 60% (bez vizuálního rozdílu)
------------------------------------------------------------------
### 24.06.2018
> Jan Závorka
- Oprava popisů a nadpisů stránek s popisy obrázků pro galerii
- Pomocí meta zakázáno indexovat stránky "poodeslanifail.html" a "poodeslaniok.html"
- Oprava velikosti ikony pro skrytí miniatur v galerii (globálně)
------------------------------------------------------------------
### 23.06.2018
> Jan Závorka
- Opraven popis stránky "konkatky.html"
- V galeriích async načítání scriptu pro klávesové zkratky
------------------------------------------------------------------
### 17.06.2018
> Jan Závorka
- Oprava stahování fotek pomocí tlačítka v galerii, nyní se již správně přidává přípona \*.jpg
------------------------------------------------------------------
### 01.06.2018
> Jan Závorka
- Úprava cookie lišty, nyní se nahrává ze souboru přímo na serveru ('CookieCZ.js'), autor lišty vývoj ukončil
------------------------------------------------------------------
### 27.05.2018
> Jan Závorka
- Přidání klávesy 'escape' k zavření galerie
- Nahrány aktuální verze plakátu a letáku
------------------------------------------------------------------
### 09.05.2018
> Jan Závorka
- Nahrána nová, zrekonstruovaná verze webu ze subdomény "test1" na hlavní doménu (autor Martin Plaček)
- Nahrána aktualizovaná fotogalerie
------------------------------------------------------------------
### 02.04.2018
> Martin Plaček
- Alternativni verze webu na subdomene test1
- Kompletní rekonstrukce webu
------------------------------------------------------------------
### 29.03.2018
> Jan Závorka
- Změna kódovaní celého webu z windows-1250 na utf-8
- Úprava souboru robots.txt desktop. verze: nyní prohledává obrázky galerie
- Desktopová verze: přidání skriptu pro posun fotografií v galerii pomocí šipek (foto_posun.js)
------------------------------------------------------------------
### 28.03.2018
> Jan Závorka
- Kontrola a úprava chybně otočených obrázků v galerii
------------------------------------------------------------------
### 27.03.2018
> Jan Závorka
- Opraveno na stránce LETOS (mobilní verze) slovo prezentace na prezence
- Přidán soubor robots.txt (zabrání indexování obrázků ve složce img)
- Zakázaní indexování pomocí meta pro sránky 'po odeslání' mobilní i desktopová verze
- Zákaz indexování mobilní verze + přidaný skript na každou stránku v menu, který přesměruje uživatele na mobilní verzi
- Opravena chyba v názvu stahovaného .ics souboru (nyní již správně v názvu rok 2018) pro obě verze
------------------------------------------------------------------
### 25.03.2018
> Jan Závorka
- Přidána informační lišta o cookies (web používá cookies) pro desktopovou i mobilní verzi
- Na stránku letos přidáno tlačítko ke stažení souboru .ics (kalendář) desktopová i mobilní verze
------------------------------------------------------------------
### 17.09.2017
> Jan Závorka
- Nahrány informace pro 5. ročník (mobilní i desktopová verze)
- Aktualyzován plakát a leták
------------------------------------------------------------------
### 08.07.2017
> Jan Závorka
- Úprava zdrojáků a zprovoznění analýzy návštěvnosti pomocí google analytics a toplist.cz
------------------------------------------------------------------
### 02.07.2017
> Jan Závorka
- Náhraní výsledků a fotek z letošního ročníku (2017)
------------------------------------------------------------------
### 01.07.2017
> Jan Závorka
- Úprav stránek galerie z každého ročníku (pouze úprava kódu)
------------------------------------------------------------------
### 29.03.2017
> Jan Závorka
- Opraveno tlačítko s tiskárnou pro zobrazení Letáku (špatně nahraný soubor Styles.css)
------------------------------------------------------------------
### 28.03.2017
> Jan Závorka
- Upraveny informace o rozdělování cen
- Přidán leták (na desktopu dostupný přes tlačítko s tiskárnou, na mobilní verzi odkaz)
------------------------------------------------------------------
### 16.03.2017
> Jan Závorka
- Upraven čas konce a startu závodu (plakát a info na webu)
------------------------------------------------------------------
### 09.07.2016
> Jan Závorka
- Narány fotografie pro desktop
- Úprava souborů s foto_2016.html
------------------------------------------------------------------
### 03.07.2016
- Nahrány výsledky a fotografie + miniatury (foto pouze pro mobilní verzi, desktopová přesměrována na mob.)
- Aktualizace souborů spojených s nahráním fotografií a výsledků
------------------------------------------------------------------
### 25.05.2016
> Jan Závorka
- Komprese obrázku pozadí a úvodní fotky
------------------------------------------------------------------
### 24.05.2016
> Jan Závorka
- Úprava mobilní verze webu (odebrán pravý sloupec, místo něho další záložka)
- Úprava chyb webu (zobrazování), přidán odkaz ke stažení plakátu
- Úprava mobilní verze, zvětšeny tlačítka v menu, úprava textu,odkazů
- Přidán znak Kacanov v záležce Partneři v mobilní verzi
- Mobilní verze: úprava tlačítek v galeriích
- Desktopová verze: znak obce Kacanovy, úprava vzhledu, úprava menu
- Úprava tlačítek ve fotogalerii: načítání z Styles.css
- Opravena fotka 2015_33
------------------------------------------------------------------
### 04.10.2015
> Jan Závorka
- Přidány inforormace o aktuálním (3.ročnku)
------------------------------------------------------------------
### 18.07.2015
> Jan Závorka
- Úprava vkládání partnerů: partneri.js, vložení do dokumentu pomocí scriptu (jen desktopová verze)
------------------------------------------------------------------
### 14.07.2015
> Jan Závorka
- Nahrány fotografie 2015
- Přidána galerie 2015
------------------------------------------------------------------
### 12.07.2015
> Jan Závorka
- Nahrána skutečná výsledková listina 2015
- Přidána favicon
------------------------------------------------------------------
### 11.07.2015
> Jan Závorka
- Změna úvodního textu a informací (letošní rořník)
- Přidání výsledků a gelerie pro rok 2015 (náhradní)
- Přidán soubor pro ověření od Google
------------------------------------------------------------------
### 29.06.2015
> Jan Závorka
- Přidání souboru styles.css: změna barvy tlačítka po najetí myší
------------------------------------------------------------------
### 28.06.2015
> Jan Závorka
- K informacím přidána mapa konání závodu
- Úprava odkazů: po najetí myší mění barvu/velikost, pomocí css
------------------------------------------------------------------
### 26.06.2015
> Jan Závorka
- Úprava v sekci partneři, odkaz na partnery se nyní otevírá v novém okně
------------------------------------------------------------------
### 24.06.2015
> Kamil Závorka
- Přidání popisků k fotkám
------------------------------------------------------------------
### 23.06.2015
> Kamil Závorka
- Upraven pravý sloupec s obsahem partneři(sloupec je po celé délce)
- Změna fotek v galerii dle pokynů V. Plačka
------------------------------------------------------------------
### 22.06.2015
> Jan Závorka
- Změna fontů, barev, pozadí, použit soubor textstyle.css
- Upraven úvodní text
------------------------------------------------------------------
### 21.06.2015
> Jan Závorka
- Změna úvodního obrázku: zmenšení rozlišení (dlouhé načítání)
------------------------------------------------------------------
### 20.06.2015
> Jan Závorka
- Na stránce "foto_2014" opraven pravý sloupec (partneři)
------------------------------------------------------------------
### 18.06.2015
> Jan Závorka
- Web oficiálně spuštěn

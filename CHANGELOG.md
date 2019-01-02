# Changelog
All notable changes to this project will be documented in this file.

### 02.01.2019
> Jan Z�vorka
- P�id�na testovac� datab�ze 2014.sprwd s v�sledky z�vod�
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
- Oprava stahování fotek pomocí tlačítka v galerii, nyní se již správně přidává přípona *.jpg
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

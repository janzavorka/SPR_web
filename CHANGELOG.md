# Changelog
All notable changes to this project will be documented in this file.

### 02.01.2019
> Jan Závorka
- Přidána testovací databáze 2014.sprwd s výsledky závodu
------------------------------------------------------------------
### 27.12.2018
> Jan ZĂˇvorka
- Ăšprava fotogalerie
  - oprava hlĂˇĹˇenĂ­, Ĺľe obrĂˇzek nebyl nalezen (nynĂ­ sprĂˇvnÄ› uprostĹ™ed)
- NĂˇvod na aktivaci JavaScriptu (```enable_javascript.html```)
- Odkaz na nĂˇvod v jednotlivĂ˝ch galeriĂ­ch (pokud od nich uĹľivatel vstoupĂ­ s vypnutĂ˝m JS)
- Ăšprava formĂˇtu ÄŤĂ­slovanĂ˝ch seznamĹŻ (v _Styles.css_)
- PĹ™idĂˇno _humans.txt_ (dle http://humanstxt.org/)
- Oprava formĂˇtovĂˇnĂ­ kĂłdu u dalĹˇĂ­ch strĂˇnek
- Oprava souboru _robots.txt_
- PĹ™idĂˇnĂ­ meta ```<meta name="robots" content="noindex"/>``` do strĂˇnek, kterĂ© se nemajĂ­ indexovat
------------------------------------------------------------------
### 26.12.2018
> Jan ZĂˇvorka
- Ăšprava fotogalerie
  - Ăşprava cursoru na miniaturĂˇch na _pointer_
  - zmÄ›na _opacity_ pĹ™i najetĂ­ na obrĂˇzek
  - import komentĂˇĹ™ĹŻ k fotkĂˇm - sprĂˇvnĂ© zobrazenĂ­ hlĂˇĹˇky, kdyĹľ soubor nebyl nalezen (hlĂˇĹˇka se bÄ›ĹľnÄ› nezobrazuje)
  - pĹ™idĂˇnĂ­ funkce pro zobrazovĂˇnĂ­ obrĂˇzkĹŻ jinĂ˝ch formĂˇtĹŻ (.gif, .png), defaultnÄ› .jpg, potĂ© se zkouĹˇĂ­ dalĹˇĂ­ vybranĂ© koncovky, pak zobrazĂ­ chybu, Ĺľe obrĂˇzek nebyl nalezen (vyuĹľito _onerror_ u _<img>_)
------------------------------------------------------------------
### 08.10.2018
> Jan ZĂˇvorka
- Ăšprava strĂˇnek 'letos' a letos_informace' pro 6. roÄŤnĂ­k
- ZmÄ›na jmen souboru (aby se zobrazovaly vĹˇechyn informace, ne jen nĂˇhradnĂ­ strĂˇnka) letos -> letos\_nahrada; letos\_infromace -> letos
- Ăšprava v souboru 'stahnout' - oprava jmĂ©na staĹľenĂ©ho letĂˇku z "Sprint\_proti\_radaru-plakat" na "Sprint\_proti\_radaru-letak"
- PĹ™Ă­prava sprĂˇvnĂ©ho .ics souboru pro 6. roÄŤnĂ­k
- ZmÄ›na ikony strĂˇnky 'favico.ico', pouĹľit bÄ›Ĺľec z hlaviÄŤky - vypadĂˇ to lĂ©pe
- Opraven bug se ĹˇpatnĂ˝m nĂˇhledem webu na Facebooku
	- pĹ™idĂˇn meta ```<meta property="og:image" content="img/logo_FB.png">```
	- nynĂ­ se zobrazuje logo se zelenĂ˝m pozadĂ­
- Na hlavnĂ­ strĂˇnce 'index.html' zmÄ›na datumu na 30.6.2019
- AktualizovĂˇno logo (pouĹľito, to co je na webu) v nĂˇhradnĂ­ch strĂˇnkĂˇch ve sloĹľce 'web under construction'
------------------------------------------------------------------
### 01.07.2018
> Jan ZĂˇvorka
- Ăšprava vĹˇech odkazĹŻ na hotel KrĂˇlĂ­ÄŤek na novou adresu www.hotel-kralicek.cz
- NahrĂˇnĂ­ materiĂˇlnĹŻ z 5. roÄŤnĂ­ku (2018):
  - fotografie
  - vĂ˝sledkovĂˇ listina
  - Ăşprava strĂˇnek: umisteni, index, galerie, letos
------------------------------------------------------------------
### 29.06.2018
> Jan ZĂˇvorka
- Ăšprava fotogalerie:
  - lepĹˇĂ­ pozicovĂˇnĂ­ Ĺˇipek pro zmÄ›nu miniatur
  - poÄŤet miniatur se Ĺ™Ă­dĂ­ ĹˇĂ­Ĺ™kou strĂˇnky
  - galerie lĂ©pe zobrazuje obrĂˇzky s vyĹˇĹˇĂ­m rozliĹˇenĂ­m
  - pokudje zobrazena fotografie, kterĂˇ mĂˇ komentĂˇĹ™, jen komentĂˇĹ™ vepsĂˇn do atributu _alt_ (defaultnÄ› _alt_ nastavenĂ˝ na "Sprint proti radaru 20xx")
  - Ăşprava tlaÄŤĂ­tka pro skrytĂ­ miniatur pro Firefox - definovĂˇnĂ­ velikosti apod. pro FF v .css souboru
- Pro vĹˇechny roÄŤnĂ­ky (2014, 2015, 2016, 2017) zkoprimovĂˇny miniatury pomocĂ­ 'Trimage image compressor' - velikost niĹľĹˇĂ­ o asi 60% (bez vizuĂˇlnĂ­ho rozdĂ­lu)
------------------------------------------------------------------
### 24.06.2018
> Jan ZĂˇvorka
- Oprava popisĹŻ a nadpisĹŻ strĂˇnek s popisy obrĂˇzkĹŻ pro galerii
- PomocĂ­ meta zakĂˇzĂˇno indexovat strĂˇnky "poodeslanifail.html" a "poodeslaniok.html"
- Oprava velikosti ikony pro skrytĂ­ miniatur v galerii (globĂˇlnÄ›)
------------------------------------------------------------------
### 23.06.2018
> Jan ZĂˇvorka
- Opraven popis strĂˇnky "konkatky.html"
- V galeriĂ­ch async naÄŤĂ­tĂˇnĂ­ scriptu pro klĂˇvesovĂ© zkratky
------------------------------------------------------------------
### 17.06.2018
> Jan ZĂˇvorka
- Oprava stahovĂˇnĂ­ fotek pomocĂ­ tlaÄŤĂ­tka v galerii, nynĂ­ se jiĹľ sprĂˇvnÄ› pĹ™idĂˇvĂˇ pĹ™Ă­pona *.jpg
------------------------------------------------------------------
### 01.06.2018
> Jan ZĂˇvorka
- Ăšprava cookie liĹˇty, nynĂ­ se nahrĂˇvĂˇ ze souboru pĹ™Ă­mo na serveru ('CookieCZ.js'), autor liĹˇty vĂ˝voj ukonÄŤil
------------------------------------------------------------------
### 27.05.2018
> Jan ZĂˇvorka
- PĹ™idĂˇnĂ­ klĂˇvesy 'escape' k zavĹ™enĂ­ galerie
- NahrĂˇny aktuĂˇlnĂ­ verze plakĂˇtu a letĂˇku
------------------------------------------------------------------
### 09.05.2018
> Jan ZĂˇvorka
- NahrĂˇna novĂˇ, zrekonstruovanĂˇ verze webu ze subdomĂ©ny "test1" na hlavnĂ­ domĂ©nu (autor Martin PlaÄŤek)
- NahrĂˇna aktualizovanĂˇ fotogalerie
------------------------------------------------------------------
### 02.04.2018
> Martin PlaÄŤek
- Alternativni verze webu na subdomene test1
- KompletnĂ­ rekonstrukce webu
------------------------------------------------------------------
### 29.03.2018
> Jan ZĂˇvorka
- ZmÄ›na kĂłdovanĂ­ celĂ©ho webu z windows-1250 na utf-8
- Ăšprava souboru robots.txt desktop. verze: nynĂ­ prohledĂˇvĂˇ obrĂˇzky galerie
- DesktopovĂˇ verze: pĹ™idĂˇnĂ­ skriptu pro posun fotografiĂ­ v galerii pomocĂ­ Ĺˇipek (foto_posun.js)
------------------------------------------------------------------
### 28.03.2018
> Jan ZĂˇvorka
- Kontrola a Ăşprava chybnÄ› otoÄŤenĂ˝ch obrĂˇzkĹŻ v galerii
------------------------------------------------------------------
### 27.03.2018
> Jan ZĂˇvorka
- Opraveno na strĂˇnce LETOS (mobilnĂ­ verze) slovo prezentace na prezence
- PĹ™idĂˇn soubor robots.txt (zabrĂˇnĂ­ indexovĂˇnĂ­ obrĂˇzkĹŻ ve sloĹľce img)
- ZakĂˇzanĂ­ indexovĂˇnĂ­ pomocĂ­ meta pro srĂˇnky 'po odeslĂˇnĂ­' mobilnĂ­ i desktopovĂˇ verze
- ZĂˇkaz indexovĂˇnĂ­ mobilnĂ­ verze + pĹ™idanĂ˝ skript na kaĹľdou strĂˇnku v menu, kterĂ˝ pĹ™esmÄ›ruje uĹľivatele na mobilnĂ­ verzi
- Opravena chyba v nĂˇzvu stahovanĂ©ho .ics souboru (nynĂ­ jiĹľ sprĂˇvnÄ› v nĂˇzvu rok 2018) pro obÄ› verze
------------------------------------------------------------------
### 25.03.2018
> Jan ZĂˇvorka
- PĹ™idĂˇna informaÄŤnĂ­ liĹˇta o cookies (web pouĹľĂ­vĂˇ cookies) pro desktopovou i mobilnĂ­ verzi
- Na strĂˇnku letos pĹ™idĂˇno tlaÄŤĂ­tko ke staĹľenĂ­ souboru .ics (kalendĂˇĹ™) desktopovĂˇ i mobilnĂ­ verze
------------------------------------------------------------------
### 17.09.2017
> Jan ZĂˇvorka
- NahrĂˇny informace pro 5. roÄŤnĂ­k (mobilnĂ­ i desktopovĂˇ verze)
- AktualyzovĂˇn plakĂˇt a letĂˇk
------------------------------------------------------------------
### 08.07.2017
> Jan ZĂˇvorka
- Ăšprava zdrojĂˇkĹŻ a zprovoznÄ›nĂ­ analĂ˝zy nĂˇvĹˇtÄ›vnosti pomocĂ­ google analytics a toplist.cz
------------------------------------------------------------------
### 02.07.2017
> Jan ZĂˇvorka
- NĂˇhranĂ­ vĂ˝sledkĹŻ a fotek z letoĹˇnĂ­ho roÄŤnĂ­ku (2017)
------------------------------------------------------------------
### 01.07.2017
> Jan ZĂˇvorka
- Ăšprav strĂˇnek galerie z kaĹľdĂ©ho roÄŤnĂ­ku (pouze Ăşprava kĂłdu)
------------------------------------------------------------------
### 29.03.2017
> Jan ZĂˇvorka
- Opraveno tlaÄŤĂ­tko s tiskĂˇrnou pro zobrazenĂ­ LetĂˇku (ĹˇpatnÄ› nahranĂ˝ soubor Styles.css)
------------------------------------------------------------------
### 28.03.2017
> Jan ZĂˇvorka
- Upraveny informace o rozdÄ›lovĂˇnĂ­ cen
- PĹ™idĂˇn letĂˇk (na desktopu dostupnĂ˝ pĹ™es tlaÄŤĂ­tko s tiskĂˇrnou, na mobilnĂ­ verzi odkaz)
------------------------------------------------------------------
### 16.03.2017
> Jan ZĂˇvorka
- Upraven ÄŤas konce a startu zĂˇvodu (plakĂˇt a info na webu)
------------------------------------------------------------------
### 09.07.2016
> Jan ZĂˇvorka
- NarĂˇny fotografie pro desktop
- Ăšprava souborĹŻ s foto_2016.html
------------------------------------------------------------------
### 03.07.2016
- NahrĂˇny vĂ˝sledky a fotografie + miniatury (foto pouze pro mobilnĂ­ verzi, desktopovĂˇ pĹ™esmÄ›rovĂˇna na mob.)
- Aktualizace souborĹŻ spojenĂ˝ch s nahrĂˇnĂ­m fotografiĂ­ a vĂ˝sledkĹŻ
------------------------------------------------------------------
### 25.05.2016
> Jan ZĂˇvorka
- Komprese obrĂˇzku pozadĂ­ a ĂşvodnĂ­ fotky
------------------------------------------------------------------
### 24.05.2016
> Jan ZĂˇvorka
- Ăšprava mobilnĂ­ verze webu (odebrĂˇn pravĂ˝ sloupec, mĂ­sto nÄ›ho dalĹˇĂ­ zĂˇloĹľka)
- Ăšprava chyb webu (zobrazovĂˇnĂ­), pĹ™idĂˇn odkaz ke staĹľenĂ­ plakĂˇtu
- Ăšprava mobilnĂ­ verze, zvÄ›tĹˇeny tlaÄŤĂ­tka v menu, Ăşprava textu,odkazĹŻ
- PĹ™idĂˇn znak Kacanov v zĂˇleĹľce PartneĹ™i v mobilnĂ­ verzi
- MobilnĂ­ verze: Ăşprava tlaÄŤĂ­tek v galeriĂ­ch
- DesktopovĂˇ verze: znak obce Kacanovy, Ăşprava vzhledu, Ăşprava menu
- Ăšprava tlaÄŤĂ­tek ve fotogalerii: naÄŤĂ­tĂˇnĂ­ z Styles.css
- Opravena fotka 2015_33
------------------------------------------------------------------
### 04.10.2015
> Jan ZĂˇvorka
- PĹ™idĂˇny inforormace o aktuĂˇlnĂ­m (3.roÄŤnku)
------------------------------------------------------------------
### 18.07.2015
> Jan ZĂˇvorka
- Ăšprava vklĂˇdĂˇnĂ­ partnerĹŻ: partneri.js, vloĹľenĂ­ do dokumentu pomocĂ­ scriptu (jen desktopovĂˇ verze)
------------------------------------------------------------------
### 14.07.2015
> Jan ZĂˇvorka
- NahrĂˇny fotografie 2015
- PĹ™idĂˇna galerie 2015
------------------------------------------------------------------
### 12.07.2015
> Jan ZĂˇvorka
- NahrĂˇna skuteÄŤnĂˇ vĂ˝sledkovĂˇ listina 2015
- PĹ™idĂˇna favicon
------------------------------------------------------------------
### 11.07.2015
> Jan ZĂˇvorka
- ZmÄ›na ĂşvodnĂ­ho textu a informacĂ­ (letoĹˇnĂ­ roĹ™nĂ­k)
- PĹ™idĂˇnĂ­ vĂ˝sledkĹŻ a gelerie pro rok 2015 (nĂˇhradnĂ­)
- PĹ™idĂˇn soubor pro ovÄ›Ĺ™enĂ­ od Google
------------------------------------------------------------------
### 29.06.2015
> Jan ZĂˇvorka
- PĹ™idĂˇnĂ­ souboru styles.css: zmÄ›na barvy tlaÄŤĂ­tka po najetĂ­ myĹˇĂ­
------------------------------------------------------------------
### 28.06.2015
> Jan ZĂˇvorka
- K informacĂ­m pĹ™idĂˇna mapa konĂˇnĂ­ zĂˇvodu
- Ăšprava odkazĹŻ: po najetĂ­ myĹˇĂ­ mÄ›nĂ­ barvu/velikost, pomocĂ­ css
------------------------------------------------------------------
### 26.06.2015
> Jan ZĂˇvorka
- Ăšprava v sekci partneĹ™i, odkaz na partnery se nynĂ­ otevĂ­rĂˇ v novĂ©m oknÄ›
------------------------------------------------------------------
### 24.06.2015
> Kamil ZĂˇvorka
- PĹ™idĂˇnĂ­ popiskĹŻ k fotkĂˇm
------------------------------------------------------------------
### 23.06.2015
> Kamil ZĂˇvorka
- Upraven pravĂ˝ sloupec s obsahem partneĹ™i(sloupec je po celĂ© dĂ©lce)
- ZmÄ›na fotek v galerii dle pokynĹŻ V. PlaÄŤka
------------------------------------------------------------------
### 22.06.2015
> Jan ZĂˇvorka
- ZmÄ›na fontĹŻ, barev, pozadĂ­, pouĹľit soubor textstyle.css
- Upraven ĂşvodnĂ­ text
------------------------------------------------------------------
### 21.06.2015
> Jan ZĂˇvorka
- ZmÄ›na ĂşvodnĂ­ho obrĂˇzku: zmenĹˇenĂ­ rozliĹˇenĂ­ (dlouhĂ© naÄŤĂ­tĂˇnĂ­)
------------------------------------------------------------------
### 20.06.2015
> Jan ZĂˇvorka
- Na strĂˇnce "foto_2014" opraven pravĂ˝ sloupec (partneĹ™i)
------------------------------------------------------------------
### 18.06.2015
> Jan ZĂˇvorka
- Web oficiĂˇlnÄ› spuĹˇtÄ›n

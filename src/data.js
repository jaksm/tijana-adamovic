import React from "react";
// Social Links
import canada from "./assets/canada.jpg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import uk from "./assets/uk.jpg";
import usa from "./assets/usa.jpg";

// import australia from "./assets/australia.png"; TODO: DODAJ SLIKU I ODKOMENTARISI
const company = {
  name: "Tijana Travel",
  email: "tijanaptt@gmail.com",
  tel: "+381640697269"
};

const general = {
  title: "Neki cathcy phrase",
  subtitle: "Jos neki bolji catchy phrase da upotpuni ovo gore"
};

const socialLinks = [
  { alt: "Facebook", src: facebook, url: "https://www.facebook.com/" },
  { alt: "Instagram", src: instagram, url: "https://www.instagram.com/" }
];

const countries = [
  {
    name: "usa",
    title: "Američka viza (Sad viza) American visa",
    keywords: ["usa", "amerika"],
    text: (
      <div>
        <p>
          Drzavljanima Republike Srbije neophodna je viza za ulazak na teritoriju Sjedinjenih Americkih drzava (SAD). U
          ponudi agencije Anglosfera je kompletna usluga popunjavanja formulara kao i zakazivanje intervjua svim osobama
          koje žele da apliciraju za vizu za USA. Takođe agencija nudi usluge rezervacije avionskih karata kao i
          pružanje svih informacija vezanih za vaš put do USA.
        </p>
        <h3>Usluga podrazumeva:</h3>
        <ul>
          <li>Popunjavanje on-line elektronskog obrasca – DS 160</li>
          <li>Izrada naloga na sistemu za zakazivanje intervjua</li>
          <li>Izdavanje naloga za plaćanje troškova viziranja</li>
          <li>Zakazivanje intervjua u Ambasadi SAD-a u Beogradu</li>
          <li>Saveti oko kompletiranja dokumentacije kao I detaljna priprema.</li>
        </ul>
        <p>
          Službenici uglavnom traže informacije o čvrstim vezama sa zemljom boravka podnosioca zahteva – kao što su
          porodične veze ili zaposlenje – koje predstavljaju neku vrstu garancije da će se putnik vratiti u svoju zemlju
          posle posete SAD-u. Iako službenik ne mora da zatraži dokumentaciju, podnosioci zahteva mogu da donesu
          relevantnu dokumentaciju i da je prilože ako se to od njih zatraži.
        </p>
        <p>
          Formular DS 160 predstavlja elektronsku aplikaciju za američku vizu. Da bi se ova aplikacija popunila potrebno
          je da se u nju unese digitalna slika i vaši lični podaci, podaci iz pasoša, razni drugi podaci koji se odnose
          na svrhu vašeg boravka u USA i dužinu boravka u USA.
        </p>
        <p>
          Molimo imajte u vidu da je odobravanje/neodobravanje viza isključivo u nadležnosti konzularnog odeljenja
          američke ambasade i da naša agencija na to nema nikakvog uticaja. Naša uloga je posrednička i savetodavna kako
          bi vam pomogli da pripremite što bolje vašu dokumentaciju i zakažete termin za viziranje. Svaka od zakazanih
          stranaka u obavezi je da na svoj viza intervju ode lično poštujući zakazano vreme,a u slučajevima ne
          pojavljivanja na intervju sredstva uplaćena na ime troškova viziranja i naših konsultantskih usluga nisu
          refundabilna.
        </p>
        <p>Cena kompletne usluge je 3000 dinara, dok je cena takse za vizu 160 usd.</p>
        <p>
          Za sve detalje oko spiska dokumentacije i pitanja u vezi samog procesa, mozete nas kontaktirati na broj
          telefona {company.email}, email {company.name} ili popuniti vizni upitnik.
        </p>
      </div>
    ),
    image: usa,
    price: 123
  },
  {
    name: "kanada",
    title: "Kanada",
    keywords: ["kanada"],
    text: (
      <div>
        <p>
          Ukoliko planirate da putujete i posetite Kanadu, biće vam potrebna viza. U ponudi agencije Anglosfera je
          kompletna usluga popunjavanja formulara svim osobama koje žele da apliciraju za razne tipove Kanadskih viza.
          Takođe ukoliko želite možemo vam uraditi rezervaciju za avionsku kartu kao I dati sve druge detalje vezane za
          vaš put do Kanade.
        </p>
        <p>
          Posetilac je lice koje želi da uđe u Kanadu i boravi određeno vreme bez namere da postane stanovnik Kanade.
          Posetiocima se smatraju: rođaci, prijatelji, turisti, poslovni ljudi, studenti, umetnici, članovi posade
          prevoznog sredstva.
        </p>
        <h3>Dva načina samog apliciranja:</h3>
        <ul>
          <li>
            Elektronsko slanje dokumenata konzularnom odeljenju kanadske ambasade, kako biste bili sigurni da Vaša
            aplikacija ispunjava sve tehničke uslove neophodne za procesuiranje.
          </li>
          <li>
            Popunjavanja obrazaca potrebnih za apliciranje, posle čega sva dokumenta lično, u papirnoj formi, predajete
            u viznom centru.
          </li>
        </ul>
        <h3>Ukoliko se odlučite za elektronsko procesuiranje aplikacije u sklopu  naše usluge dobijate:</h3>
        <ul>
          <li>Kreiranje naloga u okviru sistema apliciranja za kanadsku vizu</li>
          <li>Popunjavanje svih potrebnih formulara</li>
          <li>Konsultacija oko potrebne dokumentacije</li>
          <li>Obrada dokumenata i slanje elektronskim putem</li>
          <li>Online uplata takse za vizu u Vaše ime</li>
          <li>Praćenje statusa Vaše aplikacije i obaveštavanje o neophodnim koracima</li>
        </ul>
        <h3>Opis procedure?</h3>
        <p>
          Nakon što nam uputite upit za apliciranje za kanadsku vizu, od nas dobijate upitnik koji bi trebalo da
          popunite svojim ličnim podacima.
        </p>
        <p>
          Sva dokumenta koja je potrebno podneti, a čiji spisak ćete dobiti od strane agencije, moraju biti prevedena i
          nakon toga ih dostavljete nama na obradu i slanje. Pošto podnesemo zahtev u Vaše ime, šaljemo Vam potvrdu o
          tome i pratimo dalju obradu Vaše aplikacije. U roku od 24 sata pošto se aplikacija zaključi prosledićemo Vam i
          nalog s kojim će biti potrebno da ostavite biometrijske podatke u zvaničnom viznom centru. Ukoliko viza bude
          odobrena, prosleđujemo Vam potvrdu zahteva konzulata da pošaljete svoj pasoš u konzularno odeljenje u Beču
          putem zvaničog viznog centra.
        </p>
        <p>
          Taksu za viziranje iznosi 185 CAD (zbirna usluga takse za apaliciranje i ostavljanje biometrijskih podataka) i
          usluga agencies iznosi 5000 RSD.
        </p>
        <h3>Ukoliko se odlučite za ličnu predaju dokumenata u okviru naše usluge dobijate:</h3>
        <ul>
          <li>Popunjavanje svih potrebnih formulara</li>
          <li>Konsultacija oko potrebne dokumentacije</li>
        </ul>
        <p>
          Sva dokumenta koja je potrebno podneti, a čiji spisak ćete dobiti od strane agencije, moraju biti prevedena.
          Nakon toga ih zajedno sa formularima koje mi za Vas popunjavamo predajete u kanadskom viznom centru.
        </p>
        <p>
          Taksu za viziranje u iznosu od 185 CAD (zbirna usluga takse za apaliciranje i ostavljanje biometrijskih
          podataka) uplaćujete pri predaji dokumenata. U ovom slucaju uslugu agencije iznosi 3000 RSD
        </p>
        <p>
          Za sve detalje oko spiska dokumentacije I pitanja u vezi samog procesa, mozete nas kontaktirati na broj
          telefona {company.tel}, email {company.name} ili popuniti vizni upitnik.
        </p>
      </div>
    ),
    image: canada
  },
  {
    name: "engleska",
    title: "Engleska",
    keywords: ["ujedinjeno kraljevstvo", "engleska"],
    text: (
      <div>
        <p>
          Ukoliko planirate da putujete i posetite Veliku Britaniju biće vam potrebna viza. U ponudi agencies Anglosfera
          je kompletna usluga popunjavanja formulara svim osobama koje žele da apliciraju za razne tipove Britanskih
          viza. Takođe agencija nudi usluge rezervacije avionskih karata kao i pružanje svih informacija vezanih za vaš
          put do Velike Britanjije.
        </p>
        <p>
          Agencija , nudi uslugu tačnog i profesionalnog popunjavanja obrasca za Britansku vizu uz detaljnu procenu i
          analizu opcija za svakog klijenta.
        </p>
        <h3>Naša usluga sadrži :</h3>
        <ul>
          <li>Popunjen zvaničan zahtev za vizu, na osnovu upitnika.</li>
          <li>Zakazivanje termina (Konsultacije oko željenog termina, termini od 8h do 15h radnim danima)</li>
          <li>Spisak potrebne dokumentacije kao i konsultacije oko pripreme same dokumentacije</li>
        </ul>
        <h3>Opis procedure</h3>
        <p>
          Nakon popunjavanja upitnika koji smo Vam dostavili, mi popunjavamo umesto Vas zvaničan zahtev za Britansku
          vizu. Sledeći korak je zakazivanje termina, u konsultaciji sa Vama, a na osnovu dostupnih termina  zakazujemo
          onaj koji Vama najviše odgovara. Sastanci se zakazuju u periodu od 8 do 15 časova svakog radnog dana, a
          željeni termin je moguće zakazati najkasnije 28 sati pre termina. Sa spremnim zahtevom i ostalom propratnom
          dokumentacijom odlazite u UK viza aplikacioni centar u Beogradu, gde se, osim predaje zvaničnog zahteva za
          britansku vizu i propratne dokumentacije, obavlja i davanje biometrijskih podataka, kao deo zvanične procedure
          aplikacije. Nakon dobijanja vize u istom centru se vrši i podizanje viziranog pasoša.
        </p>

        <p>
          U slučaju uplate usluge ubrzanog procesa cekanje na vizu traje oko 5 radnih dana. Vikend, praznici kao i vreme
          za transport dokumenata se ne računa.
        </p>
        <p>
          Usluga agencije iznosi <strong>4000 din</strong> po aplikaciji.
        </p>
        <p>
          Za sve detalje oko spiska dokumentacije I pitanja u vezi samog procesa, mozete nas kontaktirati na broj
          telefona {company.tel}, email {company.email} ili popuniti vizni upitnik.
        </p>
      </div>
    ),
    image: uk
  },
  // {
  //   name: "novi-zeland",
  //   title: "Novi Zeland",
  //   keywords: ["novi zeland"],
  //   text: (
  //     <div>
  //       <h1>Dodati sadrzaj</h1>
  //     </div>
  //   ),
  //   image: newZeland
  // },
  {
    name: "australija",
    title: "Turistička viza za Australiju",
    keywords: ["australia, australija"],
    text: (
      <div>
        <p>
          Ukoliko planirate da putujete i posetite Australiju, biće vam potrebna viza. U ponudi agencije Anglosfera je
          kompletna usluga popunjavanja formulara svim osobama koje žele da apliciraju za razne tipove Australijskih
          viza. Takođe ukoliko želite možemo vam uraditi rezervaciju za avionsku kartu kao I dati sve druge detalje
          vezane za vaš put do Australije.
        </p>
        <h3>Turistička viza - Visitor visa</h3>
        <p>Omogućava turističku ili poslovnu posetu Australiji na period od 3, 6 ili 12 meseci</p>
        <p>Postoji više različitih strimova, zasnovanih na motivu posete Australiji:</p>
        <ul>
          <li>
            <strong>Turistička poseta </strong> - Za ovaj tip vize aplicirate ukoliko putujete u Australiju radi odmora,
            rekreacije, posete porodici ili prijateljima ili u druge svrhe koje ne uključuju posao ili medicinski
            tretman. Morate biti van Australije kada aplicirate i u trenutku kada vam stigne odgovor na aplikaciju.
          </li>
          <li>
            <strong>Poslovna poseta </strong> - Za ovaj tip vize aplicirate ukoliko putujete u Australiju zbog kraće
            poslovne posete. Ovo uključuje generalne poslovne obaveze, pregovore ili učešće na konferencijama. Morate
            biti van Australije kada aplicirate i u trenutku kada vam stigne odgovor na aplikaciju.
          </li>
          <li>
            <strong>Sponzorisana porodična poseta </strong> - Za ovaj tip vize aplicirate ukoliko idete u posetu bliskoj
            rodbini ili članu porodice u Australiji koji je državljanin ili stalni rezident Australije i koji će vas
            sponzorisati za ovu vizu. Uslovi za ovaj tip su nešto rigorozniji u odnosu na turističku posetu i potrebno
            je da sponzor uplati depozit za ovu vizu koji se vraca kada aplikant napusti zemlju..
          </li>
        </ul>
        <h3>Takse i vreme obrade</h3>
        <p>
          Taksa za obradu aplikacije iznosi 140AUD dok usluga agencije iznosi 4000 din. Vreme procesiranja vize varira
          od 2 do 4 nedelje.
        </p>
        <p>
          Nijedna turistička viza ne dozvoljava da radite u Australiji, ali postoji mogućnost da studirate na nekom
          kursu koji traje do 3 meseca, koji dozvoljavaju rad.
        </p>
        <h3>No further stay uslov</h3>
        <p>
          Ukoliko na vašoj vizi ne postoji “No further stay” uslov, imate pravo da aplicirate za novu vizu, dok ste u
          Australiji.
        </p>
        <p>
          Za sve detalje oko spiska dokumentacije I pitanja u vezi samog procesa, mozete nas kontaktirati na broj
          telefona {company.tel}, email {company.name} ili popuniti vizni upitnik.
        </p>
      </div>
    ),
    image: "australia"
  }
];

const esta = {
  title: "Esta viza",
  text: (
    <div>
      <p>
        Ako ste državljanin bilo koje zemlje koja spada pod Visa Waiver Program američke vlade, nije neophodno da
        aplicirate za vizu u ambasadi SAD-a kako biste turistički posetili Ameriku u trajanju do 90 dana ili izvršili
        tranzit kroz teritoriju SAD-a. Posetioci koji putuju pod Visa Waiver Programom moraju se prijaviti za ovlašćenje
        za putovanje pre njihovog odlaska u Sjedinjene Države, odnosno popuniti ESTA aplikaciju.
      </p>
      <p>
        <strong>ESTA </strong>
        označava "Elektronski sistem za autorizaciju putovanja".  ESTA je sistem za prijavljivanje na mreži koji je
        razvila vlada Sjedinjenih Američkih Država kako bi izvršila preliminarnu proveru putnika pre nego što im se
        odobri ulazak u Sjedinjene Države.
      </p>
      <p>
        Vršimo uslužno popunjavanje ESTA formulara za Vas, pratimo status Vaše aplikacije i šaljemo Vam potvrdu o
        odobravanju Vašeg putovanja.
      </p>
      <p>
        Taksa koja se plaća u okviru ESTA sistema za obradu aplikacije iznosi 14 USD a usluga agencije iznosi 3000 rsd.
      </p>
      <p>
        Za sve detalje oko pitanja u vezi samog procesa, mozete nas kontaktirati na broj telefona {company.tel}, email{" "}
        {company.email} ili popuniti vizni upitnik.
      </p>
    </div>
  )
};

const about = {
  title: "O Nama",
  text: (
    <div>
      <p>
        Anglosfera je konsultantska agencija koja se bavi posredovanjem prilikom podnošenja zahteva za vize uključujući
        studentske, turističke, radne, partnerske, poslovne i ostale vize.
      </p>
      <p>
        Glavni savetnik je agent Tijana Simić, koja kroz transparentan, iskren i realan pristup svakom klijentu sa punom
        posvećenošću i odgovornošću, radi sa vama na pripremanju aplikacije, uz detaljnu procenu i analizu opcija i
        situacije svakog.
      </p>
    </div>
  ),
  text2: (
    <div>
      <p>
        Naš glavni cilj je da kroz individualan pristup, svakom našem klijentu izadjemo u susret i pružimo kvalitetnu
        uslugu, koja obuhvata savetovanje i stručnu pripremu aplikacije za vizu odredjene zemlje.
      </p>
      <p>
        Konstantno radimo na unapredjenju usluge i uz profesionalan pristup potrebama naših klijenata, razvijamo i
        gradimo poverenje, iskren i profesionalan odnos.
      </p>
    </div>
  )
};

export { countries, socialLinks, esta, about, general, company };

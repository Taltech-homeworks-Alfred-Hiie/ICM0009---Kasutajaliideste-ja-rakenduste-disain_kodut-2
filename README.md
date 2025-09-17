## Eesmärk
Luua organisatsiooni sisene viki, mis hõlmaks erinevate osakondade tööd.

## Kirjeldus
Ettevõte on tänaseks saanud nii suureks, et inimesed ei suuda leida üles vajalikke dokumente ja andmeid. Selleks tuleks tuua kõik vajalik informatsioon kokku ühte kohta ning lisada võimalikult efektiivne otsingumootor, et igaüks leiaks neile vajalikud andmed kiiresti üles.

### Kasutajatel peaks olema võimekus:
- Luua uusi lehti
- Luua lehtedele elemente. Näiteks pealkirjad, alampealkirjad, paragrahvid, lingid, pildid, videod
- Lisada lihtsalt vastavad lehed otsingusüsteemi

### Äppi põhifunktsioonid
1) *Login* oleks organisatsiooni põhine
2) Klientidele nähtav väiksem osa andmetest/lehtedest
3) *hotkeys*. Näiteks aktiveerida osa tekstist ja teha see lingiks
4) Võimalus lisada märksõnu, mida otsingumootil oleks võimalik kasutada

### Lisa funktsioonid
1) Teemade valik (*light, dark*, jne)

## Persoona

### Seletus
Kuna hetkel on tööl ülesandeks arendada edasi olemasolevat äppi, siis tegin tehnoloogia harjutamise mõttes persoona Angularis.
- NB! Kui ei ole võimalust/tahtmist äppi lokaalselt tööle panna, siis lisasin ka pildi "Screenshot 2025-09-17 180524.png"

### Eeldused
Arvutis peavad olema olemas **Node.js** ja **Angular CLI**

Kontrollimaks olemasolu:

<pre>node --version
npm --version 
ng --version</pre>

- Node tuleb *installida* vastavalt operatsioonisüsteemile.
- Angular CLI *install*:
`npm install -g @angular/cli`

### Kuidas lokaalselt äppi käivitada:

1) Tuleb kloonida projekt GitHubist ja minna vastavasee kausta:
<pre>git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name</pre>
2) Node.js pakettide *installeerimine* `package.json` alusel
`npm install`
3) Arendusserveri käivitamine
`ng serve --open`
- `--open` või `-o` lisamine avab äppi automaatselt veebibrauseris aadressil `http://localhost:4200/`


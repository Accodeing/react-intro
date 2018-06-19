# Intro till React

## Jag vill ha det rått!

För att skapa en ny app, istället för att använda det här skelettet, kan du antingen chcka ut den första commiten i detta repot och flöja "Kom igång" instruktionerna, eller köra `npm install -g create-react-app` och sedan `create-react-app [ditt-appnamn]` för att skapa en ny folder, `./[ditt-appnamn]`, med en ny app i.

## Kom igång

Efter att du har klonat repot och checkat ut den commit/tag du vill använda som bas så kan du köra `yarn install` för att installera alla beroenden och sedan `yarn start` för att starta upp utvecklingsservern på http://localhost:3000. Utvecklingsservern bevakar alla dina filer och laddar om webbläsaren automatiskt när du ändrar i koden.

# Avancerade APIn

## Render props

En komponent med ett render prop tar en funktion som returnerar ett Reactelement och kör dem istället för att implementera sin egen renderingslogik.

Propertiet heter traditionellt `render` men kan heta vad som. Ett annat vanligt sätt att göra render props är att använda sig av `children`, då kan man skicka in funktionen som ett faktiskt child till komponenten istället för att sätta ett attribut.

För mer se https://reactjs.org/docs/render-props.html

## HOC (Higher order component)

En kompnenet som tar en komponent som input och returnerar en ny komponent. Ett vanligt pattern för att åstakomma composition i React, används av bland annat Redux med sin `connect()` HOC.

HOCs kan implementeras genom render props eller genom att HOCen, i sin rendermetod, renderar ut den wrappade komponenten.

För mer se https://reactjs.org/docs/higher-order-components.html

## Portals

Låter en komponent rendera sitt DOM-fragment till en annan del av DOMen än där komponenten är mountad. Användbart när man vill låta flera komponenter rendera meddelanden i en gemensam snackbar eller för att gör dialogrutor etc.

Events på element som renderas via protals följer inte webbläsarens DOM vid bubbling utan Reacts komponenthierarki. Så din komponent, som renderade till portalen, kommer också att få events från elementen den renderade.

För mer se https://reactjs.org/docs/portals.html

## Error boundaries

Tillåter en att sätta upp catch all gränser i UIt. Tidigare crachade hela React om någon del av UIt slängde ett exception som inte hanterades. Med error boundaries kan du skapa isolerade delar av UIt där du renderar andra komponenter om ett ohanterat exception kastas i den primära delen.

För mer se https://reactjs.org/docs/error-boundaries.html

## Context

Reacts egen implementation för att undvika props drilling (att tvingas skicka props från roten genom alla komponeter på vägen till en consumer). I korthet skapar men en ny kontext som ger en Provider och en Consumer. I din provider kan du binda data, en bit av dit globala state och några funktionsreferenser tex, och i din Consumer kan du senare komma åt den datan.

Det är lite som redux light för att koppla state till komponenter, men har inga koncept som reducers etc - det är helt upp dig dig att implementera.

För mer se https://reactjs.org/docs/context.html

# Workshop vs storefront

Namnen för dessa två koncept kommer från en blogpost av Brad Frost (http://bradfrost.com/blog/post/the-workshop-and-the-storefront/) och handlar om skillnaden mellan verktyg avsedda för att göra komponenter (komponentspecifika IDEer) kontra verktyg avsedda för att visa upp komponenter (UI-kits och genererad dokumnetation).

På den skalan finns det tre populära alternativ:

## Styleguidist

Static site generator på steroider.

Zero overhead dokumentationsramverk för React. Du får dokumentation baserat på dina JSDocs och PropTypes, den tillåter en interaktiv editor för kodexempel som gör att man kan testa olika beteenden på komponenter direkt på dokumentationssidan. Den ger ingen hjälp med testning eller utveckling utan är bara till för att generera dokumentation från ett Reactprojekt.

Mer på https://react-styleguidist.js.org/

## Storybook

Ett steg upp från styleguidist åt IDE-hållet. Innehåller koncept om "stories", testscenarion, som man kan definiera och spela upp på sina komponenter. Har också stöd för "knobs", statekontroller, som gör det enkelt att välja tex en värde för en enum för en komponent och se hur det ser ut.

Mer på https://storybook.js.org/

## React studio

Full React-IDE som försöker abstrahera bort React för att låta användaren bli mer produktiv med mindre teknisk kunskap. Ser väldigt imponerande ut med enda nackdelen att man lär sig React studio, inte React i sig, så det blir svårt att byta till ett projekt som inte använder React studio senare.

Mer på https://reactstudio.com/

# "Best" practices

* Börja alltid med funktionella komponenter. Använd bara PureComponent och Component om du behöver funktionaliteten, de
  är långsammare att rendera.
* Använd modern javascriptsyntax från början. Ta en stund och gå igenom Wes Bos' ES6+ kurs ([https://ES6.io/friend/ACCODEING](https://ES6.io/friend/ACCODEING))
  om du inte känner dig bekväm med ES6+ ännu.
* Dela in komponenter i två kategorier: Presentation och Container
  * Presentation
    * Bryr sig om hur saker ser ut
    * Får all data och callbacks via props (kan ha lokalt state som räknas fram från props dock)
    * Är funktionella komponenter, med få undantag
    * Definierar HTML och stil för datan
    * Kan ha både presentation och container -komponenter som barn
  * Container
    * Bryr sig om hur saker fungerer och hänger ihop
    * Har bindningar till globalt state och actions som de ger som props till sina barn
    * Kan ha eget lokalt state
    * Definerar inte egen HTML, möjligen en wrapper, eller style.
* När appen blir större så är det rimligt att flytta ut grupper av state, reducers, actions och presentation/container
  -komponenter till moduler (tex Session eller Menu).
* Börja med att skriva en ny app genom att bara använda funktionella presentationskomponenter och identifiera efter
  hand var du behöver skapa containerkomponenter för att inte behöva skicka props via för många mellanliggande
  komponenter. Upprepa regelbundet för att hålla applikationen möjlig att underhålla.
* Skapa en struktur för hur ni döper och delar upp filer och mappar och håll den konstant mellan projekt. Den behöver
  inte vara perfekt, bara bra. Vinsterna av att ha samma mellan alla Reactprojekt är större än den eventuella kostnaden
  av att systemet inte är perfekt för alla appar.
* Använd styled components (SC) för CSS. Ladda ett globalt stylesheet i App om det behövs, men använd ett SC tema med CSS-variabler
  för att sköta saker som färger, borders, margins etc som spänner över hela appen.
* Om en komponent har state så skall det initialiseras.
* Använd PropTypes för att dokumentera props.
* Om PropTypes används så sätt defaultProps.
* Deklarera PropTypes för funktionella komponenter över komponentens deklaration.
* Om ett anrop till setState beror på föregående state så använd den funktionella syntaxen till setState istället:
  `this.setState({ expanded: !this.state.expanded })` blir `this.setState(prevState => ({ expanded: !prevState.expanded }))`
* Använd props destructuring överst i render för att plocka ut de props ni är intresserade av.
* Använd props destructuring på argumentet till funktionella komponenter. Inkludera eventuella defaultvärden.
* Alla handlerfunctions måste bindas till korrekt this, använd Object attribute syntax för detta: `handleSubmit = (e) => { ... }`
* Använd inte closures som handlers, varje rendering av en komponent skapar då en ny funktion. Detta tvingar React att
  rendera om barnkomponenten oavsett om props faktiskt har ändrats (ny funktion == nytt ID). Så använd
  `onChange={this.handleChange}` istället för `onChange={(e) => { model.name = e.target.value }}` eller `onChange={(e) => this.handleChange(e)}`
* Använd `function MyFunctionalComponent(){ ... }` istället för `const MyFunctionalComponent = () => { ... }` för att
  undvika problem med anonyma funktioner under debugging och testning (dock värt att notera att detta inte är ett problem med korrekt uppsatt Webpack och att exemplen i den officiella Reactdokumentationen inte gör det).
* Använd short-circuit evaluation för att rendera en barnkomponent bara om ett visst vilkor är uppfyllt. Så
  `{ isTrue && <p>True!</p> }` istället för `{ isTrue ? <p>True!</p> : null }`.
* Om ni har behov av nestade vilkorade underkomponenter så bryt isär den nestade if-satsen till flera komponenter med
  ett vilkor i varje.
* Modellera UI-state i global state. Se till att vilken meny/flik/dialog som är öppen sparas i global state etc.
* Använd attribut på objekt istället för bool flaggor för att hålla reda på UI-state. Så använd
  `const menu = [{title:'a', url: '...', open: false},{title:'b', url: '...', open: true}]` istället för
  `const menuItems = [{title:'a', url: '...'},{title:'b', url: '...'}]; const menuSelected = 'b'` etc

# Feedback

Om ni stöter på situationer på vägen som inte passar in här, eller som gör att ni får nya insikter, så för ni gärna höra av er och berätta om det. Vi har inte löst alla problem så vi vet inte alla lösningar, men vill gärna lära oss.

Ris, ros eller bara för att rätta ett stavfel så kan ni nå mig på jonas@accodeing.com

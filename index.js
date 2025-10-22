import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

// E1: Studentenlijst
// Start met een lege array. Schrijf code om deze array op te vullen met namen. Blijf dit herhalen tot je de waarde 'S' meegeeft om te stoppen. Druk vervolgens je namenlijst af.

// let namenArr = []
// let namenInput ;
// while(namenInput != "s"){
//     namenInput = await userInput.question("Geef een naam : ")
//     if (namenInput != "s") {
//         namenArr.push(namenInput)
//     }
// }
// console.log(namenArr);

// E2: Uitnodigingen
// Start met een array waar je namen van je medestudenten gaat bijhouden. Loop over de volledige lijst en print voor elke naam af dat de persoon is uitgenodigd om deel te nemen aan de leukste cursus van EhB. Je moet niet per se programming essentials opgeven, we kunnen daar tegen.

let namenStudentenArr = [];

// namenStudentenArr.forEach(student => {
//     console.log(`Hallo ${student} , Je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB`);
// });
// for(let i = 0 ; i < namenStudentenArr.length ; i++) {
//     console.log(`Hallo ${namenStudentenArr[i]} , Je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB`);

// }

// E3: Alles samen
// Maak een combinatie van de vorige twee challenges. Schrijf code om een namenlijst op te vullen met namen van je medestudenten. Blijf dit herhalen totdat je 'S' ingeeft om te stoppen. Eens je een lijst met namen hebt opgevuld nodig je deze personen uit om deel te nemen aan een superleuk vak.

// let namenInput;

// while (namenInput != "s") {
//   namenInput = await userInput.question("Geef een naam: ");
//   if(namenInput != "s"){
//     namenStudentenArr.push(namenInput);
//   }

// }
// for(let i = 0 ; i < namenStudentenArr.length ; i++) {
//     console.log(`Hallo ${namenStudentenArr[i]} , Je bent uitgenodigd om deel te nemen aan de leukste cursus van EhB`);
// }

// E4: Gemiddelde
// Maak een array waar je een lijst van punten in gaat bijhouden. Schrijf vervolgens code om de gemiddelde score te berekenen.

// let punten = [7,8,9,9,7]
// let totaal  = 0;
// for (let i = 0 ; i < punten.length ; i++){
//     totaal += punten[i]
// }
// totaal /= punten.length

// console.log(totaal);

// M1: Korting plz
// Maak een array waar je enkele prijzen in gaat bijhouden. schrijf vervolgens een functie om 15 procent korting te geven. Deze functie krijgt een prijs binnen en geeft als resultaat de nieuwe prijs met korting terug. Loop vervolgens over al je prijzen en pas de geefKorting functie toe op elke prijs.

// let prijzen = [4.3 , 8.2 , 3.6]
// let kortingsPrijzenArr = []
// const vijftienPercentKorting = (prijs) => {
//     let korting = prijs - (prijs /100 * 15)
//     return korting
// }

// for(let i = 0 ; i < prijzen.length ; i++){
//     kortingsPrijzenArr.push(vijftienPercentKorting(prijzen[i]))

// }
// console.log(kortingsPrijzenArr);

// M2: Fibonacci
// Schrijf code om een reeks van Fibonacci op te bouwen, je houd de reeks bij in een array. start met een array dat de waarden 0 en 1 bevat, je vult de array op tot deze 10 getallen bevat. Binnen deze reeks zal elk volgend getal de som zijn van de vorige twee getallen. Het resultaat dat je moet bekomen is dus [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

let arrayFibonacci = [7, 8, 9, 4];

console.log(arrayFibonacci.indexOf());

// for(let i = 0 ; i < 10 ; i++ ){

// }

// M3: Search
// schrijf een functie om in een namenlijst te zoeken op welke plaats een bepaalde naam voorkomt. Wat je teruggeeft is ofwel de index van de naam binnen de array ofwel -1 als je de naam niet kan vinden. als je bijvoorbeeld een lijst hebt met de volgende namen let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"] en je zoekt op Mehdi dan krijg je als resultaat 4.

// H1: Sort
// Maak een array met 10 gehele getallen. schrijf code om deze getallen te sorteren van groot naar klein.

// H2: Battleships
// We gaan starten met een basis om zeeslag te kunnen spelen. Maak gebruik van een multidimensional array die je speelveld voorstelt. Deze array stelt 10 rijen en kolommen voor voor je speelveld. Schrijf een functie waar je twee cooordinaten aan meegeeft. x stelt voor waar je in de breedte op schiet, y stelt voor waar je in de hoogte op schiet. Op die plaats zet je in de array een *.

// H3: Battleships part deux
// Als uitbreiding op je zeeslag schrijf je functies om boten op je speelveld te plaatsen. Geef de functie een lengte van je boot mee (2 tot 5) en een richting (up, down, left of right). Controleer of er genoeg plaats is om de boot te zetten en plaats in de array je boot met B.

process.exit();

/*
* Funkcia vypočíta BMI index a vráti odporúčania.
* Do vstupu ide m - telesná hmotnosť v kg a h - telesná výška v metroch.
* */
function bmiIndex(m: number, h: number) : string {
    let BMI : number  = m /(h ** 2);

    let minNormalnaHmotnost: number = 19 * (h ** 2);
    let maxNormalnahmotnost: number = 25 * (h ** 2);

    let stav: string;
    let odporucanie: string = " ";

    if (BMI<=19) {
        stav = "podváhu"
        let pribrat: number = +(minNormalnaHmotnost - m).toFixed(2);
        odporucanie = `Mali by ste pribrať ${pribrat} kg.`
    } else if (BMI <= 25){
        stav = "normálnu hmotnosť"
    } else if (BMI <= 30) {
        stav = "nadváhu"
        let schudnut: number = +(maxNormalnahmotnost - m).toFixed(2);
        odporucanie = `Mali by ste schudnúť ${schudnut} kg.`
    } else {
        stav = "obezitu"
        let schudnut: number = +(maxNormalnahmotnost - m).toFixed(2);
        odporucanie = `Mali by ste schudnúť ${schudnut} kg.`
    }

    return `Vaše BMI je ${BMI.toFixed(2)}, čo predstavuje ${stav}. ${odporucanie}`;
}

console.log(bmiIndex(50, 1.75))
console.log(bmiIndex(95, 1.90))



/*
* Funkcia dostane vetu (do 255 znakov) a spočíta počet výskytov jednotlivých písmen vo vete.
* Vypíše prehľadnú tabuľku.
* */
function countLetters(text : string){
    text = text.toLowerCase();
    let map : Map<string,number> = new Map();

    if (text.length < 255){
        for (const char of text){
           map.set(char, (map.get(char) || 0) + 1);
        }
        return map;
    } else {
        return "zadajte platný text"
    }
}

console.table(countLetters("Alabama"));



/*
* Funkcia pre vstupný reťazec overí, či ide o palindrom.
* Program v slove/vo vete nerozlišuje malé a veľké písmená a ignoruje medzery.
* */
function isPalindrome(word: string) : boolean {
    word = word
        .toLowerCase()
        .replace(/ /g,'');
    let n : number = word.length

    for (let i = 0; i < n; i++,n--)
        if (word[i] != word[n - 1])
            return false;
    return true;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("kobyla ma maly bok"))
console.log(isPalindrome("jelenovi pivo nelej"))



/*
* Funkcia vypocita n-tu mocninu cisla a.
* Na vstupe su cele cisla.
* */
function mocnina(a: number, n: number): number {
    return  a ** n;
}

console.log(mocnina(-2, 5))



/*
* Funkcia vypíše zadaný počet Fibonacciho čísel.
* */
function fibonacci(n: number) : number[]  {
    let a : number = 0;
    let b : number = 1;
    let sum : number;
    let numbers : number[];

    if (n <= 1){
        return numbers = [a];
    } else if (n == 2){
        return numbers = [a, b]
    } else {
        numbers = [a, b];
        for (let i : number = 2; i < n; i++){
            sum = a + b;
            numbers.push(sum);
            a = b;
            b = sum;
        }
        return numbers;
    }
}

console.log(fibonacci(11));



/*
* Funkcia vypočíta n! = n. (n-1).(n-2)...1 po zadaní prirodzeného čísla n na vstupe.
* Platí n > 0.
* */
function faktorial(n:number) : number | string {
    let pom : number = 1;

    if (n <= 0){
        return "Zadaj celé číslo > 0"
    } else {
        while (n > 0){
            pom *= n;
            n --;
        }
        return pom;
    }
}

console.log(faktorial(5))
console.log(faktorial(0))



/*
* Funkciu na výpočet sumy, ktorú zaplatíte taxikárovi.
* Do vstupu idú km - počet prejdených km, waiting - čakanie v min., fine - znečistenie (a/n).
* */
function taxi(km: number, waiting: number, fine: string) : string {
    let sum : number = 1.50;
    if (km > 5) {
        km -= 5;
        sum += km * 0.75;
    }
    if (waiting > 0) {
        sum += waiting * (10 / 60);
    }
    if (fine === "a"){
        sum += 20;
    }
    return sum.toFixed(2);
}

console.log(taxi(15, 5, "n"))
console.log(taxi(4, 5, "a"))



/*
* Funkcia na zašifrovanie zadanej vety pomocou šifry BALTIMORESKY.
* */
function sifraBaltimoresky(text: string): string {
    text = text
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    const arr: string[] = text.split('');
    const baltimoresky: string[] = ['B','A','L','T','I','M','O','R','E','S','K','Y']
    const cisla :string[] = ['1','2','3','4','5','6','7','8','9','10','11','12']

    for (let i = 0; i < arr.length; i++){
        const index = baltimoresky.indexOf(arr[i]);
        if (index !== -1){
            arr[i] = cisla[index];
        }
    }
    return arr.join('');
}

console.log(sifraBaltimoresky('To nemyslite vážne!'))
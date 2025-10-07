/* m = telesna hmotnost v kilogramoch,
h = telesna vyska v metroch */
function bmiIndex(m: number, h: number) : string {
    let BMI : number  = m /(h ** 2);
    //console.log(BMI)

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



function countLetters(){

}



/* Na vstupe su cele cisla, funkcia vypocita n-tu mocninu cisla a. */
function mocnina(a: number, n: number): number {
    return  a ** n;
}

console.log(mocnina(-2, 5))



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







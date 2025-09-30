/* m = telesna hmotnost v kilogramoch,
h = telesna vyska v metroch */
function bmiIndex(m: number, h: number){
    let BMI = m /(h ** 2);
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

// console.log(bmiIndex(50, 1.75))
// console.log(bmiIndex(95, 1.90))

/* Na vstupe su cele cisla, funkcia vypocita n-tu mocninu cisla a. */
function mocnina(a: number, n: number): number{
    return  a ** n;
}

// console.log(mocnina(-2, 5))













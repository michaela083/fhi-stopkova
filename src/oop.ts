abstract class Vehicle{
    private readonly znacka : string;
    abstract cena : number;

     constructor(znacka : string){
        this.znacka = znacka;
    }

    hybe_sa() : void{
        console.log('Vozidlo sa hybe.')
    }
}

class Auto extends Vehicle{
    cena: number = 9000;
    constructor(znacka: string) {
        super(znacka);
    }
}

class Bicykel extends Vehicle {
    cena: number = 700;
    constructor(znacka : string) {
        super(znacka);
    }
}

const auto1 = new Auto('volvo');
const bicykel1 = new Bicykel('abc');

console.log(auto1);
console.log(bicykel1);

auto1.hybe_sa();
bicykel1.hybe_sa();

console.log(auto1.cena);
console.log(bicykel1.cena);

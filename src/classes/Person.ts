export class Person {
    id: number;
    name: string;
    surname: string;

    constructor(id: number, name: string, surname:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}
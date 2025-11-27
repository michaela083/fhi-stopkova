export class Person {
    id: number;
    name: string;
    surname: string;
    email: string;

    constructor(id: number, name: string, surname:string, email: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}
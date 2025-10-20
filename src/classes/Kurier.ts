import { Person } from './Person';

export class Kurier extends Person {
    // tu môžete pridať špecifické vlastnosti a metódy pre kuriéra

    constructor(id: string, name: string, phone: string) {
        super(id, name, phone);
    }
}

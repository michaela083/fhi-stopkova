export class Product {
    id: number;
    category: string;
    name: string;
    priceInCents: number;
    description?: string;


    constructor(id: number, category: string,  name: string, priceInCents: number, description?: string) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.priceInCents = priceInCents;
        this.description = description;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getFormattedPrice(): string {
        return `${(this.priceInCents / 100).toFixed(2)}`;
    }

    setCategory(category: string): void {
        this.category = category;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPriceInCents(priceInCents: number): void {
        this.priceInCents = priceInCents;
    }

    setDescription(description: string): void {
        this.description = description;
    }
}
import { FieldSettings } from "../deserializers/quotes.deserializer";

export class QuoteField {
    readonly d: string;
    readonly dly: number;
    readonly gen: number;
    readonly v: number;
    readonly fieldSettings: FieldSettings;
    
    constructor(d: string, dly: number, gen: number, v: number, fieldSettings) {
        this.fieldSettings = fieldSettings;
        this.d = d;
        this.dly = dly;
        this.gen = gen;
        this.v = v;
    }
}
import { QuoteField } from "./quote-field";

export class FieldGroup {

    readonly fields: QuoteField[];

    constructor(fields: QuoteField[]) {
        this.fields = fields;
    }

}
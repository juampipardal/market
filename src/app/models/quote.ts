import { FieldGroup } from "./field-group";
import { QuoteField } from "./quote-field";

export class Quote {
    readonly fieldGroups: FieldGroup[];

    constructor(fieldGroup: FieldGroup[]) {
        this.fieldGroups = fieldGroup;
    }


}
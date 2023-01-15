import { QouteFieldResponse, QouteResponse, QoutesResponse } from "../interfaces/quote.response";
import { FieldGroup } from "../models/field-group";
import { Quote } from "../models/quote";
import { QuoteField } from "../models/quote-field";


export interface FieldSettings {
    name: string;
    date: boolean;
    time: boolean;
    color: boolean;
    symbol: '%' | 'M' | ''
}

export class QuotesDeserializer {

    private static GroupedQuotesFields = [        
        {
            'LVAL_NORM': {
                name: 'Last',
                date: false,
                time: true,
                color: false,
                symbol: ''
            },
            'CLOSE_ADJ_NORM': {
                name: 'Close',
                date: true,
                time: false,
                color: false,
                symbol: ''
            },     
        }, 
        {
            'NC2_PR_NORM': {
                name: 'Day Change %',
                date: false,
                time: false,
                color: true,
                symbol: '%'
            },
            'NC2_NORM': {
                name: 'Day Change',
                date: false,
                time: false,
                color: true
            },
        },
        {
            'VOL': {
                name: 'Volume',
                date: false,
                time: false,
                color: false,
                symbol: 'M'
            },
            'TUR': {
                name: 'Turnover',
                date: false,
                time: false,
                color: false,
                symbol: 'M'
            },
        },
        {
            'PY_CLOSE': {
                name: 'Previous year close',
                date: true,
                time: false,
                color: false
            },
            'YTD_PR_NORM': {
                name: 'YTD %',
                date: false,
                time: false,
                color: true,
                symbol: '%'
            }
        }   
    ];

    static DeserializeQuotesResponse(response: QoutesResponse): Quote[] {
        
        return response.quotes.map(qr => {
            
            const groupedFields: FieldGroup[] = QuotesDeserializer.GroupedQuotesFields.map(group => {
                return new FieldGroup(
                    Object.keys(group)
                        .map(gk => QuotesDeserializer.DeserializeQuoteField(qr.fields[gk], group[gk]))
                );
            });

            return new Quote(groupedFields);
        });
    }

    static DeserializeQuoteField(response: QouteFieldResponse, fieldSettings: FieldSettings): QuoteField {
        return new QuoteField(response.d, response.dly, response.gen, response.v, fieldSettings);
    }
}
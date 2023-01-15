export interface QoutesResponse {
    quotes: QouteResponse[]
}

export interface QouteResponse {
    fields: {
        [key: string]: QouteFieldResponse;
    }
}

export interface QouteFieldResponse {
    d: string;
    dly: number;
    gen: number;
    v: number;
}
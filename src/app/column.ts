export class Column {
    id: number;
    index: number;
    title: string;
    primary: boolean;
    type: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

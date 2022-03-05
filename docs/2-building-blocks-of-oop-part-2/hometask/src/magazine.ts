import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    pages: Pages = new Pages([]);
    private _title: string = '';
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.page.length}, `;
    }
}

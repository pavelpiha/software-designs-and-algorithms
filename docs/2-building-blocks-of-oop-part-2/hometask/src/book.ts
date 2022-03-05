import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
    pages: Pages = new Pages([]);
    private _title: string = '';
    private _author: string = '';

    public get title(): string {
        return this._title;
    }
    public get author(): string {
        return this._author;
    }

    public set title(value: string) {
        this._title = value;
    }
    public set author(value: string) {
        this._author = value;
    }

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.page.length}, `;
    }
}

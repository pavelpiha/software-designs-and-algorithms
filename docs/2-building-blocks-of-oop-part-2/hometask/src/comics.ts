import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    pages: Pages = new Pages([]);
    private _title: string = '';
    private _author: string = '';
    private _artist: string = '';

    public get title(): string {
        return this._title;
    }
    public get author(): string {
        return this._author;
    }
    public get artist(): string {
        return this._artist;
    }

    public set title(value: string) {
        this._title = value;
    }
    public set author(value: string) {
        this._author = value;
    }
    public set artist(value: string) {
        this._artist = value;
    }

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.page.length}, `;
    }
}

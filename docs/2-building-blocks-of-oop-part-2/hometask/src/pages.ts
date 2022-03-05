import { Page } from './page';

export class Pages {
    public get page(): Page[] {
        return this._page;
    }
    public set page(value: Page[]) {
        this._page = value;
    }
    constructor(private _page: Page[]) {}

    add(page: Page): void {
        this._page.push(page);
    }
}

import { Pages } from './pages';
import { PagesIterableMixin } from './pages-itarable-mixin';

export abstract class Item extends PagesIterableMixin(Object) {
    abstract toString(): string;
}



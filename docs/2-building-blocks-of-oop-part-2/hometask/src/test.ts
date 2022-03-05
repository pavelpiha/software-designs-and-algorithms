import { Magazine } from './magazine';
import { Page } from './page';
import { Pages } from './pages';

//THIS FILE FOR TESTS
const magazine = new Magazine(
    'G.Q',
    new Pages([
        new Page(1, 'with article', 'glossy paper'),
        new Page(5, 'with article', 'glossy paper'),
        new Page(2, 'with article', 'glossy paper'),
    ])
);
let counter = 0;
console.log('magazine!!! ', magazine.toString());
magazine.pages.add(new Page(14, 'with article', 'glossy paper'));
for (const page of magazine) {
    console.log('!!!!!! ', page.toString());
    counter++;
}

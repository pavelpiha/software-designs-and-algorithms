export const PagesIterableMixin = (superclass: any) =>
    class extends superclass {
        private index = 0;
        [Symbol.iterator](): Iterator<string> {
            return {
                next: () => {
                    if (this.index < this.pages.page.length) {
                        return { value: this.toString() + this.pages.page[this.index++].toString(), done: false };
                    } else {
                        return { value: undefined, done: true };
                    }
                },
            };
        }
    };

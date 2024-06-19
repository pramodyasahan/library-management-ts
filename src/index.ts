class User {
    readonly name: string;
    private email: string;

    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public borrowBook(bookTitle: string) {
        console.log(`You borrowed the book: ${bookTitle}`)
    }

    public manageLibrary(): void {
        console.log(`${this.name} managing the library...`)
    }
}

class Book {
    readonly id: number;
    readonly title: string;
    readonly author: string;
    readonly ISBN: string;

    constructor(id: number, title: string, author: string, ISBN: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }

    public display(): void {
        console.log(`Book Id-${this.id}, Title-${this.title}, Author-${this.author}, ISBN-${this.ISBN}`)
    }

}

class LibraryCatalogue {
    private libraryItems: Book[] = [];

    addItems(item: Book): void {
        this.libraryItems.push(item)
        console.log(`${item.title} by ${item.author} is added!`)
    }

    displayItems(): void {
        this.libraryItems.forEach(item => item.display())
    }
}

const book1 = new Book(1,
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Robert C. Martin",
    "978-0-13-235088-4")
const book2 = new Book(31,
    "You Don't Know JS: ES6 & Beyond",
    "Kyle Simpson",
    "978-1-4919-4852-9")
const catalogue = new LibraryCatalogue()

catalogue.addItems(book1)
catalogue.addItems(book2)
catalogue.displayItems()
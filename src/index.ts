abstract class LibraryItem {
    readonly id: number;
    readonly title: string;

    protected constructor(id: number, title: string) {
        this.id = id
        this.title = title
    }

    abstract display(): void;
}

class User {
    private name: string;
    private email: string;

    private constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    public borrowBook(bookTitle: string) {
        console.log(`You borrowed the book: ${bookTitle}`)
    }

    public manageLibrary(): void {
        console.log(`${this.name} managing the library...`)
    }

    // Getters
    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    //Setters
    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
}

class Book extends LibraryItem {
    readonly author: string;
    readonly ISBN: string;

    constructor(id: number, title: string, author: string, ISBN: string) {
        super(id, title);
        this.author = author;
        this.ISBN = ISBN;
    }

    public display(): void {
        console.log(`Book Id-${this.id}, Title-${this.title}, Author-${this.author}, ISBN-${this.ISBN}`)
    }

}

class AudioBook extends LibraryItem {
    readonly narrator: string;
    readonly length: number;

    public constructor(id: number, title: string, narrator: string, length: number) {
        super(id, title);
        this.length = length;
        this.narrator = narrator;
    }

    public display(): void {
        console.log(`AudioBook Id: ${this.id}, Title: ${this.title}, Narrator: ${this.narrator}, Length: ${this.length} minutes`);
    }
}

class LibraryCatalogue {
    private libraryItems: LibraryItem[] = [];
    private static instance: LibraryCatalogue;

    public static getInstance(): LibraryCatalogue {
        if (!LibraryCatalogue.instance) {
            LibraryCatalogue.instance = new LibraryCatalogue();
        }
        return LibraryCatalogue.instance;
    }

    public addItems(item: LibraryItem): void {
        this.libraryItems.push(item);
        console.log(`${item.title} is added!`);
    }

    displayItems(): void {
        this.libraryItems.forEach(item => item.display());
    }
}

const book1 = new Book(1, "Clean Code", "Robert C. Martin", "978-0132350884");
const book2 = new Book(2, "You Don't Know JS: ES6 & Beyond", "Kyle Simpson", "978-1491948529");
const audioBook1 = new AudioBook(3, "The Pragmatic Programmer", "Andy Hunt", 480);

const catalogue = LibraryCatalogue.getInstance();

catalogue.addItems(book1)
catalogue.addItems(book2);
catalogue.addItems(audioBook1);

catalogue.displayItems();
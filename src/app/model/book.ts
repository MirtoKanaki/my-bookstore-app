export class Book {
    public isbn: string;
    public title: string;
    public subtitle: string;
    public author: string;
    public published: string;
    public publisher: string;
    public pages: number;
    public description: string;
    public website: string;

    constructor(
        isbn: string, 
        title: string, 
        subtitle: string,
        author: string,
        published: string,
        publisher: string,
        pages: number,
        description: string,
        website: string) {
        this.isbn = isbn;
        this.description = description;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.published = published;
        this.publisher = publisher;
        this.pages = pages;
        this.website = website;
      }
}
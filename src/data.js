import greatGatsbyImage from './assets/images/the-great-gatsby.JPEG';
import GeorgeOrwell from './assets/images/1984.JPEG';
import tokillamockingbird from './assets/images/to-kill-a-mockingbird.JPEG';
import thecatcherintherye from './assets/images/the-catcher-in-the-rye.JPEG';
import theleanstartup from './assets/images/the-lean-startup.JPEG';
import thealchemist from './assets/images/the-alchemist.JPEG';
import prideandprejudice from './assets/images/pride-and-prejudice.JPEG';
import thehobbi from './assets/images/the-hobbi.JPEG';
import mobydick from './assets/images/moby-dick.JPEG';
import warandpeace from './assets/images/war-and-peace.JPEG';
import thepictureofdoriangray from './assets/images/the-picture-of-dorian-gray.JPEG';
import thechroniclesofarnia from './assets/images/the-chronicles-of-narnia.JPEG';
import fahrenheit451 from './assets/images/fahrenheit-451.JPEG';
import sapiens from './assets/images/sapiens.JPEG';
import educated from './assets/images/educated.JPEG';
import thesilentpatient from './assets/images/the-silent-patient.JPEG';
import thevanishinghal from './assets/images/the-vanishing-hal.JPEG';
import wherethecrawdadssing from './assets/images/where-the-crawdads-sing.JPEG';
import anxiouspeople from './assets/images/anxious-people.JPEG';
import warandpeace1234 from './assets/images/war-and-peace.JPEG';

const books = [
    { 
        id: 1, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genre: "Fiction", 
        publicationDate: "1925-04-10",
        image: greatGatsbyImage,
        description: "A novel about the American dream and the disillusionment that comes with it, centered around the mysterious Jay Gatsby." 
    },
    { 
        id: 2, 
        title: "1984", 
        author: "George Orwell", 
        genre: "Dystopian", 
        publicationDate: "1949-06-08",
        image: GeorgeOrwell,
        description: "A chilling portrayal of a totalitarian regime that uses surveillance and propaganda to control the populace." 
    },
    { 
        id: 3, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        genre: "Fiction", 
        publicationDate: "1960-07-11",
        image: tokillamockingbird,
        description: "A coming-of-age story that explores themes of racial injustice and moral growth in the American South." 
    },
    { 
        id: 4, 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        genre: "Fiction", 
        publicationDate: "1951-07-16",
        image: thecatcherintherye,
        description: "A story about teenage alienation and loss, narrated by the iconic character Holden Caulfield." 
    },
    { 
        id: 5, 
        title: "The Lean Startup", 
        author: "Eric Ries", 
        genre: "Non-Fiction", 
        publicationDate: "2011-09-13",
        image: theleanstartup,
        description: "A guide for entrepreneurs on how to build successful startups through lean principles and validated learning." 
    },
    { 
        id: 6, 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        genre: "Adventure", 
        publicationDate: "1988-05-01",
        image: thealchemist,
        description: "A philosophical tale about a shepherd named Santiago who dreams of discovering a treasure located in Egypt." 
    },
    { 
        id: 7, 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        genre: "Romance", 
        publicationDate: "1813-01-28",
        image: prideandprejudice,
        description: "A classic novel that explores themes of love, reputation, and social class in 19th century England." 
    },
    { 
        id: 8, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        genre: "Fantasy", 
        publicationDate: "1937-09-21",
        image: thehobbi,
        description: "A fantasy adventure following the journey of Bilbo Baggins as he seeks treasure guarded by the dragon Smaug." 
    },
    { 
        id: 9, 
        title: "Moby-Dick", 
        author: "Herman Melville", 
        genre: "Fiction", 
        publicationDate: "1851-10-18",
        image: mobydick,
        description: "The epic tale of Captain Ahab's obsessive quest to hunt the great white whale, Moby Dick." 
    },
    { 
        id: 10, 
        title: "War and Peace", 
        author: "Leo Tolstoy", 
        genre: "Historical Fiction", 
        publicationDate: "1869-01-01",
        image: warandpeace,
        description: "A sweeping narrative that intertwines the lives of families against the backdrop of the Napoleonic Wars." 
    },
    { 
        id: 11, 
        title: "The Picture of Dorian Gray", 
        author: "Oscar Wilde", 
        genre: "Philosophical Fiction", 
        publicationDate: "1890-07-01",
        image: thepictureofdoriangray,
        description: "A novel about a man whose portrait ages while he remains young, exploring themes of vanity and morality." 
    },
    { 
        id: 12, 
        title: "The Chronicles of Narnia", 
        author: "C.S. Lewis", 
        genre: "Fantasy", 
        publicationDate: "1950-10-16",
        image: thechroniclesofarnia,
        description: "A series of seven fantasy novels set in the magical land of Narnia, filled with adventure and moral lessons." 
    },
    { 
        id: 13, 
        title: "Brave New World", 
        author: "Aldous Huxley", 
        genre: "Dystopian", 
        publicationDate: "1932-08-01",
        image: thechroniclesofarnia ,
        description: "A dystopian novel that explores a future society driven by technological advancements and a lack of individuality." 
    },
    { 
        id: 14, 
        title: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        genre: "Dystopian", 
        publicationDate: "1953-10-19",
        image:fahrenheit451 ,
        description: "A story about a future where books are banned and 'firemen' burn any that are found." 
    },
    { 
        id: 15, 
        title: "Sapiens: A Brief History of Humankind", 
        author: "Yuval Noah Harari", 
        genre: "Non-Fiction", 
        publicationDate: "2011-01-01",
        image: sapiens,
        description: "An exploration of the history of humankind from the Stone Age to the modern age." 
    },
    { 
        id: 16, 
        title: "Educated", 
        author: "Tara Westover", 
        genre: "Memoir", 
        publicationDate: "2018-02-20",
        image: educated,
        description: "A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education." 
    },
    { 
        id: 17, 
        title: "The Silent Patient", 
        author: "Alex Michaelides", 
        genre: "Thriller", 
        publicationDate: "2019-02-05",
        image: thesilentpatient,
        description: "A psychological thriller about a woman's act of violence against her husband and the therapist determined to uncover her motive." 
    },
    { 
        id: 18, 
        title: "The Vanishing Half", 
        author: "Brit Bennett", 
        genre: "Literary Fiction", 
        publicationDate: "2020-06-02",
        image: thevanishinghal,
        description: "A multi-generational narrative about twin sisters whose lives diverge when one decides to pass as white." 
    },
    { 
        id: 19, 
        title: "Where the Crawdads Sing", 
        author: "Delia Owens", 
        genre: "Fiction", 
        publicationDate: "2018-08-14",
        image: wherethecrawdadssing,
        description: "A coming-of-age story about a young girl who raises herself in the marshes of North Carolina." 
    },
    { 
        id: 20, 
        title: "Anxious People", 
        author: "Fredrik Backman", 
        genre: "Contemporary Fiction", 
        publicationDate: "2020-09-01",
        image: anxiouspeople,
        description: "A poignant and funny story about a failed bank robber who takes a group of strangers hostage during an open house." 
    },
    { 
        id: 21, 
        title: "War and Peace", 
        author: "Leo Tolstoy", 
        genre: "Historical Fiction", 
        publicationDate: "1869-01-01",
        image: warandpeace1234,
        description: "A sweeping narrative that intertwines the lives of families against the backdrop of the Napoleonic Wars." 
    },
];

export default books;

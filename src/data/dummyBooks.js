const dummyBooks = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      publishedDate: "1949-06-08",
      pages: 328,
      coverImage: "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg",
      description: "A dystopian novel exploring totalitarianism and surveillance.",
      rating: 4.7,
      category: "Fiction"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedDate: "1960-07-11",
      pages: 281,
      coverImage: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
      description: "A story of racial injustice and moral growth in the American South.",
      rating: 4.8,
      category: "Fiction"
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedDate: "1925-04-10",
      pages: 180,
      coverImage: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
      description: "A critique of the American Dream during the Jazz Age.",
      rating: 4.6,
      category: "Classic"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedDate: "1813-01-28",
      pages: 279,
      coverImage: "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
      description: "A romantic novel about the Bennet family and societal norms.",
      rating: 4.9,
      category: "Classic"
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishedDate: "1951-07-16",
      pages: 234,
      coverImage: "https://m.media-amazon.com/images/I/91HPG31dTwL._AC_UF1000,1000_QL80_.jpg",
      description: "A coming-of-age story of teenage rebellion and alienation.",
      rating: 4.3,
      category: "Fiction"
    },
    {
      id: 6,
      title: "Moby-Dick",
      author: "Herman Melville",
      publishedDate: "1851-10-18",
      pages: 585,
      coverImage: "https://m.media-amazon.com/images/I/81Baf0m5rBL._SL1500_.jpg",
      description: "An epic tale of obsession and the whaling industry.",
      rating: 4.2,
      category: "Classic"
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publishedDate: "1937-09-21",
      pages: 310,
      coverImage: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
      description: "A fantasy adventure about Bilbo Baggins and a dragon's treasure.",
      rating: 4.8,
      category: "Fantasy"
    },
    {
      id: 8,
      title: "Brave New World",
      author: "Aldous Huxley",
      publishedDate: "1932-01-01",
      pages: 311,
      coverImage: "https://m.media-amazon.com/images/I/81zE42gT3xL._AC_UF1000,1000_QL80_.jpg",
      description: "A dystopian vision of a technologically advanced society.",
      rating: 4.5,
      category: "Sci-Fi"
    },
    {
      id: 9,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publishedDate: "1954-07-29",
      pages: 1178,
      coverImage: "https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg",
      description: "An epic high-fantasy trilogy about the quest to destroy the One Ring.",
      rating: 4.9,
      category: "Fantasy"
    },
    {
      id: 10,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      publishedDate: "1866-01-01",
      pages: 430,
      coverImage: "https://m.media-amazon.com/images/I/81bAXZAp-GL._SL1500_.jpg",
      description: "A psychological exploration of guilt and redemption.",
      rating: 4.6,
      category: "Fiction"
    },
    {
      id: 11,
      title: "The Alchemist",
      author: "Paulo Coelho",
      publishedDate: "1988-01-01",
      pages: 208,
      coverImage: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      description: "A philosophical novel about destiny and personal legend.",
      rating: 4.4,
      category: "Fiction"
    },
    {
      id: 12,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      publishedDate: "1947-06-25",
      pages: 283,
      coverImage: "https://m.media-amazon.com/images/I/71zPzY0EHpL._SL1500_.jpg",
      description: "A poignant account of life in hiding during the Holocaust.",
      rating: 4.8,
      category: "Non-Fiction"
    },
    {
      id: 13,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      publishedDate: "1979-10-12",
      pages: 224,
      coverImage: "https://m.media-amazon.com/images/I/81XSN3hA5gL._AC_UF1000,1000_QL80_.jpg",
      description: "A comedic science fiction adventure through space.",
      rating: 4.7,
      category: "Sci-Fi"
    },
    {
      id: 14,
      title: "Frankenstein",
      author: "Mary Shelley",
      publishedDate: "1818-01-01",
      pages: 280,
      coverImage: "https://m.media-amazon.com/images/I/91KEmBm2GVL._SL1500_.jpg",
      description: "A Gothic tale of creation and its consequences.",
      rating: 4.5,
      category: "Classic"
    },
    {
      id: 15,
      title: "The Odyssey",
      author: "Homer",
      publishedDate: "800 BCE",
      pages: 541,
      coverImage: "https://m.media-amazon.com/images/I/81Z-BC509yL._SL1500_.jpg",
      description: "An ancient Greek epic poem about Odysseus's journey home.",
      rating: 4.4,
      category: "Classic"
    }
  ];
  
  export default dummyBooks;
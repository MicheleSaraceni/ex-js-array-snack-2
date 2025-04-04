export default function App() {
  const books = [
    {
      title: "React Billionaire",
      pages: 250,
      author: {
        name: 'Alice',
        age: 35
      },
      available: false,
      price: '101€',
      tags: ['advanced', 'js', 'react', 'senior']
    },
    {
      title: "Advanced JS",
      pages: 500,
      author: {
        name: 'Bob',
        age: 20
      },
      available: true,
      price: '25€',
      tags: ['advanced', 'js', 'mid-senior']
    },
    {
      title: "CSS Secrets",
      pages: 320,
      author: {
        name: 'Alice',
        age: 17
      },
      available: true,
      price: '8€',
      tags: ['html', 'css', 'junior']
    },
    {
      title: "HTML Mastery",
      pages: 200,
      author: {
        name: 'Charlie',
        age: 50
      },
      available: false,
      price: '48€',
      tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
  ];


  //-------------------------------------------------------------------------------------------------SNACK 1
  const longBooks = books.filter((book) => book.pages > 300);
  const longBooksTitles = longBooks.filter((book) => book.title);
  console.log(longBooksTitles);


  //-------------------------------------------------------------------------------------------------SNACK 2
  const availableBooks = books.filter((book) => book.available);
  const discountedBooks = availableBooks.map((book) => {
    book.price = parseInt(book.price)
    const sconto = book.price * 20 / 100;
    book.price = book.price - sconto
    return book;
  });
  console.log(discountedBooks);

  const fullPricedBook = discountedBooks.find((book) => Number.isInteger(book.price));
  console.log(fullPricedBook);


  //-------------------------------------------------------------------------------------------------SNACK 3
  const authors = books.map((book) => book.author);

  const areAuthorsAdults = authors.every((author) => author.age >= 18);
  if (areAuthorsAdults) {
    console.log("Tutti gli autori sono maggiorenni");
  } else {
    console.log("Non tutti gli autori sono maggiorenni");
  }

  authors.sort((a, b) => {
    if (areAuthorsAdults) {
      return a.age - b.age;
    } else {
      return b.age - a.age;
    }
  })
  console.log(authors);


  //-------------------------------------------------------------------------------------------------SNACK 4
  const ages = authors.map((author) => author.age);
  const agesSum = ages.reduce((acc, curr) => acc + curr, 0);
  console.log(`La media d'età è: ${Math.round(agesSum / ages.length)}`);
}


import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: 'The Shining',
        authors: 'Stephen King',
        covers: [
          'https://images.penguinrandomhouse.com/cover/9780345806789',
          'https://images.gr-assets.com/books/1353277730l/11588.jpg',
        ],
        pages: 200,
      },
      {
        goodreadsId: 2,
        title: 'Carrie',
        authors: 'Stephen King',
        covers: ['https://images.gr-assets.com/books/1381972494l/6360296.jpg'],
        pages: 200,
      },
    ],
  });
});

export default router;

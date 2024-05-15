const express = require('express');
const fs = require('fs');
const path = require('path');
var cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).json({ message: 'AUTH ERROR' });
//   }
//   next();
// });

const dbFilePath = path.resolve(__dirname, '..', 'json-server', 'db.json');

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));
  const { users } = db;

  const userFromDb = users.find((user) => user.username === username && user.password === password);

  if (userFromDb) {
    return res.json(userFromDb);
  }

  return res.status(403).json({ message: 'AUTH error' });
});

app.get('/profile', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));
  const { profile } = db;

  if (profile) {
    return res.json(profile);
  }

  return res.status(403).json({ message: 'AUTH error' });
});

app.get('/article-ratings', (req, res) => {
  const { userId, articleId } = req.query;

  console.log(userId, articleId);

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { articleRating } = db;

  const currentArticle = articleRating.find((el) => userId === el.userId && articleId === el.articleId);
  return res.json(currentArticle);
});

app.post('/article-ratings', (req, res) => {
  const { userId, articleId, rate, feedback } = req.body;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { articleRating } = db;

  articleRating.push({
    id: uuidv4(),
    rate,
    feedback: feedback ?? '',
    userId,
    articleId,
  });

  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2), 'UTF-8');

  return res.json(articleRating);
});

// PUT endpoint для обновления профиля
app.put('/profile/:id', (req, res) => {
  const { id } = req.params;
  // Получаем новые данные профиля из тела запроса
  const updatedProfile = req.body;

  // Читаем данные из файла
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { profile } = db;

  // Находим профиль с заданным id
  const currentProfile = profile.find((profile) => profile.id === id);

  // Проверяем, найден ли профиль
  if (!currentProfile) {
    return res.status(404).json({ error: 'Профиль не найден' });
  }

  // Обновляем профиль в данных
  Object.assign(currentProfile, updatedProfile);

  // Записываем обновленные данные в файл
  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2), 'UTF-8');

  // Отправляем обновленные данные в ответе
  return res.json(currentProfile);
});

// PUT endpoint для обновления профиля
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { profile } = db;

  let profileById = profile.filter((el) => el.id === id);

  if (profileById.length > 0) {
    return res.json(profileById[0]);
  } else {
    throw new Error();
  }
});

app.post('/posts', (req, res) => {
  const posts = [
    { id: '1', title: 'a title', views: 100 },
    { id: '2', title: 'another title', views: 200 },
  ];

  res.json({ posts: posts });
});

app.get('/articles/:id', (req, res) => {
  const { id } = req.params;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { articles } = db;

  let articlesById = articles.filter((el) => el.id === id);

  if (articlesById.length > 0) {
    return res.json(articlesById[0]);
  } else {
    throw new Error();
  }
});

// app.get('/articles', (req, res) => {
//   const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

//   const { articles } = db;

//   // Получение параметров запроса
//   const page = parseInt(req.query._page) || 1; // Номер страницы, по умолчанию 1
//   const limit = parseInt(req.query._limit) || 100; // Количество элементов на странице, по умолчанию 10

//   // Вычисление индекса начала и конца для текущей страницы
//   const startIndex = (page - 1) * limit;
//   const endIndex = startIndex + limit;

//   // Получение статей для текущей страницы
//   const paginatedArticles = articles.slice(startIndex, endIndex);

//   if (articles.length > 0) {
//     return res.json(paginatedArticles);
//   } else {
//     throw new Error();
//   }
// });

app.get('/articles', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { articles } = db;

  // Получение параметров запроса
  const page = parseInt(req.query._page) || 1; // Номер страницы, по умолчанию 1
  const limit = parseInt(req.query._limit) || 100; // Количество элементов на странице, по умолчанию 10
  const sort = req.query._sort || 'createdAt'; // Параметр сортировки, по умолчанию 'CREATED'
  const order = req.query._order || 'asc'; // Порядок сортировки, по умолчанию 'asc'
  const search = req.query.q || ''; // Поисковый запрос, по умолчанию пустая строка
  const type = req.query.type || 'ALL'; // Поисковый запрос, по умолчанию пустая строка

  // Вычисление индекса начала и конца для текущей страницы
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Применение сортировки
  let sortedArticles = [...articles];

  if (sort === 'createdAt') {
    sortedArticles.sort((a, b) => a.createdAt - b.createdAt);
  } else if (sort === 'title') {
    sortedArticles.sort((a, b) => b.title - a.title);
  } else if (sort === 'views') {
    sortedArticles.sort((a, b) => a.views - b.views);
  }

  if (order === 'asc') {
    sortedArticles.sort((a, b) => a.id - b.id);
  } else {
    sortedArticles.sort((a, b) => b.id - a.id);
  }

  if (search) {
    // Применение поиска
    sortedArticles = sortedArticles.filter((article) => article.title.toLowerCase().includes(search.toLowerCase()));
  }

  if (type !== 'ALL') {
    sortedArticles = sortedArticles.filter((el) => el.type.includes(type));
  }

  // Получение статей для текущей страницы
  const paginatedArticles = sortedArticles.slice(startIndex, endIndex);

  if (paginatedArticles.length > 0) {
    return res.json(paginatedArticles);
  } else {
    throw new Error('No articles found for the given criteria.');
  }
});

app.get('/notifications', (req, res) => {
  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { notifications } = db;

  return res.json(notifications);
});

app.get('/comments', (req, res) => {
  const { articleId } = req.query;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { comments, users } = db;

  // Фильтруем комментарии по articleId
  const commentsForArticle = comments.filter((comment) => comment.articleId === articleId);

  // Если есть комментарии для данной статьи
  if (commentsForArticle && commentsForArticle.length > 0) {
    // Создаем новый массив, добавляя информацию о пользователе к каждому комментарию
    const commentsWithUser = commentsForArticle.map((comment) => {
      const user = users.find((user) => user.id === comment.userId);

      return {
        ...comment,
        user: user, // добавляем информацию о пользователе к комментарию
      };
    });

    return res.json(commentsWithUser);
  } else {
    // Если нет комментариев для данной статьи, возвращаем пустой массив
    return res.json([]);
  }
});

app.post('/comments', (req, res) => {
  const { articleId, userId, text } = req.body;

  const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

  const { comments, users } = db;

  const currentUserAvatar = users.filter((user) => user.id === userId);

  comments.push({
    id: uuidv4(),
    text,
    articleId,
    userId,
    avatar: currentUserAvatar[0].avatar,
  });

  fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2), 'UTF-8');

  return res.json(comments);
});

// app.use(express.static(path.resolve(__dirname, 'public')));

const port = 8000;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session Middleware
app.use(session({
  secret: 'kallpa-marketing-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Global Variables Middleware
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api', contactRoutes);

// View Routes
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Kallpa Suite — Tu Ecosistema de Gestión Empresarial',
    page: 'home'
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).render('pages/404', {
    title: '404 - Página no encontrada',
    page: 'error'
  });
});

app.listen(PORT, () => {
  console.log(`Kallpa Suite server running on http://localhost:${PORT}`);
});

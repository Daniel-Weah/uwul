const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 res.render('index');
});

app.get('/about-us', (req, res) => {
 res.render('about');
});

app.get('/contact-us', (req, res) => {
 res.render('contact');
});

app.get('/news', (req, res) => {
 res.render('news');
})

app.listen(port, () => {
 console.log(`Server started on port ${port}`);
});
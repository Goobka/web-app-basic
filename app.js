const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', exhbs({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs'
}));

app.get('/', (req, res) => {
    // console.log('Callback for app.use("/")');
    // console.log(req.url);
    // res.send({ name: 'Poly' });
    res.render('home', {pageTitle: 'Home page'});
})

app.get('/about', (req, res) => {
    // console.log('Callback for app.use("/about")');
    // console.log(req.url);
    // res.send({ name: 'Mango' });
    res.render('about',{cssFileName: 'about', pageTitle: 'About us'});
})

app.get('/products', (req, res) => {
    res.render('products', {products, cssFileName: 'products', pageTitle: 'Our products'});
})

app.get('/product/:productId', (req, res) => {
    console.log(req.params);
    const product = products.find(p => p.id === req.params.productId);
    res.render('product', {product})
});

app.listen(4444, () => {
    console.log(`Application server is running on port ${4444}`);
})
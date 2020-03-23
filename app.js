const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const expressHbs = require('express-handlebars');

// set global configuration value, telling express we want to use pug template engine when applying dynamic templates
// app.set('view engine', 'pug');
// for handlebars, have to register the templating engine because it's not built into express
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
// this line isn't needed because the default folder where views are stored is views folder; if we put views in another
// folder with different name, have to use line below to set to that folder
app.set('views', 'views');

// adminData is going to be an object since we're exporting multiple things from admin.js
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);

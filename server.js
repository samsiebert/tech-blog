const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequilize = require('./config/connection');
const helpers = require('./utils/helpers')
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequilize
    })
};

app.use(session(sess));

const hbs = exhbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: flase }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequilize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => console.log('Now listening'));
});



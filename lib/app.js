const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/notes', require('./routes/notes'));

//These really are added later.. should be 
//first just the requrie express and make app const

//then just the above 3rd and 4th lines

//then these below, after middleware written
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

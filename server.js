const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(require('./routes/htmlRoutes'));
// app.use('/api', require('./routes/apiRoutes'));

app.listen(PORT, () => {
    console.log('Bears... Beets... Battle Star Galactica is running on PORT ' + PORT);
});
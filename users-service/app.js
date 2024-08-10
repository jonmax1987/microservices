const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});

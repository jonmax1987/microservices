const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Auth service running on port ${PORT}`);
});

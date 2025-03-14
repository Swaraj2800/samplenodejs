const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Sample Node.js App!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

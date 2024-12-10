const express = require('express');
const productRoutes = require('./routes/productRoutes'); // Adjust the path

const app = express();

app.use('/api', productRoutes);

// Other app configurations
app.listen(3000, () => console.log('Server is running on port 3000'));
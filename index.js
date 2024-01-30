const app = require('./app');
const PORT = process.env.PORT || 3000;

// Your additional routes and middleware setup

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
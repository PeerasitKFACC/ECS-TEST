const express = require('express');
const app = express();
const port = process.env.PORT || 80;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
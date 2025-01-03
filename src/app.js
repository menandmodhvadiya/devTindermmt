const express = require("express");
const app = express();

app.use("/test", (req, res) => {
    res.send("/test incoming request for userside");
})
app.get('/search', (req, res) => {
    const query = req.query.query; // Access 'query' parameter
    const sort = req.query.sort;  // Access 'sort' parameter
    res.send(`Search term: ${query}, Sort order: ${sort}`);
});

app.get('/user(/profile)?', (req, res) => {
    res.send('Matched user or user/profile route!');
});

// app.use("*", (req, res) => {
//     res.send("blblblblblbllblblbfest for userside");
// })
// app.use((req, res) => {
//     res.send("this is responce back for /test incoming request for userside");
// })

app.listen(1313, () => {
    console.log("server is running in port 1313.....")
});
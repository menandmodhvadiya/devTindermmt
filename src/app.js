const express = require("express");
const app = express();

app.use("/test", (req, res) => {
    res.send("/test incoming request for userside");
})
app.use((req, res) => {
    res.send("this is responce back for /test incoming request for userside");
})

app.listen(1313, () => {
    console.log("server is running in port 1313.....")
});
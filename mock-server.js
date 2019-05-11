let express = require("express");
let Mock = require("mockjs");
let app = express();

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use("/api/user", function(req, res) {
    res.json(
        Mock.mock({
            name: "大漠穷秋",
            age: 18
        })
    );
});

app.listen("3000", () => {
    console.log("mock server is listening at 3000");
});

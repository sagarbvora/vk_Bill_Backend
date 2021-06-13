const authRouter = require("./Server/router");
// const varifyToken = require("../midleware/validateToken");

module.exports = (app) => {
    app.use("/billing", authRouter);
};
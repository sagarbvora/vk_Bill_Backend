const authRouter = require('./Auth/router');
const billingRouter = require("./Billing/router");
const passport = require('passport');
require('../middleware/index')(passport);

module.exports = (app) => {
    app.use("/api/auth", authRouter);
    app.use("/api/bill", passport.authenticate('jwt', {session: false}), billingRouter);
};
module.exports = reqFilter = (req, resp, next) => {
        if (!req.query.age) {
            resp.send("Please provided age")
        }
        else if (req.query.age < 18) {
            resp.send("You cannot access this Page")
        }
        else {
            next();
        }
    }
module.exports = reqfilter = (req, res, next) => {
    // console.log("middleware filter");
    if (!req.query.age) {
        res.send("PLEASE provide age");
    }
    else if (req.query.age < 18) {
        res.send("Permission denied! because age must be between 18 and above");
    }
    else {
        next();
    }

}
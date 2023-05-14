let logCount = 0
const myLogger = (req, res, next) => {
    logCount++;
    console.log("Logged Count", logCount)
    next()
}

export default myLogger
const { CustomAPIError } = require('../errors/custom-error')
const errorHanderMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(500).json({ msg: `something went wrong, Please keep calm!` })
}

module.exports = errorHanderMiddleware  
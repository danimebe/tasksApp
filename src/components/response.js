

exports.GeneralResponse = (req, res, code, data, message, ok, error) => {
    res.status(code).json({
        ok,
        data,
        message,
        error
    })
};

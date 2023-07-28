

const isAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
        res.status(403).json({Error :"You are not allowed"})
    }
    next()
}

module.exports = isAdmin;
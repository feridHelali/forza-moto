function paginatedResult(model) {
    return async (req, res, next) => {
        let page = parseInt(req.query.page)
        let limit = parseInt(req.query.limit)
        let search = req.query.search;

        console.log(search)

        if (!page) page = 1;
        if (!limit) limit = 10;

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const count = await model.countDocuments().exec()

        let info = {}


        if (endIndex < count) {
            info.next = {
                page: page + 1,
                limit: limit,
                count: count
            }
        }

        if (startIndex > 0) {
            info.previous = {
                page: page - 1,
                limit: limit,
                count: count
            }
        }

        try {
            let data;
            if (search) {
                data = await model.find({ $text: { $search: search } }).limit(limit).skip(startIndex).exec()
            }else{
                data = await model.find({}).limit(limit).skip(startIndex).exec()
            }
            res.result = { info, data },
                next()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

}

module.exports = paginatedResult;
exports.create = (req, res, next) => {
    try {
        res.status(200);
        res.json({
            success: true,
        });
    } catch (err) {
        next(new Error(err));
    }
}

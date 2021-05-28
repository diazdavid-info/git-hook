const event = require('../../../../src/event/domain/event');

module.exports = (createUseCase) => {
    const create = (req, res, next) => {
        const {body = {}} = req;
        try {
            createUseCase.create(event.create({type: 'push', data: body}))
            res.status(200);
            res.json({
                success: true,
            });
        } catch (err) {
            next(new Error(err));
        }
    }

    return {
        create,
    }
}

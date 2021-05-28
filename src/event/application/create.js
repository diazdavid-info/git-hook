module.exports = (repository) => {
    const create = (event) => {
        repository.save(event);
    };

    return {
        create,
    };
};
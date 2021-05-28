const create = ({type, data}) => {
    const _type = type;
    const _data = data;

    return {
        getType: function() {
            return _type;
        },

        getData: function() {
            return _data;
        },
    };
};

module.exports = {
    create
}
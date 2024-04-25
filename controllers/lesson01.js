const maryRoute = (req, res) => {
    res.send('Mary Thorpe');
};

const jennyRoute = (req, res) => {
    res.send('Jenny Hamby');
};

const mariaRoute = (req, res) => {
    res.send('Maria Thorpe');
};

module.exports = { maryRoute, jennyRoute, mariaRoute };
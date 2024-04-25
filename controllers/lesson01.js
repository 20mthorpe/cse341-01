const maryRoute = (req, res) => {
    res.send('Mary Thorpe');
};

const jennyRoute = (req, res) => {
    res.send('Jenny Hamby');
};

module.exports = { maryRoute, jennyRoute };
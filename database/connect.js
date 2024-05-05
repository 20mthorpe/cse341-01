const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

const URI = process.env.MONGODB_URI;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.warn('Trying to init DB again!');
        return callback(null, _db);
    }
    MongoClient.connect(URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            return callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        console.warn('Db has not been initialized. Please call initDb first.');
    }
    return _db;
};

module.exports = { initDb, getDb };

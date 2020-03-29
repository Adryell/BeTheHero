const crypto = require('crypto');

module.exports = function geranteUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}
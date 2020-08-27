const axios = require('axios');

const path = require('path');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'view/index.html'));
    
}

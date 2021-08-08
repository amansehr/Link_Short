//! Database
const fs = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });

module.exports = fs



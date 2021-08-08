//! Database
const fs = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

module.exports = fs.initializeApp({ credential: fs.credential.cert(serviceAccount) });



// Bug 7 - change Jobly to Bankly
/** Database setup for Bankly. */

const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

client.connect();

module.exports = client;

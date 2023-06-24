const { auth } = require('express-openid-connect');
require('dotenv').config()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.baseURL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.issueBaseURL
};

module.exports = { authObj: auth(config) }



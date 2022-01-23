const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const jwt = require('jsonwebtoken');


const usersController = {
    register: (req, res) => {

    },
    login: (req, res) => {
        const user = { id: 3};
        const token = jwt.sign( {user}, 'mySecretKey');

        res.json({token})
    },
    auth: (req, res) => {
        jwt.verify(req.token,'mySecretKey', (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    text: "protected",
                    data: data
                });
            }
        });
    }   
}

module.exports = usersController;
const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../secret/config');
const sgMail = require('@sendgrid/mail');


const authController = {
    register: (req, res) => {
        const {name, email, password} = req.body;

        db.User.create({
            name: name,
            email: email,
            password: bcryptjs.hashSync(password, 10),
        })

        const token = jwt.sign({id: db.User.id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })

    res.json( {auth: true, token} )

    // ***** SENDING EMAIL ***** 

    const sgMail = require('@sendgrid/mail');

    const API_KEY = 'SECRETO';

    sgMail.setApiKey(API_KEY);

    const msg = {
        to: req.body.email,
        from: {
            name: "apiDisney",
            email:"estebanferreccio@gmail.com"
        },
        subject: "Welcome to apiDisney",
        text: "Thanks for signing up!",
        html: "<div><h2>Hi "+req.body.name+"!! Thanks for signing up!</h2><p>You can find your favorite movie and character of Disney.Thank you!</p></div>"

    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    // ***** END SEND EMAIL *****


    },
    login: (req, res) => {
        
        db.User.findAll()
            .then(users => {

                function findByField(field, text) {
            
                    let userFound = users.find(oneUser => oneUser[field] === text);
                    return userFound; 
                }
                
                let userToLogin = findByField('email', req.body.email);
                let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                
                
                if (userToLogin && isOkThePassword) {
                    
                    const token = jwt.sign({id: userToLogin.id }, config.secret, {
                        expiresIn: 60 * 60 * 24
                    });
    
                    res.json({auth: true, token});

                    } else {

                        return res.json('Las credenciales son inválidas')
                    }                
            })      
    },
    me: async (req, res) => {

        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({
                auth:false,
                msg: 'No token provided'
            })

        } else {

        const decoded = jwt.verify(token, config.secret);
            
        console.log(decoded);
        res.json('Acceso Permitido');

        } 

    }

}

module.exports = authController;
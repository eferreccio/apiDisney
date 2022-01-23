const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const config = require('../../secret/config')
const verifyToken = require('../../middlewares/verifyToken');
const sgMail = require('@sendgrid/mail');


const authController = {
    register: (req, res) => {
        const {name, email, password} = req.body;

        db.User.create({
            name: name,
            email: email,
            password: password
        })

        const token = jwt.sign({id: db.User.id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })

    res.json( {auth: true, token} )

    // ***** SENDING EMAIL *****

    const sgMail = require('@sendgrid/mail');

const API_KEY = 'secreta';

sgMail.setApiKey(API_KEY);

const msg = {
    to: "agusdartayeta@hotmail.com",
    from: {
        name: "apiDisney",
        email:"estebanferreccio@gmail.com"
    },
    subject: "Welcome to apiDisney",
    text: "Thanks for signing up!",
    html: "<div><h2>Thanks for signing up!</h2><p>You can find your favorite movie and character of Disney.Thank you!</p></div>"

};

sgMail.send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })

    // ***** END SEND EMAIL ******


    },
    login: (req, res) => {
        
        db.User.findAll()
            .then(users => {

                function findByField(field, text) {
            
                    let userFound = users.find(oneUser => oneUser[field] === text);
                    return userFound; 
                }
                
                let userToLogin = findByField('email', req.body.email);
                
                
                if (userToLogin) {
                    //let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
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
            
        /*const user = await db.User.findById(decoded.id, { password: 0});

            if (!user) {
                return res.status(404).send('No user found');
            } else {
                res.json(user)
            }*/

            console.log(decoded);
            res.json('Acceso Permitido');






        } 

    }

}

module.exports = authController;
const sgMail = require('@sendgrid/mail');

const API_KEY = 'secreta';

sgMail.setApiKey(API_KEY);

const msg = {
    to: "estebanferreccio@gmail.com",
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
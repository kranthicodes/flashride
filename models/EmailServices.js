const nodemailer = require('nodemailer');
const sendEmail = {};

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "flashride24x7@gmail.com",
        pass: "Flash@123"
    }
});

// contact us service
sendEmail.contactusMail = function (from, subject, text, cb) {

    var mailOptions = {
        from: "flashride24x7@gmail.com",
        to: "flashride24x7@gmail.com",
        subject: " Contact Query " + from + " : " + subject,
        html: '<h3>Name : ' + subject + '</h3><p><b>Email:</b> ' + from + '</p><p><b>Message:</b> ' + text + '</P>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(error, null)
        } else {
            cb(null, info);
        }
    });
}

// subscribe mail service
sendEmail.subscribeMail = function (email, cb) {

    var mailOptions = {
        from: "flashride24x7@gmail.com",
        to: "flashride24x7@gmail.com",
        subject: "Subscribe E-Mail : " + email,
        html: "<p>given email is subscribe for latest news and update and offers <b>" + email + "</b></p>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(error, null)
        } else {
            cb(null, info);
        }
    });
}

// support mail service
sendEmail.supportMail = function (data, cb) {

    var mailOptions = {
        from: "flashride24x7@gmail.com",
        to: "flashride24x7@gmail.com",
        subject: "Customer Issue regarding  #" + data.subject,
        html: "<h4> Query regarding : " + data.subject + "</h4><p> User Details :</p><p> Name:" + data.name +
            "</P><p> Email :" + data.email + "</p><p> Phone number: " + data.phoneno + "</p><p> Message :" + data.message + "</p>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            cb(error, null)
        } else {
            cb(null, info);
        }
    });
}







module.exports = sendEmail;
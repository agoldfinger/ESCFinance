import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email'

Meteor.methods({
    sendEmail(to, from, subject, text) {
        check([to, from, subject, text], [String]);

        Meteor.defer(() => {
            Email.send({
                to: to,
                from: from,
                subject: subject,
                text: text
            });
        });
    },
    sendEmailWithCC(to, from, subject, text, cc) {
        check([to, from, subject, text, cc], [String]);

        Meteor.defer(() => {
            Email.send({
                to: to,
                from: from,
                subject: subject,
                text: text,
                cc: cc
            });
        });
    }
});

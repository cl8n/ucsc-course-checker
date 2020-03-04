const request = require('request-promise-native');
const config = require('./config.json');

function sendNotification(content) {
    return request({
        uri: 'https://api.pushed.co/1/push',
        method: 'POST',
        form: {
            app_key: config.notification_key,
            app_secret: config.notification_secret,
            content,
            target_type: 'app'
        }
    });
}

module.exports = { sendNotification };

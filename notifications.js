const request = require('request-promise-native');
const config = require('./config.json');

function sendDiscord(webhookObject) {
    return request({
        uri: config.discord_webhook,
        method: 'POST',
        json: webhookObject
    });
}

function sendPushed(content) {
    return request({
        uri: 'https://api.pushed.co/1/push',
        method: 'POST',
        form: {
            app_key: config.pushed_key,
            app_secret: config.pushed_secret,
            content,
            target_type: 'app'
        }
    });
}

module.exports = { sendDiscord, sendPushed };

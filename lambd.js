'use strict'
const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-west-2"
});

exports.handler = function (event, context, callback) {
    //console.log(JSON.stringify(`Event: event`))
    // Lambda Code Here
    // context.succeed('Success!')
    // context.fail('Failed!')

    const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08" });
    const params = {
        TableName: "Users",
        Key: {
            id: {
                S: "123456"
            }
        }
    }

    ddb.getItem(params, (error, data) => {
        if (error) {console.log(error)};
        console.log(data);
    });
};


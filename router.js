const router = require('express').Router();


router.get('/objects', (_, res) => {
    let data = {
        datos: ["Primer ítem", "Segundo", "Tercero"]
    };
    console.log("Data was required by client");
    res.json(data);
});


router.get('/dynamo', (_, res) => {

    var AWS = require("aws-sdk");
    console.log("Ingreso en dynamo");
    const uuidv1 = require('uuid').v1;

    AWS.config.update(
        require('./config').aws_remote_config
    );
    console.log(require('./config').aws_remote_config, require('./config').aws_table_name);

    var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10'});

    var params = {
        TableName: "dos",
        Item: {
            "dos": {
                id: uuidv1(),
                title: "Terminator",
                year: 1984
            }
        }
    };

    var params_scan = {
        TableName: require('./config').aws_table_name
    };

    console.log(params);

    docClient.put(params, (err, data) => {
        if (err) {
            console.error("Unable. Error JSON:", JSON.stringify(err, null, 2));
            res.json({msg:err});
        } else {
            console.log("PutItem succeeded", data);
            res.json({msg:"Ok!"});
        };
    });
});

module.exports = router;
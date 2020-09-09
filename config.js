const env = require('./env.json');

module.exports = {
    aws_table_name: "dos",
    aws_local_config: {
      region: "local",
      endpoint: "http://localhost:8000"
    },
    aws_remote_config: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_ACCESS_KEY,
        region: 'us-east-2',
    }
};
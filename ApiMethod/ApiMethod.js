var Client = require('jts-api-gateway').Client,
    client = new Client('24572213','af3195d592d41e8b5aa3737f12e8e468'),
    co = require('co');
    client.stage = 'TEST';
exports.client = client;

exports.post = function(url,para){
    return co(function *(){
        var postdata = {
            headers: {
                'accept': 'application/json',
                'content-type': Client.CONTENT_TYPE_JSON,
                'jts-token': '',
                'jts-version': '1.0',
                'jts-appId': 'h5',
                'jts-channel': 'jts'
            },
            signHeaders: para._signHeaders || {},
            query: para.query || {},
            data: para.body || {},
            timeout: 15000
        };
        var result = {};
        try{
            result = yield client.post(url, postdata); 
        }catch (e){
            result.errCode = e.code;
            result.msg = e.msg;
        }
        return result;
    });
}
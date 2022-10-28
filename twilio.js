const accountSid = 'AC90e0ccf446b69e02ecab20b09869d65e';
const authToken = '9e26fb75467e3406f025071ae19e4484';

const client = require('twilio')(accountSid, authToken);

const customerMessage = function(selected){
client.messages
      .create({
         body: `Your order is complete estimated time ${selected}`,
         from: '+15857281874',
         to: '+16134028175'
       })
      .then(message => console.log(message.sid))
      .done();
}
const adminMessage = function(){
  client.messages
      .create({
         body: 'Order incoming',
         from: '+15857281874',
         to: '+16134028175'
       })
      .then(message => console.log(message.sid))
      .done();
}
module.exports = { adminMessage, customerMessage };

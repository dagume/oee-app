const socket = require('../socketio')
const { setRPushInCache } = require('./models/redisRepository');


socket.on('machine:history', (data) => {
  console.log(data.time);
  const key = 'history'; //ENV
  setRPushInCache(key, data.time);
});


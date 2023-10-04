const socket = require('../socketio')
const { setRPushInCache, getLastLRangeInCache } = require('./models/redisRepository');


socket.on('machine:history', (data) => {
  console.log(data.time);
  const key = 'history-test4'; //ENV
  setRPushInCache(key, data.time);
});

socket.on('machine:init', async (data) => {
  const key = 'history-test4'; //ENV
  const lastData = await getLastLRangeInCache(key);
  console.log(lastData);
  if (lastData === undefined) {
    setRPushInCache(key, data.time);
    socket.emit('timer:start', data.time);
  }else{
    socket.emit('timer:start', lastData);
  }
});


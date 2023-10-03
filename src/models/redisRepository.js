const redis = require('../../redis')

const setRPushInCache = (key, value) => {
  console.log('dentrodelRepo: ' + key + ' ' + value);
  redis.rpush(key, value)
    .then(() => {
      console.log(`Clave-valor enviado a Redis: ${key} = ${value}`);
    })
    .catch((error) => {
      console.error('Error al enviar la clave-valor a Redis:', error);
    });
}

module.exports = {
  setRPushInCache,
};

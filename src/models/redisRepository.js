const redis = require('../../redis')


 const getLastLRangeInCache = async (key) => {
  const result = await redis.lrange(key, -1, -1)
    .catch(error => {
      console.error('Error al obtener el último valor:', error);
    });
    return result[0];
}

const setRPushInCache = (key, value) => {
  redis.rpush(key, value)
    .then(() => {
      console.log(`Clave-valor enviado a Redis: ${key} = ${value}`);
    })
    .catch((error) => {
      console.error('Error al enviar la clave-valor a Redis:', error);
    });
}

module.exports = {
  getLastLRangeInCache,
  setRPushInCache,
};

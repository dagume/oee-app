const Redis = require('ioredis');

/**
 * Redis URL for connecting to Redis server
 * @type {string}
 */
const REDIS_URL = 'redis://127.0.0.1:6379';

/**
 * Redis client for interacting with Redis server
 * @type {Redis}
 */
module.exports = new Redis(REDIS_URL);



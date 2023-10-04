const Queue = require('bull');

/**
 * Queue for processing jobs
 * @type {Queue}
 */
module.exports = new Queue('queue_jobs', REDIS_URL);

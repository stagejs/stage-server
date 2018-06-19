/**
 * 
 * @desc LRU-Cache
 * @date 2018-06-19
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2018-06-19 by gavinning
 *
 */

const LRU = require('lru-cache')
const options = { max: 500, maxAge: (1000 * 60 * 60) * 24 }
const cache = module.exports = LRU(options)

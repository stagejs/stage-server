/**
 * 
 * @desc 
 * @date 2018-06-15
 * @author gavinning gavinning@qq.com
 *
 * @history
 *    created at 2018-06-15 by gavinning
 *
 */

const router = require('koa-router')()

module.exports = function(app) {
    [
        './home',
        './users',
        './api/mods',
        './api/stage',
    ]
    .map(uri => require(uri))
    .forEach(router => {
        app.use(router.routes(), router.allowedMethods())
    });

    // [
    //     './api/mods',
    //     './api/stage',
    // ]
    // .map(uri => require(uri))
    // .forEach(subdomain => {
    //     app.use(subdomain.routes())
    // })
}
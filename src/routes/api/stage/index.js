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

const reps = find('lib/reps')
const compiler = find('lib/compiler')
const router = module.exports = require('koa-router')()

router

.prefix('/api/v1/stage')

.get('/', ctx => {
    ctx.body = "it's work!" 
})

.post('/project', ctx => {
    const project = ctx.request.body

    project.mods = reps.getMods(project.mods)
    // 执行编译
    compiler(project, {}, (err) => {
        console.log(err, 'done')
    })

    ctx.body = project
})
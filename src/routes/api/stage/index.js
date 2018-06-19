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

// todo
// 待优化此处应为创建项目路由 不仅仅是编译任务
.post('/project', async ctx => {
    const project = ctx.request.body

    if (!project || !project.mods) {
        ctx.status = 400
        ctx.body = {
            code: 400,
            message: '参数错误'
        }
        return
    }

    // 格式化.mods参数，获取组件文件内容
    project.mods = reps.getMods(project.mods)

    try{
        // 执行编译
        let res = await compiler.compile(project)

        // 编译成功
        if (res.stdout) {
            ctx.status = 200
            ctx.body = {
                code: 0,
                message: 'ok',
                data: {
                    compileLog: res.stdout
                }
            }
            console.log(res.stdout)
            return
        }
        // 编译错误
        if (res.stderr) {
            ctx.status = 510
            ctx.body = {
                code: 510,
                message: res.stderr
            }
            console.error(res.stderr)
            return
        }
    }
    catch(err) {
        ctx.status = 500
        ctx.body = {
            code: 500,
            message: err.message
        }
        console.error(err)
        return
    }
})
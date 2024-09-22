import { createGetRoutes, setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as fileRoutes } from 'vue-router/auto/routes'

declare module 'vue-router' {
	// 在这里定义你的 meta 类型
	// eslint-disable-next-line no-unused-vars
	interface RouteMeta {
		title?: string
		layout?: string
	}
}

// 重定向 BASE_URL
fileRoutes.flat(Infinity).forEach((route) => {
	route.path = safeResolve(route.path)
})

export const router = createRouter({
	history: createWebHistory(),
	routes: setupLayouts(fileRoutes),
})
// 添加路由守卫 ，你可以在这里书写对路由的管控
// 也可以在外面封装一些函数来调用
router.beforeEach((to, from, next) => {
	console.log('离开路由之前，想干点什么呢')
	next(true) // 啥都没写，默认放行即可 等待你来书写
})
// 路由跳转成功之后干什么，通常是进行设置全局状态
router.afterEach((to, from, next) => {
	console.log('离开路由之后，想干点什么呢')
})
export const getRoutes = createGetRoutes(router)

export default router

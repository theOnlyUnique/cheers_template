import Tov from './presets'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [Tov()],
	server: {
		host: '0.0.0.0', //ip地址
		port: 7474, // 设置服务启动端口号
		open: false, // 设置服务启动时是否自动打开浏览器
	},
	define: {
		__Admin_VERSION__: JSON.stringify(process.env.npm_package_version), // 定义一些全局变量
	},
})

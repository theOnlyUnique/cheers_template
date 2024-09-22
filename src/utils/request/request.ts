import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
//  几乎是空白的模板 等待你来书写
const creatAxios = (config?: InternalAxiosRequestConfig) => {
	console.log('打印配置信息', import.meta.env)
	const instance: AxiosInstance = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
		timeout: import.meta.env.VITE_TIMEOUT,
		withCredentials: true, // default-false 跨域请求是否需要凭证
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		...config,
	})
	// 重写请求拦截器规则
	instance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			// 在发送请求之前做些什么
			console.log('在发送请求之前做些什么呢？')
			return config
		},
		(error: any) => {
			// 对请求错误做些什么
			console.log('对请求错误做些什么呢？')
			return Promise.reject(error)
		},
	)
	// 重写响应拦截器规则
	instance.interceptors.response.use(
		(response: any) => {
			// 对响应数据做点什么
			console.log('对响应数据做点什么呢？', response.data.msg)
			if (response.data.code !== 200) {
				window.$message.error(response.data.msg)
			} else {
				window.$message.success(response.data.msg)
			}
			return response
		},
		(error: any) => {
			// 对响应错误做点什么
			console.log('对响应错误做点什么呢？', error)
			window.$message.error('响应出错了！！')
			return Promise.reject(error)
		},
	)
	return instance
}

export { creatAxios }

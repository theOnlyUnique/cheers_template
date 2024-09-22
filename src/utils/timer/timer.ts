import dayjs from 'dayjs'
// 时间转换的函数，记得下载依赖
export function formatTime(
	precessTime: string | Date,
	formatType = 'YYYY-MM-DD HH:mm:ss',
) {
	return dayjs(precessTime).format(formatType)
}

export const transformTime = (
	time: string | Date,
	types = 'YYYY-MM-DD HH:mm:ss',
) => {
	return dayjs(time).format(types)
}

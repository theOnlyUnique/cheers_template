import { h } from 'vue'
import { Icon } from '@iconify/vue'
import { NIcon } from 'naive-ui'

/** 创建icon为VNode结点 */
export function iconifyRender(icon: string, color?: string, size?: number) {
	const style: { color?: string; size?: string } = {}
	if (color) {
		style.color = color
	}
	if (size) {
		style.size = `${size}px`
	}
	return () => h(NIcon, null, { default: () => h(Icon, { icon, style }) })
}

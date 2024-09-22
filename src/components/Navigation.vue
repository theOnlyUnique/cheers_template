<script setup lang="ts">
import { getRoutes } from '@/plugins/router'
import { SwitchIcon } from 'vue-dark-switch'

const { te, t } = useI18n()

const routes = getRoutes()
	.filter((r) => !r.path.includes('notFound'))
	.map((r) => {
		let { path, name } = r
		if (path === safeResolve('/')) {
			return { path, name: 'home' }
		}

		if (!name) {
			name = path
		}

		return { path, name: name.toString().slice(1).replaceAll('/', ' · ') }
	})
</script>

<template>
	<nav
		aria-label="Site Nav"
		class="mx-auto h-80px max-w-3xl flex items-center justify-between p-4"
	>
		<div class="flex items-center justify-center space-x-5">
			<SwitchIcon unmount-persets />
			<a>七思工作室前端快速开发模板</a>
		</div>

		<ul class="flex items-center gap-2 text-sm font-medium">
			<li v-for="r of routes" :key="r.path" class="hidden !block">
				<RouterLink class="rounded-lg px-3 py-2" :to="r.path">
					{{ te(r.name) ? t(r.name) : r.name }}
				</RouterLink>
			</li>



			<li class="hidden !block">
				<Dropdown />
			</li>
		</ul>
	</nav>
</template>

<template>
	<div>
		<div class="grid grid-cols-3">
			<a href="https://github.com/dishait/tov-template" target="_blank">
				<img :src="safeResolve('/logo.png')" class="logo" alt="Vite logo" />
			</a>
			<a href="https://vitejs.dev" target="_blank">
				<img :src="safeResolve('/vite.svg')" class="logo" alt="Vite logo" />
			</a>
			<a href="https://vuejs.org/" target="_blank">
				<img :src="safeResolve('/vue.svg')" class="logo vue" alt="Vue logo" />
			</a>
		</div>
		<HelloWorld msg="Tov + Vite + Vue" />
	</div>
</template>

<script setup lang="ts">
import {axiosRequest} from "~/utils/request"

onMounted(()=> {
	console.log('主界面初始化成功！！');
	axiosRequest.post("localhost:1234",{}).then((res) => {
		console.log('打印响应数据',res.data);
	})
})
</script>
<style>
a {
	color: rgba(37, 99, 235);
}

p {
	padding: 0 10px;
}

.logo {
	width: 10em;
	height: 10em;
	padding: 1.5rem;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

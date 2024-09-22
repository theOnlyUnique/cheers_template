<template>
	<n-config-provider :theme="naiveTheme">
		<n-modal-provider>
			<n-message-provider>
				<router-view />
				<TheMessage></TheMessage>
			</n-message-provider>
		</n-modal-provider>
	</n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { naiveTheme } from 'vue-dark-switch'
</script>

<style scoped></style>

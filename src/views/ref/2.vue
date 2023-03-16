<template>
	<div>{{ info.age }}</div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
export default {
	setup() {
		const ageRef = ref(20)
		const info = reactive({
			age: ageRef
		})
		setInterval(() => {
			ageRef.value += 1
		}, 1000)
		
		return {
			info
		}
	},
}
</script>
<template>
	<div>{{ ageRef }}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
	setup() {
		const ageRef = ref(20)

		setInterval(() => {
			ageRef.value += 1
		}, 1000)
		
		return {
			ageRef
		}
	},
}
</script>
<template>
	<div>{{ state.age }} --- {{ ageRef }}</div>
</template>

<script lang="ts">
import { toRef, reactive } from 'vue'
export default {
	setup() {
		const state = reactive({
			name: 'JL',
			age: 18
		})
		const ageRef = toRef(state, 'age')
		setTimeout(() => {
			state.age = 20
		}, 1000)
		
		setTimeout(() => {
			ageRef.value = 21
		}, 2000)
		
		return {
			state,
			ageRef
		}
	},
}
</script>
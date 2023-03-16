<template>
	<div>{{ name }}---{{ age }}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
	setup() {
		const state = reactive({
			name: 'JL',
			age: 18
		})

		const stateRefs = toRefs(state)

		setTimeout(() => {
			state.age = 20
		}, 1000)

		setTimeout(() => {
			stateRefs.age.value = 21
		}, 2000)

		return stateRefs
	},
}
</script>
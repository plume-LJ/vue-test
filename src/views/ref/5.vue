<template>
	<div>x:{{x}} y:{{y}}</div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'
export default {
	setup() {
		function test() {
			const state = reactive({
				x: 1,
				y: 2
			})
			return toRefs(state)
		}
		const {x, y} = test()

		setTimeout(() => {
			x.value = 2
		}, 1000)

		return {
			x,
			y
		}
	}
}
</script>
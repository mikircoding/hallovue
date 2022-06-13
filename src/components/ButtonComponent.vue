<template>
	<div class="button">
		<button @click="showAlert"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
		<button @click="tekanTombol"
			class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">Cancel</button>
	</div>
</template>

<script>
	export default {
		methods: {
			showAlert() {
				// menggunakan sweetalert2
				this.$swal('Saved Successfully');
			},
			tekanTombol() {
				this.$swal('tombol ditekan!');
				//this.$toasted.show('hello billo')
			}
		}
	}
</script>

<style>
</style>

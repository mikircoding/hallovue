<template>
	<div class="create">
		<h2>create post</h2>
		<form @submit.prevent="store">
			<input type="text" v-model="post.title">
			<div v-if="validation.title">
				{{ validation.title[0] }}
			</div>
			<input type="text" v-model="post.content">
			<div v-if="validation.content">
				{{ validation.content[0] }}
			</div>
			<button type="submit">SIMPAN</button>
		</form>
	</div>
</template>

<script>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	import axios from 'axios'

	export default {
		setup() {

			//state post
			const post = reactive({
				title: '',
				content: ''
			})

			//state validasi
			const validation = ref([])

			//vue router
			const router = useRouter()

			//method store
			function store() {

				//definisikan variabel
				let title = post.title
				let content = post.content

				//interaksi ke server backend
				axios.post('http://localhost/8000/api/post', {
					title: title,
					content: content
				}).then(() => {
					//redirect ke index jika berhasil
					router.push({
						name: 'post.index'
					})

				}).catch(error => {
					//jika gagal
					//assign state validation dengan error
					validation.value = error.response.data
				})
			}
			//agar dapat digunakan dalam template hrml maka harus di return
			return {
				post,
				validation,
				router,
				store
			}
		}
	}
</script>

<style>
</style>

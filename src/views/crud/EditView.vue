<template>
	<div class="edit">
		<h2>edit post</h2>
		<form @submit.prevent="update">
			<input type="text" v-model="post.title">
			<div v-if="validation.title">
				{{ validation.title[0] }}
			</div>
			<input type="text" v-model="post.content">
			<div v-if="validation.content">
				{{ validation.content[0] }}
			</div>
			<button type="submit">UPDATE</button>
		</form>
	</div>
</template>

<script>
	import {
		reactive,
		ref,
		onMounted
	} from 'vue'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	import axios from 'axios'

	export default {
		setup() {
			//state post
			const post = reactive({
				title: '',
				content: ''
			})

			//state validation
			const validation = ref([])

			//vue router
			const router = useRouter()

			//vue route
			const route = useRoute()

			//mounted
			onMounted(() => {
				//get api untuk di tampilkan dalam form
				axios.get(`http://localhost:8000/api/post/${route.params.id}`)
					.then(response => {
						//asign
						post.title = response.data.data.title
						post.content = response.data.data.content
					}).catch(error => {
						console.log(error.response.data)
					})
			})

			//method update
			function update() {
				let title = post.title
				let content = post.content

				//kirim data ke server backend
				axios.put(`http://localhost:8000/api/post/${route.params.id}`, {
					title: title,
					content: content
				}).then(() => {
					//arahkan jika berhasil update
					router.push({
						name: 'post.index'
					})
				}).catch(error => {
					//tampilkan jika ada error
					validation.value = error.response.data
				})
			}

			return {
				post,
				validation,
				router,
				update
			}
		}
	}
</script>

<style>
</style>

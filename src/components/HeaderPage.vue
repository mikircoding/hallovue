<template>
	<div class="header">
		<h1>KERJADIMANAPUN</h1>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link :to="{name: 'loginv'}">LoginV</router-link> |
			<router-link :to="{name: 'registerv'}">RegisterV</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/faq">Faq</router-link> |
			<router-link to="/term">Terms</router-link> |
			<router-link to="/crud">Crud</router-link> |
			<router-link to="/login">Login</router-link> |
			<router-link to="/register">Register</router-link>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'HeaderComponent'
	}
</script>

<style>
</style>

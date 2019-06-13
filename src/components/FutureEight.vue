<template lang="pug">
.hello
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}

	h2 One Hundred Years of Lung Disease
	H3 Vue Material With Webpack
	h4
		i.fa.fa-street-view.fa-5x
	md-button.md-raised.md-primary(to="/")
		md-icon local_library
		| &nbsp; High Marquez
</template>

<script>
export default {
	name: 'FutureSix',
	data () {
		return {
			msg: 'Love in a Time of Cholera'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>

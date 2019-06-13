<template lang="pug">
.hello
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}

	h2 Cloned in San Pavlov 2018
	H3 Vue Material With Webpack
	h4
		i.fa.fa-street-view.fa-5x

	md-button.md-primary(to="/")
		i.material-icons directions_bike
		| &nbsp; Navegar Preciso
</template>

<script>
export default {
	name: 'FutureSix',
	data () {
		return {
			msg: 'The Past and Other Lies'
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

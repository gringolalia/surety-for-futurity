<template lang="pug">
.hello
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}
	h2 O Perfeito do Passado
	H3 Vue Material With Webpack
	h4
		router-link(to='/past')
		i.fa.fa-strikethrough.fa-3x

	md-button.md-raised Oprima
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Adeus, Mundo Imundo'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
	min-height: 100vh;
	text-align: justify;
	text-align-last: center;
	padding: 50px;
}

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

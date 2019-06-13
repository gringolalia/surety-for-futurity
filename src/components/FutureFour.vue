<template lang="pug">
.hello(style="height: 100vh;")
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}

	h2 Romance e Depois Um Filme
	H3 Clonado na Samboja 2018
	h4
		i.fa.fa-street-view.fa-5x
	md-button.md-primary.md-raised(to="future-eight")
		md-icon waves
		| &nbsp; A Sci-Fi Maitai
	blockquote O Sambojano e Superusuário é o Gran Bretônio
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'A Wrinkle in Time'
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

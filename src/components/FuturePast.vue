<template lang="pug">
.hello
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}
	h2 Noites em Cetim Branco 1967
	H3 The Future Will Be Perfectly Tense
	h4 Projeto VM Clonado na Samboja 2018
	md-button.md-primary.md-raised
		i.material-icons waves
		| &nbsp; End Games
	p(style="margin-top: 30px")
		i.fa.fa-strikethrough.fa-4x
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Days of Future Passed'
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

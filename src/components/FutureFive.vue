<template lang="pug">
.hello
	img(src="../assets/biohazard.svg" width="175px")

	h1 {{ msg }}

	h2 Herbert George Wells 1895
	H3 Clássico das Letras Gringolalianas
	h4
		i.fa.fa-street-view.fa-5x

	md-button.md-primary(to="/future-two")
		md-icon directions_bike
		| &nbsp; Morelocks Selvagens

	h4 Clonado pelo Gran Bretônio 2018 na Cidade de San Pavlov
</template>

<script>
export default {
	name: 'FutureFive',
	data () {
		return {
			msg: 'The Time Machine'
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

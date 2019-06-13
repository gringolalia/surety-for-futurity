	<template lang="pug">
.hello
	img(src="../assets/biohazard.svg" width="125px")
	h1 {{ msg }}

	h2 A Fascist Regime
	H3 No Future for Vue?
	h4
		i.fa.fa-street-view.fa-5x
	md-button.md-raised.md-primary(to="/")
		md-icon mic
		| &nbsp; A Lazy Sid
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
		msg: 'God Save The Queen'
		}
	}
}
</script>

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

<template lang="pug">
.hello
	img(src='../assets/biohazard.svg', width='175px')
	h1 {{ msg }}

	h2 Cloned in San Pavlov 2018
	H3 Vue Material With Homemade Routing
	blockquote Passion has helped us but can do so no more. <br />It will in the future be our enemy.
	.caption.text-center &mdash; Abraham Lincoln

	md-button.md-primary(to="future-six" style="margin-top: 30px")
		i.fa.fa-microphone.fa-2x
		| &nbsp; Storied Oratory
</template>

<script>
export default {
	name: 'FutureLincoln',
	data () {
		return {
			msg: 'Four Score and Seven Years Ago'
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

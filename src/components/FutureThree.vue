<template lang="pug">
.md-layout
	.md-layout-item
		img(src="../assets/biohazard.svg" width="175px")
		h1 {{ msg }}

		h2 Very Important, Being on Time
		H3 Vue Material Clonado na Samboja 2018
		h4
			i.fa.fa-street-view.fa-5x
		md-button.md-primary.md-raised
			md-icon access_time
			| &nbsp; Ticking Your Tock

	.md-layout-item
		img(src="../assets/biohazard.svg" width="175px")
		h1 {{ msg }}

		h2 Boozy Beggar Heidegger
		H3 Vue Material Clonado na Samboja 2018
		h4
			i.fa.fa-street-view.fa-5x
		md-button.md-primary.md-raised
			md-icon access_time
			| &nbsp; Ticking Your Tock

</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Sein Und Zeit'
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

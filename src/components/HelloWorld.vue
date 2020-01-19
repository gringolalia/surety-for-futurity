<template lang="pug">
.hello
	.md-layout
		.md-layout-item
			img(src='../assets/biohazard.svg', width='175px')
			h1 {{ msg }}
			h2 Devo Lançou a Bolacha em 1979
			h3 Cloned in San Pavlov 2018
			md-button.md-raised.md-primary(to="future-one")
				i.fa.fa-transgender.fa-lg
				| &nbsp; Are We Not Men?
			blockquote «Time keeps on slipping<br> slipping slipping<br> into the future»

		.md-layout-item

			img(src='../assets/biohazard.svg', width='175px')
			h1 {{ msg }}
			h2 Devo Lançou a Bolacha em 1979
			h3 Cloned in San Pavlov 2018
			md-button.md-raised.md-primary(to="future-one")
				i.fa.fa-transgender.fa-lg
				| &nbsp; Are We Not Men?
			blockquote «Time keeps on slipping<br> slipping slipping<br> into the future»

</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Duty Now For the Future'
		}
	}
}
</script>


<style lang="scss">
@import "~vue-material/dist/theme/engine";

.hello {
	min-height: calc(100vh - 75px);
	overflow: visible;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: justify;
	text-align: center;
	padding: 50px;
}

.md-layout-item {
	margin: 50px;
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

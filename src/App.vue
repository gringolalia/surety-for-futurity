<template lang="pug">
#app
	.page-container.md-layout-column(style="height: 100vh")
			md-toolbar.md-primary
				md-button.md-icon-button(@click='showNavigation = true')
					md-icon.md-primary menu

				span.md-title
					i.fas.fa-chess.fa-2x
					| &nbsp;&nbsp;Engenho Novo LLC

				.md-toolbar-section-end
					md-button.md-icon-button(@click='showNavigation = true')
						i.material-icons.md-primary my_location

			md-drawer(:md-active.sync='showNavigation' style="background-color: #607d8b; color: white;" md-fixed)
				md-toolbar
					span.md-title
						i.fas.fa-cogs.fa-2x
						| &nbsp;&nbsp; Engenho Novo LLC

				md-list(@click="showNavigation = false" style="background-color: #2f4f4f;")
					md-list-item(to="/")
						md-icon all_inclusive

						span.md-list-item-text Duty Now for the Future

					md-list-item(to="/future-one")
						md-icon flash_on

						span.md-list-item-text A Brief History of Time

					md-list-item(to="/future-two")
						md-icon local_bar

						span.md-list-item-text No Future for You

					md-list-item(to="/future-three")
						md-icon router

						span.md-list-item-text Being and Time

					md-list-item(to="/future-four")
						md-icon g_translate

						span.md-list-item-text A Wrinkle in Time

					md-list-item(to='/past')
						md-icon domain

						span.md-list-item-text
							| The Future Will Be Tense

					md-list-item(to="/future-five")
						md-icon local_dining
						span.md-list-item-text The Time Machine

					md-list-item(to="/future-six")
						md-icon restaurant
						span.md-list-item-text The Past and Other Lies

					md-list-item(to="/future-seven")
						md-icon rowing
						span.md-list-item-text Once Upon a Time in America

					md-list-item(to="/future-eight")
						md-icon tv
						span.md-list-item-text Love in the Time of Cholera

					md-list-item(to="/lincoln")
						md-icon comment
						span.md-list-item-text The Once and Future King

			md-content(style="margin-top: 25px")
				router-view
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>


<style lang="scss">

.md-layout {
	height: 100vh;
	overflow: visible;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: justify;
	text-align-last: center;
	padding: 50px;
}

.md-layout-item {
	margin: 50px;
}
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 350px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }

#app {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	// margin-top: 60px;
a {
  color: #FFF;
}
a:hover {
   color: silver;
}
}
</style>

<template>
  <div id="app">
    <header>
      <div class="header">
        <div class="logo">
          <a href="/#/">BitLego</a>
        </div>
        <div>
          <ul>
            <li v-for="(navigationMenu, index) in navigationMenus" v-bind:navigationMenu="navigationMenu" v-bind:key="index">
							<a :href="navigationMenu.path">{{navigationMenu.title}}</a>
						</li>
          </ul>
        </div>
      </div>
    </header>
    <nav>
      <div>

      </div>
    </nav>
    <article>
      <div>
        <router-view/>
      </div>
    </article>
    <footer>
      <div>

      </div>
    </footer>
    <div class="page-transformer">
    </div>
  </div>
</template>

<script>
export default {
	name: 'app', 
	data() { 
		return {
			navigationMenus: [
				{
					title: 'login', 
					path: '/#/login/'
				}, 
				{
					title: 'join', 
					path: '/#/join/'
				} 
			], 
			apiServer: 'http://ss5h.tonix.kr:9949'
		}
	}, 
	watch: {
		'$route': 'initializing'
	}, 
	methods: {
		initializing: function() {

		}, 
		formInitializing: function() {
			
		}, 
		foreachElementsByTag: function(tagName, callback) {
			var elements = document.getElementsByTagName(tagName);
			foreachElements(elements, callback);
		}, 
		foreachElements: function(elements, callback) {
			for (element in elements) {
				if (elements[element] instanceof HTMLElement) {
					callback(elements[element]);
				}
			}
		}
	}
}
</script>

<style>
/* Initializing */
* {
  outline: none;
  cursor: default;
  user-select: none;
  -webkit-transition: .2s;
  transition: .2s;
}

::-webkit-selection, 
::-moz-selection, 
::selection {
  color: white;
  background: #212121;
}

body {
  margin: 0px;
  padding: 0px;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Application Default */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Palette */
.dark-primary-color    { background: #D32F2F; }
.default-primary-color { background: #F44336; }
.light-primary-color   { background: #FFCDD2; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #FFC107; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; }

/* Syntace */
header {
  background: #D32F2F;
  color: #FFFFFF;
  text-align: inherit;
}

nav {

}

article {

}

footer {
  background: #D32F2F;
  color: #FFFFFF;
  text-align: inherit;
}

/* Custom */
header .header {
  max-width: 935px;
  margin: 0px auto;
}

header .logo a {
  padding: 14px 16px;
  float: left;
}

header .logo a:hover {
  background: #F44336;
}

header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

header li {
  float: right;
}

header li a {
  display: block;
  padding: 14px 16px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
}

header li a:hover {
  background: #F44336;
}

.container {
  max-width: 935px;
  margin: 40px auto;
}

.content {
  width: 400px;
  margin: 10px auto;
}

.form-content {
  width: 400px;
  min-height: 28px;
  margin: 15px 0px;
}

.form-content * {
  min-height: 25px;
}

.form-content label {
  display:inline-block;
  width: 130px;
  text-align: left;
}

.form-content input {
  width: 250px;
}

.form-content input[type=text], 
.form-content input[type=email], 
.form-content input[type=password] {
  border: none;
  border-bottom: 1px solid #212121;
  padding: 1px 5px;
}

.form-content input[type=text]:focus, 
.form-content input[type=email]:focus, 
.form-content input[type=password]:focus {
  border-bottom: 2px solid #212121;
}

.form-content input[type=submit] {
  text-transform: uppercase;
  color: white;
  width: 80px;
  border: none;
  background: #FFC107;
  float: right;
}

.form-content input[type=submit]:hover {
  opacity: .8;
}

.form-content input[type=submit]:active {
  opacity: .6;
}

.page-transformer {
  display: none;
  top: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
}

.page-transformer.show {
  display: block;
}

.page-transformer.action {
  background: white;
}
</style>

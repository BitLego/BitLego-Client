<template>
  <div id="app">
    <header>
      <div class="header">
        <div class="logo">
          <a class="hoverable" href="/#/">BitLego</a>
        </div>
        <div>
          <ul>
            <li v-for="(navigationMenu, index) in navigationMenus" v-bind:navigationMenu="navigationMenu" v-bind:key="index">
							<a class="hoverable" :href="navigationMenu.path">{{navigationMenu.title}}</a>
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
        Bit-Lego
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
      console.log('initializing();');
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

html, body {
  margin: 0px;
  padding: 0px;
  height: 100%;
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
  height: 100%;
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
  height: 46px;
  background: #D32F2F;
  color: #FFFFFF;
  text-align: inherit;
}

nav {

}

article {
  min-height: calc(100% - 92px - 46px);
  display: inline-block;
}

footer {
  height: 92px;
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

.timeline-container {
  width: 600px;
  margin: 10px auto;
}

.timeline-content {
  padding: 20px 10px;
  margin: 20px 0px;
}

.timeline-content > * {
  padding: 10px;
}

.timeline-header {
  height: 30px;
}

.timeline-profile {
  float: left;
}

.timeline-profile-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}

.timeline-profile-name {
  display: inline-block;
}

.timeline-follow {
  width: 70px;
  height: 20px;
  float: right;
  font-size: 12px;
}

.timeline-follow.follow .timeline-follow-icon {
  background: rgb(82, 82, 82);
}

.timeline-follow-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.timeline-follow-icon:before {
  content: '\1F464';
  font-size: 15px;
}

.timeline-music-title {
  margin-bottom: 15px;
}

.timeline-music-sheet {
  height: 50px;
  background: #FFC107;
}

.timeline-music-start {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  margin: 10px;
  display: inline-block;
}

.timeline-music-start:before {
  color: #FFC107;
  content: '\25BA';
  font-size: 25px;
  padding: 5px;
}

.timeline-footer {
  height: 20px;
}

.timeline-footer > * {
  display: inline-block;
  margin: 0px 5px;
}

.timeline-like {
  width: 70px;
  height: 20px;
  float: left;
  font-size: 12px;
}

.timeline-like-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.timeline-like-icon:before {
  content: '\2764';
  font-size: 14px;
}

.timeline-comment {
  width: 100px;
  height: 20px;
  float: left;
  font-size: 12px;
}

.timeline-comment-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
}

.timeline-comment-icon:before {
  content: '\1F4AC';
  font-size: 14px;
}

.timeline-comment-form {
  width: calc(100% - 200px);
  float: right;
}

.timeline-comment-form input[type=text] {
  width: calc(100% - 30px);
  border: none;
  border-bottom: 1px solid #212121;
}

.timeline-comment-form input[type=text]:focus {
  border-bottom: 2px solid #212121;
}

.timeline-comment-form input[type=submit] {
  width: 20px;
  height: 20px;
  text-transform: uppercase;
  color: white;
  border: none;
  background: #FFC107;
}

.timeline-content * {
  /* outline: 1px solid black; */
  vertical-align: middle;
}

/*  */

.wp100 {width: 100% !important;}
.wp90 {width: 90% !important;}
.wp80 {width: 80% !important;}
.wp70 {width: 70% !important;}
.wp60 {width: 60% !important;}
.wp50 {width: 50% !important;}
.wp40 {width: 40% !important;}
.wp30 {width: 30% !important;}
.wp20 {width: 20% !important;}
.wp10 {width: 10% !important;}

.hp100 {height: 100% !important;}
.hp90 {height: 90% !important;}
.hp80 {height: 80% !important;}
.hp70 {height: 70% !important;}
.hp60 {height: 60% !important;}
.hp50 {height: 50% !important;}
.hp40 {height: 40% !important;}
.hp30 {height: 30% !important;}
.hp20 {height: 20% !important;}
.hp10 {height: 10% !important;}

.fl {float: left !important;}
.fr {float: right !important;}

.tc {text-align: center !important;}

.dn {display: none !important;}
.di {display: inherit !important;}
.dinb {display: inline-block !important;}
.din {display: inline !important;}
.db {display: block !important;}

.tal {text-align: left !important;}
.tar {text-align: right !important;}
.tac {text-align: center !important;}

.card {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card.hoverable:hover {
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card.hoverable:focus-within {
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.hoverable {
  opacity: 1;
}

.hoverable:hover {
  opacity: 0.8;
}

.hoverable:active {
  opacity: 0.6;
}
</style>

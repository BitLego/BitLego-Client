<template>
  <div id="join" class="container">
    <h1>{{title}}</h1>
    <div class="content">
      <form :action="this.$parent.apiServer" method="post">
        <div v-for="(form, index) in forms" v-bind:form="form" v-bind:key="index" class="form-content">
          <label>{{form.label}}</label>
          <input :name="form.name" :type="form.type" :placeholder="form.label" value="" />
        </div>
        <div class="form-content">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data () {
    return {
			title: 'Join', 
			forms: [
				{
					label: 'Identity', 
					name: 'user_id', 
					type: 'text'
				},
				{
					label: 'Password', 
					name: 'password', 
					type: 'password'
				},
				{
					label: 'Password Confirm', 
					name: '', 
					type: 'password'
				},
				{
					label: 'Name', 
					name: 'name', 
					type: 'text'
				},
				{
					label: 'Email', 
					name: 'email', 
					type: 'email'
				},
				{
					label: 'Nickname', 
					name: 'nickname', 
					type: 'text'
				}
			]
    }
	}
}
</script>
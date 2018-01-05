<template>
  <div id="login" class="container">
    <h1>{{title}}</h1>
    <div class="content">
      <form v-on:submit.prevent :action="this.$parent.apiServer+'/user/login'" method="post">
        <div v-for="(form, index) in forms" v-bind:form="form" v-bind:key="index" class="form-content">
          <label>{{form.label}}</label>
          <input :name="form.name" :type="form.type" :placeholder="form.label" />
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
  name: 'Login',
  data () {
    return {
      title: 'Login',
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
        }
      ]
    }
  }
}
</script>
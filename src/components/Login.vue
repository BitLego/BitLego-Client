<template>
    <div id="login">
        <login></login>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Do Sign in this page!'
    }
  }
}

// <form @submit.prevent="login()">
//     <input type="text" placeholder="id입력해라~" v-model="user_id">
//     <input type="password" placeholder="패스워드! 패스해임마!" v-model="password">
//     <button type="submit">Login</button>
// </form>
// Vue.component('login', {
//     template : '#login-form',
//     data : function() {
//         return {
//             user_id : '',
//             password: ''
//         }
//     },
//     methods : {
//         login() {
//             console.log(this.user_id, this.password);
//             axios.post("ss5h.namsu.xyz:9949/user/login", {
//                 body: {user_id: this.user_id, password: this.password}
//             }).then(res =>{
//                 console.dir(res);
//             }).catch(e=>{
//                 console.dir(e);
//             })
//         }
//     }
// })

// window.onload = function() {
//     var login = new Vue({
//         el : '#login'
//     })
// }
</script>
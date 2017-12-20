Vue.component('login', {
    template : '#login-form',
    data : function() {
        return {
            user_id : '',
            password: ''
        }
    },
    methods : {
        login() {
            console.log(this.user_id, this.password);
            axios.post("ss5h.namsu.xyz:9949/user/login", {
                body: {user_id: this.user_id, password: this.password}
            }).then(res =>{
                console.dir(res);
            }).catch(e=>{
                console.dir(e);
            })
        }
    }
})

window.onload = function() {
    var login = new Vue({
        el : '#login'
    })
}
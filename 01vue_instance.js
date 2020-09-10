new Vue({
    el:"#vueapp",
    data:{
        name:"Prafful Daga",
        location:"Chennai",
        website:"https://vuejs.org/v2/guide/",
        tech:"React",
        mytemplate:"<a href='http://www.google.com'>Search....</a>"
    },
    methods:{
        welcome: function(moment){
            return moment + ", " + this.name
        }
    }
})
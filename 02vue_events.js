new Vue({
    el:"#vueapp", 
    data:{
        score: 8
    },
    methods:{
        decrement: function(value){
            this.score -= value
        }
    }
})
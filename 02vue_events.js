new Vue({
    el:"#vueapp", 
    data:{
        score: 8,
        xpos: 0,
        ypos: 0,
        name:"sample"
    },
    methods:{
        decrement: function(value){
            this.score -= value
        },
        increment: function(value){
            this.score += value
        },
        decrementTwo: function(value){
            this.score -= value
        },
        incrementTwo: function(value){
            this.score += value
        },
        capturePosition: function(event){
            console.log(event)
            this.xpos = event.offsetX
            this.ypos= event.offsetY
        },
        doSomething: function(){
            console.log("Click event captured for <a>");
            alert("Where am I?")
        },
        getName: function(){
            console.log(this.name);
        }
    }
})
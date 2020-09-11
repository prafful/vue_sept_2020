var one = new Vue({
                    el:"#vueappone",
                    data:{
                    message:"Vue App 1",
                    friends:['obb', 'owioh', 'cas', 'bnp'],
                    details:[
                        {
                            id:1,
                            name:'obb',
                            location:'chennai'
                        },
                        {
                            id:2,
                            name:'owioh',
                            location:'japan'
                            },
                            {
                                id:3,
                                name:'cas',
                                location:'bengaluru'
                            },
                            {
                                id:4,
                                name:'bnp',
                                location:'ahmedabad'
                            }
                    ]
                    },
                    methods:{
                        getFriend: function(rowindex){
                            console.log(rowindex);
                            console.log(this.details[rowindex]);

                        }
                    }
})


var two = new Vue({
    el:"#vueapptwo",
    data:{
        message:"Vue App 2"
    },
    methods:{
        changeMessage: function(){
            this.message = "I am in Vue App 2"
        }
    }
})


alert()
one.message = "I am global! Vue App One!!!!"
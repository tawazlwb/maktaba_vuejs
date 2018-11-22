new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        X: 0,
        Y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        substract: function(dec){
            this.age -= dec;
        },
        updateXY : function(event){
            this.X = event.offsetX;
            this.Y = event.offsetY;
        }
    }
});
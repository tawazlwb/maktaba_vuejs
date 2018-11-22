new Vue({
    el: '#vue-app',
    data: {
        name: 'Ismail',
        job: 'Ninja'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});
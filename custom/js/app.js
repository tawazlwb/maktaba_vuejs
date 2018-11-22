new Vue({
    el: '#vue-app',
    data: {
        name: 'Ismail',
        job: 'Ninja',
        website: 'http://thenetninja.co.uk',
        websiteTag: '<a href="http://thenetninja.co.uk">The Ninja Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});
Vue.component('task-list', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root',
    data: function() {
        return {
            header: 'Test Header'
        };
    },
    methods: {

    }
});
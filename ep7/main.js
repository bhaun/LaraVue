Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',
    data: function () {
        return {
            tasks: [
                {description: 'Go to the store', completed: false},
                {description: 'Clean the house1', completed: true},
                {description: 'Clean the house2', completed: true},
                {description: 'wash the car', completed: true},
                {description: 'tickle me elmo1', completed: false},
                {description: 'tickle me elmo2', completed: false},
                {description: 'tickle me elmo3', completed: false},
                {description: 'tickle me elmo4', completed: false},
            ]
        };
    },
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root',
    data: function () {
        return {
            header: 'Test Header',
            taskList: [
                {text: 'Dont forget to do 1'},
                {text: 'Dont forget to do 2'},
                {text: 'Dont forget to do 3'},
                {text: 'Dont forget to do 4'},
                {text: 'Dont forget to do 5'},
            ]
        };
    },
    methods: {}
});

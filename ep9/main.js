Vue.component('message', {
    props: ['title', 'body'],
    template: `
    <article class="message">
        <div class="message-header">
            <p>{{title}}</p>
            <button class="delete" @click="hideMessage"></button>
        </div>
        <div class="message-body" v-show="isVisible">
            {{body}}
        </div>
    </article>`,
    methods: {
        hideMessage() {
            this.isVisible = !this.isVisible;
        }
    },
    data() {
        return {
            isVisible: true
        }
    }
});

Vue.component('modal', {
    props: ['body'],
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    {{body}}
                </div>
            </div>
            <button class="modal-close" @click="$emit('close')"></button>
        </div>`,
});

Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>`,

    data(){
        return {tabs: []};
    },

    created(){
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    props: {
        name: {required: true},
        selected: {default: false},
    },
    template: `<div v-show="isActive"><slot></slot></div>`,

    data() {
        return {
            isActive: false
        };
    },

    mounted() {
        this.isActive = this.selected
    },

    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-')
        }
    }
});

var app = new Vue({
    el: '#root',
    data: {
        showModal: false,
    },
    methods: {}
});
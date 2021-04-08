function init() {
    new Vue({
        el:'#app',

        data:{
            'todos':[],
            'newTodo':''
        },

        methods:{
            addTodo: function () {
                if (this.newTodo.length > 0) {
                    this.todos.push(this.newTodo);
                    this.newTodo=''
                }
            },
            removeTodo: function (ind) {
                this.todos.splice(ind,1)
            }
        }
    });
}

$(init);

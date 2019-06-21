const storage = {
	has(key) {
  	return !!localStorage.getItem(key);
  },
  get(key) {
  	return JSON.parse(localStorage.getItem(key));
  },
  set(key, value) {
  	localStorage.setItem(key, JSON.stringify(value));
  }
};

Vue.$storage = storage;
Object.defineProperty(Vue.prototype, '$storage', {
  get() {
    return storage;
  },
});

new Vue({
  el: "#app",
  data: {
  	newTodo: null,
    todos: []
  },
  methods: {
  	addTodo() {
      if(this.newTodo === null) {
        return;
      }
    
    	const todo = {
      	text: this.newTodo,
        done: false,
      };
      
    	this.todos.push(todo);

      this.newTodo = null;
    },
    
  	toggle(todo) {
    	todo.done = !todo.done
    },
    deleteTodo(todo) {
    	this.todos = this.todos.filter(item => item !== todo); 
    }
  },
  watch: {
  	todos: {
    	handler() {
      	this.$storage.set('todos', this.todos);
    	},
    	deep: true,
  	},
	},
  mounted() {
  	if(this.$storage.has('todos')) {
    	this.todos = this.$storage.get('todos');
    }
  }
})
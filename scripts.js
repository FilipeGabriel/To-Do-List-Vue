const { createApp } = Vue;

taskList = [];

createApp({
  data() {
    return {
        taskList: window.taskList,
        task: {
            description: "",
            finished: false
        }
    }
  },
  methods: {
    addTask: function(){
        if (this.task.description) {
            this.taskList.push(this.task);
            this.task = {
                description: "",
                finished: false
            };
        } else {
            alert("Insert the task description");
        }
    },
    clearAll: function() {
        this.taskList = [];
    }
  }
}).mount('#app');
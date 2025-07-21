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
            localStorage.setItem("TaskList", JSON.stringify(this.taskList));
        } else {
            alert("Insert the task description");
        }
    },
    clearAll: function() {
        this.taskList = [];
    }
  },
  created() {
    this.taskList = localStorage.getItem("TaskList") ? JSON.parse(localStorage.getItem("TaskList")) : this.taskList;
  },
  updated() {
    localStorage.setItem("TaskList", JSON.stringify(this.taskList));
  }
}).mount('#app');
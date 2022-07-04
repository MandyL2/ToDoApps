var vm = new Vue({
	el: "#app",
	data: {
		taskName: "",
		taskDate: undefined,
		taskList: [],
		activeTasks: [],
		finishedTasks: [],
		fieldNames: [
			["date", "task", "action"],
			["date", "task"],
		],
	},
	methods: {
		//add to list
		addTask: function () {
			var toAdd = { date: this.taskDate, task: this.taskName };
			this.taskList.push(toAdd);
			this.taskName = "";
		},
		//move to different list
		moveTask: function (index, arr1, arr2) {
			//https://forum.vuejs.org/t/pass-2-arguments-click/100416/2
			let prevList = arr1;
			let newList = arr2;
			this.prevList = prevList;
			this.newList = newList;
			this.newList.push(this.prevList[index]);
			this.prevList.splice(index, 1);
		},
	},
});

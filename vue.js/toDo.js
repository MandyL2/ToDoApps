let tables = [
	{
		listName: "To Do",
		columns: 2,
		item: "task",
		list1: "taskList",
		list2: "activeTasks",
	},
	{
		listName: "Active Tasks",
		columns: 2,
		item: "active",
		list1: "activeTasks",
		list2: "finishedTasks",
	},
	{
		listName: "Finished Tasks",
		columns: 1,
		item: "finish",
		list1: "finishedTasks",
		list2: "finishedTasks",
	},
];

function createTable(obj) {
	let string1 =
		'<table> <tr> <th class="dateDue"> Date Due </th> <th colspan="' +
		obj.columns +
		'"> ' +
		obj.listName +
		' </th> </tr> <tr v-for="(' +
		obj.item +
		", index) in " +
		obj.list1 +
		'"> <td class="dateDue"> {{' +
		obj.item +
		".date}} </td> <td> {{" +
		obj.item +
		".task}} </td>";

	let string2 =
		'<td class="buttonCol"><button @click="moveTask(index, ' +
		obj.list1 +
		"," +
		obj.list2 +
		')"> Select </button> </td> </tr> </table> <br />';
	if (obj.columns == 2) {
		document.getElementById("app").innerHTML += string1 + string2;
	} else {
		document.getElementById("app").innerHTML += string1 + "</tr>";
	}
}

for (let i = 0; i < tables.length; i++) {
	createTable(tables[i]);
}

var vm = new Vue({
	el: "#app",
	data: {
		taskName: "",
		taskDate: undefined,
		taskList: [],
		activeTasks: [],
		finishedTasks: [],
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

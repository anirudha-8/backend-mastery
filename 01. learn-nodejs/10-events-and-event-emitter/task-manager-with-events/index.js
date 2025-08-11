const EventEmitter = require("events");

class TaskManager extends EventEmitter {
	constructor() {
		super();
		this.tasks = [];
	}

	addTask(task) {
		this.tasks.push({ task, completed: false });
		this.emit("taskAdded", task);
	}

	completeTask(task) {
		const foundTask = this.tasks.find((t) => t.task === task);
		if (foundTask && !foundTask.completed) {
			foundTask.completed = true;
			this.emit("taskCompleted", task);
		} else {
			console.log(`Task "${task}" not found or already completed.`);
		}
	}

	listTasks() {
		console.log("\n📋 Current Tasks:");
		this.tasks.forEach((t, i) => {
			console.log(
				`${i + 1}. ${t.task} - ${t.completed ? "✅ Done" : "❌ Pending"}`
			);
		});
	}
}

// ================ Example Usage ================ //

const manager = new TaskManager();

manager.on("taskAdded", (task) => {
	console.log(`🆕 Task Added: "${task}`);
});

manager.on("taskCompleted", (task) => {
	console.log(`🎉 Task Completed: "${task}`);
});

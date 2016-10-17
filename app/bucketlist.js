var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var ExploreTask = (function (_super) {
    __extends(ExploreTask, _super);
    function ExploreTask() {
        _super.apply(this, arguments);
    }
    return ExploreTask;
}(Task));
var MeetTask = (function (_super) {
    __extends(MeetTask, _super);
    function MeetTask(description, priority) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
    }
    return MeetTask;
}(Task));
var tasks = [];
tasks.push(new ExploreTask("Climb Everest", "high"));
tasks.push(new ExploreTask("Go to Sweden", "high"));
tasks.push(new ExploreTask("Go to Mars", "low"));
tasks[0].markDone();
console.log(tasks);
// var tasks: Task[] =[];
tasks.push(new MeetTask("Meet the Obama's", "high"));
tasks.push(new MeetTask("Meet Bernie Sanders", "high"));
tasks.push(new MeetTask("Meet the Dali Lama", "low"));
tasks[0].markDone();
console.log(tasks);
var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);
console.log(tasks);

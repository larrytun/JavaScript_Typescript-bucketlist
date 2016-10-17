var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var ExploreTask = (function (_super) {
    __extends(ExploreTask, _super);
    function ExploreTask(exploreDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.exploreDate = exploreDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return ExploreTask;
}(Task));
var MeetTask = (function (_super) {
    __extends(MeetTask, _super);
    function MeetTask(meetDate, description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.meetDate = meetDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return MeetTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var playa = {
    name: "Playa Play",
    email: "playaplay@gmail.com"
};
var ken = {
    name: "Ken Bone",
    email: "reddit.com"
};
var wanda = {
    name: "Wanda What",
    email: "ww.com"
};
var tasks = [];
tasks.push(new ExploreTask("Climb Everest", "High", playa));
tasks.push(new ExploreTask("Go to Sweden", "High", ken));
tasks.push(new ExploreTask("Go to Mars", "Low", wanda));
tasks.push(new HobbyTask("Practice CODING"));
tasks.push(new HobbyTask("Bake a pie."));
var today = new Date();
var tomorrow = today;
tomorrow.setDate(today.getDate() + 1);
var nextDay = today;
nextDay.setDate(today.getDate() + 2);
tasks.push(new MeetTask("Meet the Obama's", "High"));
tasks.push(new MeetTask("Meet Bernie Sanders", "High"));
tasks.push(new MeetTask("Meet the Dali Lama", "Low"));
console.log(tasks);

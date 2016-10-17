var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bucketlist;
(function (bucketlist) {
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
    bucketlist.Task = Task;
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
    bucketlist.ExploreTask = ExploreTask;
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
    bucketlist.MeetTask = MeetTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low");
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    bucketlist.HobbyTask = HobbyTask;
})(bucketlist || (bucketlist = {}));

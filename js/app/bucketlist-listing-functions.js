/// <reference path="bucketlist-classes-interfaces.ts" />
var bucketlist;
(function (bucketlist) {
    bucketlist.describeTasksForPerson = function (assignee, taskCollection) {
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(bucketlist || (bucketlist = {}));

/// <reference path="bucketlist-classes-interfaces.ts" />
/// <reference path="bucketlist-people.ts" />


 var people = bucketlist.people;

 var tasks = [];
 tasks.push(new bucketlist.ExploreTask("Climb Everest", "High", people.Playa));
 tasks.push(new bucketlist.ExploreTask("Go to Sweden", "High", people.Ken));
 tasks.push(new bucketlist.ExploreTask("Go to Mars", "Low", people.Wanda));

 tasks.push(new bucketlist.HobbyTask("Practice CODING"));
 tasks.push(new bucketlist.HobbyTask("Bake a pie."));

 var today = new Date();
 var tomorrow = new Date();
 tomorrow.setDate(today.getDate() + 1);
 var nextDay = new Date();
 nextDay.setDate(today.getDate() + 2);

 tasks.push(new bucketlist.MeetTask(today, "Meet the Obama's", "High"));
 tasks.push(new bucketlist.MeetTask(tomorrow, "Meet Bernie Sanders", "High"));
 tasks.push(new bucketlist.MeetTask(nextDay, "Meet the Dali Lama", "Low"));

 console.log(tasks);

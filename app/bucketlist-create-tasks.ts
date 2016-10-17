/// <reference path="bucketlist-classes-interfaces.ts" />
/// <reference path="bucketlist-people.ts" />
/// <reference path="bucketlist-listing-functions.ts" />

 var people = bucketlist.people;

 var tasks = [];

 tasks.push(new bucketlist.HobbyTask("Practice CODING"));
 tasks.push(new bucketlist.HobbyTask("Bake a pie."));

 var today = new Date();
 var tomorrow = new Date();
 tomorrow.setDate(today.getDate() + 1);
 var nextDay = new Date();
 nextDay.setDate(today.getDate() + 2);
// Debugger;
 tasks.push(new bucketlist.MeetTask(today, "Meet the Obama's", "High", people.Wanda));
 tasks.push(new bucketlist.MeetTask(tomorrow, "Meet Bernie Sanders", "High", people.Wanda));
 tasks.push(new bucketlist.MeetTask(nextDay, "Meet the Dali Lama", "Low", people.Wanda));

 tasks.push(new bucketlist.ExploreTask(today,"Climb Everest", "High", people.Wanda));
 tasks.push(new bucketlist.ExploreTask(tomorrow,"Go to Sweden", "High"));
 tasks.push(new bucketlist.ExploreTask(nextDay, "Go to Mars", "Low"));

 console.log(tasks);
 var WandaTasks = bucketlist.describeTasksForPerson(people.Wanda, tasks);
 console.log("here are wandas tasks");
  for(var task of WandaTasks) {
   console.log(task);
 }

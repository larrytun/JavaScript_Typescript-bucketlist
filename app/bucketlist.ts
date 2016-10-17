class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}
class ExploreTask extends Task {}

class MeetTask extends Task {
  constructor(public description: string, public priority: string){
    super(description, priority);
  }
}




var tasks: Task[] =[];
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

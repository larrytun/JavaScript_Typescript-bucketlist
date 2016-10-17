
interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  assignedTo?: IPerson;
}



class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}
class ExploreTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo: IPerson){
  super(description, priority, assignedTo);
  }
}

class MeetTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var playa: IPerson = {
  name: "Playa Play",
  email: "playaplay@gmail.com"
}

var ken: IPerson = {
  name: "Ken Bone",
  email: "reddit.com"
}

var wanda: IPerson = {
  name: "Wanda What",
  email: "ww.com"
}


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

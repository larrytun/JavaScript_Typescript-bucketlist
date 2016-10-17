module bucketlist {
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void;
    assignedTo?: IPerson;
  }

  export interface IPerson {
    name: string;
    email: string;

  }

export class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone(){
    this.done = true;
  }
}

export class ExploreTask extends Task {
  constructor(public exploreDate: Date, public description: string, public priority: string, public assignedTo?: IPerson){
     super(description, priority, assignedTo);
   }
}

export class MeetTask extends Task {
  constructor(public meetDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
  super(description, priority);
  }
}
export class HobbyTask extends Task {
    constructor(public description: string){
      super(description, "low");
    }
  }
}

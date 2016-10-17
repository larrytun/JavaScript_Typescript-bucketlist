var greeters: Greeter[] = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("how you doin?"));
greeters.push(new Greeter("you good?"));
console.log(greeters);
for(var greeter of greeters) {
  alert(greeter.greet());
}


class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello" + this.greeting;
  }
}

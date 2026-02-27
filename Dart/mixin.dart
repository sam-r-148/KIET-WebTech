// In dart, a mixin is a way to reuse a class's code in multiple class hierarchies.
// It allows you to add functionality to classes without using inheritance.
// Mixins are defined using the `mixin` keyword and can be applied to classes using the `with` keyword.

mixin Logger{
  void log(String message) {
    print("Log: $message");
  }
}

mixin Timestamp {
  void getCurrentTimestamp() {
    print(DateTime.now());
  }
}

class Person with Logger, Timestamp {
  void greet(String name) {
    print("Hello, $name!");
  }
}

void main() {
  Person person = Person();
  person.greet("Josh");
  person.log("This is a log message");
  person.getCurrentTimestamp();
}


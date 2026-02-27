// 1. Inheritance in Dart allows a new class (called a child or subclass)
//    to inherit properties and methods from an existing class (called a parent or superclass).
// 2. This promotes code reusability and establishes a natural hierarchical relationship between classes.

class Animal {
  void eat() {
    print("Animal is eating");
  }
  void sound(){
    print("Animal makes a sound");
  }
}

class Dog extends Animal {
  void sleep() {
    print("Dog is sleeping");
  }
  
  @override
  void sound() {
    print("Dog barks");
  }
}

class puppy implements Animal{ // MULTILEVEL & MULTIPLE INHERITANCE using implements keyword
  void weep(){
    print("Puppy is weeping");
  }
  @override
  void eat() {
    print("Puppy is eating");
  }
  @override
  void sound() {
    print("Puppy barks");
  }
}

void main() {
  Dog dog = Dog();
  dog.eat(); // Inherited method from Animal class
  dog.sleep(); // Dog's own method
  dog.sound(); // Overridden method from Animal class
  puppy p = puppy();
  p.eat(); // Inherited method from Animal class
  p.sound(); // Inherited method from Dog class
  p.weep(); // Puppy's own method
  
}
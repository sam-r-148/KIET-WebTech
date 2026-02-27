class Student {
  String name;
  int age;

  // Student(this.name, this.age); // Constructor: In Dart, constructor overloading is not supported

  Student(this.name,[this.age = 20]); // Optional parameter with default value

  Student.onlyName(this.name) : age = 0; // Named constructor

  Student.guest()
    : name = "Guest",
      age = 0; // Default constructor


  // Method to display student details
  void display() {
    print("Name : $name");
    print("Age : $age");
  }
  
}


void main() {
  // Create an object(instance) of Student Class  
  Student s1 = Student("Samridh");
  s1.display();

  // Using named constructor
  Student s2 = Student.onlyName("Alice");
  s2.display();

  // Using default constructor
  Student s3 = Student.guest();
  s3.display();
}
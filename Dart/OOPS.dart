class Student {
  String name;
  int age;

  Student(this.name, this.age); // Constructor

  // Method to display student details
  void display() {
    print("Name : $name");
    print("Age : $age");
  }
}

void main() {
// Create an object(instance) of Student Class  
  Student s1 = Student("Samridh", 20);
  s1.display();
}
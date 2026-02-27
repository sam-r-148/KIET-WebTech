class Calculator1 {
  int add(int a, int b, [int c = 0]) { // Optional parameter with default value
    return a + b + c;
  }
}

class Calculator2{
  int add({required int a, required int b, int c = 0}) {
    return a + b + c;
  }

}

class Calculaotor3{ // Method to add two numbers, strings, or concatenate them...DON'T USE
  dynamic add(dynamic a, dynamic b){
    return a + b;

  }
}

void main() {

    print(Calculator1().add(4, 3)); // Output: 7

    print(Calculator2().add(a:5, b: 10)); // Output: 15

    print(Calculaotor3().add(4, 5)); // Output: 9
    print(Calculaotor3().add("Hello, ", "World!")); // Output: Hello, World!
    print(Calculaotor3().add(2.5,2.25)); // Output: 4.75

}



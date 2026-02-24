void greet() {
  print("Hello, Dart!!!!");
}

int add(int a, int b) {
  return (a + b);
}

int divide(int a, int b) {
  return a ~/ b;
}

int square(int n) => n * n;

void main() {
  greet();   // Calling the function
  print(add(2, 5));
  print(divide(10, 2));
  print(square(4));
}





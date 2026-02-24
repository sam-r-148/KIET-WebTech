// Positional Optional Parameters
// USE : []

void greet(String name, [String? greeting]) {
    print("$greeting, $name!");
  
}

// =================================================

// Named Optional Parameters
// USE : {}

void greet2({String? name, String? greeting}) {
    print("$greeting, $name!");
}

// ==============================================

// REQUIRED NAMED PARAMETERS
// USE : {}

void greet3({required String name, required String greeting}) {
  print("$greeting, $name!");
}

// ===================================================
void main() {
  greet("Sam"); // Using default greeting
  greet("Sam", "Good Morning"); // Providing a custom greeting
  greet2(name: "Sam", greeting: "Good Evening"); // Using named parameters
  greet3(name: "Sam", greeting: "Good Night");
}



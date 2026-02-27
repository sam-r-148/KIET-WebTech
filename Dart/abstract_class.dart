abstract class Vehicle{
  void start(); // Abstract method: No implementation, must be overridden by subclasses
  void stop(); // Abstract method: No implementation, must be overridden by subclasses
}

class Car implements Vehicle {
  @override
  void start() {
    print("Car is starting");
  }

  @override
  void stop() {
    print("Car is stopping");
  }
}

void main() {
  Car car = Car();
  car.start(); // Output: Car is starting
  car.stop(); // Output: Car is stopping
}
/* 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop. */
let trafficLight = "red";

if (trafficLight == "red") {
  console.log("Vehicle must Stop");
} else if (trafficLight == "yellow") {
  console.log("Vehicle must wait ...");
} else if (trafficLight == "green") {
  console.log("Vehicle can go");
} else {
  console.log("Invalid traffic Light");
}

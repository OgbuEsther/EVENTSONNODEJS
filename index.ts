import events from "events";
import welcomeEvent from "./eventclass";
const emitter = new events();

emitter.on("WELCOME", (message) => {
  welcomeEvent(message);
});
setInterval(() => {
  emitter.emit("WELCOME", "Welcome to CodeLab ...you are in CodeLab today\n");
}, 5000);

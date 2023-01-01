import events from "events";
import welcome from "./practice";

const emitter = new events();

emitter.on("HEY...!!!", (X) => {
  welcome(X);
});

const message = [
  "wecome to codelab",
  " how are ypu today",
  " diamond",
  "rubies",
  " gold",
  "silver",
  "bronze",
];

const add = () => {
  message.length - 1;
};

setInterval(() => {
  emitter.emit("HEY...!!!", message[0]);
}, 5000);

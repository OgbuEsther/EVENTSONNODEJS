// event is a disturbance that you create on your webpage
/** .emit creates the disturbance
 * .on listens to the disturbance created
 */
// console.log("heyyyy");
// import Event from "events";
// // console.log(Event);

// const eventEmitter = new Event();

// eventEmitter.on("HELP", () => {
//   console.log("i don hear , i'm coming");
// });

// eventEmitter.emit("HELP", "them dey me carry me go where i no know");

// console.log("help".charCodeAt(0));
// console.log("HELP".charCodeAt(0));

import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fsPromise from "fs/promises";
import path from "path";
import fs from "fs";
const welcomeEvent = async (message: string) => {
  const datetime = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
  const uniqueID = `${uuid()}`;
  const welcomeMessage = `${datetime} \t${uniqueID} \t${message}`;
  console.log(welcomeMessage);

  try {
    if (!fs.existsSync(path.join(__dirname, "folder"))) {
      await fsPromise.mkdir(path.join(__dirname, "folder"));
    }
    await fsPromise.appendFile(
      path.join(__dirname, "folder", "welcome.txt"),
      welcomeMessage
    );
  } catch (error) {
    console.log("an error occured" + error);
  }
};

export default welcomeEvent;

// import { format } from "date-fns";
// import { v4 as uuid } from "uuid";
// import fsPromise from "fs/promises";
// import path from "path";
// import fs from "fs";
// const welcomeEvent = async (message: string) => {
//   const datetime = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
//   const uniqueID = `${uuid()}`;
//   const welcomeMessage = `${datetime} \t${uniqueID} \t${message}`;
//   console.log(welcomeMessage);

//   try {
//     if (!fs.existsSync(path.join(__dirname, "folder"))) {
//       await fsPromise.mkdir(path.join(__dirname, "folder"));
//     }
//     await fsPromise.appendFile(
//       path.join(__dirname, "folder", "welcome.txt"),
//       welcomeMessage
//     );
//   } catch (error) {
//     console.log("an error occured" + error);
//   }
// };

// export default welcomeEvent;

import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import fsPromises from "fs/promises";
import path from "path";
import fs from "fs";

const welcome = async (msg: string) => {
  const getDate = `${format(new Date(), "dd/MM/yyyy\thh:mm:ss")}`;
  const getUUid = `${uuid()}`;
  const getmsg = `${getDate} \t${getUUid} , \t${msg}\n`;
  console.log(getmsg);

  try {
    if (!fs.existsSync(path.join(__dirname, "CodeLab"))) {
      await fsPromises.mkdir(path.join(__dirname, "CodeLab"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "CodeLab", "welcome_dear.txt"),
      getmsg
    );
  } catch (error) {
    console.log("an error occured " + error);
  }
};
export default welcome;

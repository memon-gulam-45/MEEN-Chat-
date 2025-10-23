const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
}

let allChats = [
  {
    from: "Leo",
    to: "Leona",
    msg: "How are You?",
    created_at: new Date(),
  },
  {
    from: "Leona",
    to: "Leo",
    msg: "I’m good! How about you?",
    created_at: new Date(),
  },
  {
    from: "Leo",
    to: "Leona",
    msg: "Doing great, just been busy with work lately.",
    created_at: new Date(),
  },
  {
    from: "Leona",
    to: "Leo",
    msg: "Same here. Can't wait for the weekend!",
    created_at: new Date(),
  },
  {
    from: "Leo",
    to: "Leona",
    msg: "Any plans for it?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

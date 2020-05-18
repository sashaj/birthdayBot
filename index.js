const TelegramBot = require("node-telegram-bot-api");
const token = require("./config");
const bot = new TelegramBot(token.token, {
  polling: true,
});

const data = [];

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg);
  bot.sendMessage(chatId, "Введи имя кого будешь поздравлять");
  data.push(msg);
});

// //send delayed message
// const dateItHappens = new Date();
// // ... set the dateItHappens variable up ...
// const millisTillOccurence = dateItHappens.getTime() - new Date().getTime();
// setTimeout(function () {
//   /* ... function you want to call ... */
// }, millisTillOccurence);

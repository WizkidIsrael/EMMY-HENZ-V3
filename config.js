//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZURDbmgxb2FDUUcvcURFek1rT1ZVN2txdk1zdFBkcjd1d2E1SDRwREFVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGJhYk1VaHpGbjZDUzVLc0NSQXovMVJIb1hhVXcralE1RTNhMlpMMG15ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSUFnN2h3VEdhWFZMallYdzFWOGdYT2pJRUR5QTJIWERlcEN0NVYzUDM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIydkxYa0U3VnlXZThCNy9BOGpwOFl2YW5YcHNzT3diREllUGZFa3dZVGtJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFCWlZGY3NYdEYvT3A5cTZIdFMxMkNqa3E5ZmdnQ2RIY1c0U0VEWEZBMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNleENscGxSZldiSktEd1k5bVgwV3Y2R3cwOFZ6ZE5pQ0VkRWNkMG5md289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0c5U2IxQ25ubHRLSWNvalVLRklvcVNUSG5Da1N0ZUJKd1Q1WVJXOEhrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXQ2WXZBQTJlOXBXNncvaUZSSkJjSCtFQ3k1ck0xRHhGKzBvUHRpb3lTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlXMUk0Uy9yYnBiK0xUZTVCYW9JemFHTG5QcTZObkd5K3dCWVBhSWQvOFpVcGJOQ3MvVkNVRFJCWURCZ0hzem9OTjYzOGJBM09uaUNXSzVYTFM1OWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJZOVhtbXhha0RoQlVMT2JOV2g0N0tpeWI2VEx2K3RJbTNkWFlOdmJBcFpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6aUxWS0lzaVJmQzdJeVJGTzFqSjR3IiwicGhvbmVJZCI6ImJjZDAzMWM0LTJkMmQtNDZkZS04MzcwLWEzZTA1OGI3YWJiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsbzg4c2ZpZXlvOUV0SnZ3bFg5RURTWkNtZmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDVzVE9STkVlU2d0TnRaNmt4bFFwMTMxekd3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJSQU5HUlJMIiwibWUiOnsiaWQiOiIyMzQ5MTYwMTQ2MjE5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeC4bqEw6/FvOG4s8Ov4biLIOG4nuG4nuG6jSDhuarDtuG5l8O84bmX6qeBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMRFh1SWdFRUk3Qy9MY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmaEoxNnJHVll4OWs2SDlROXREN2dpdjhjWmNiNlhYR2YvbGh4REhWL1NrPSIsImFjY291bnRTaWduYXR1cmUiOiJWekErSzFYWGZQOHd2c0k2UW90WmwzNStsL21zY1lNVFpkNU10U0hJMXdjQjQxQjBlNmUvUVpCQmtNMHBZWm9RZ3RMdWlVZ2tLRHhnMldNNU43RWJEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEhuWEFJMkd5KzcycU4weFhiOXdkUVVOM21lWVRja2xCNytqdTlqam9KZnZEaWo5MDlMZCtuTGg3VmR0UzNacVlBbXNZQW9nMDdzcGRvWHZxakdnaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTYwMTQ2MjE5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDRTZGVxeGxXTWZaT2gvVVBiUSs0SXIvSEdYRytsMXhuLzVZY1F4MWYwcCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzk5NjE4NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDdk8ifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

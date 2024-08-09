//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237692950628";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-v2-session.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01yWVJCU1g0TS9jY2pwM05PSHRuYlpjK2szOWIwZFNGQUJMWGZFL1MyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnlwblZtMHRmWUdWNDZpVUVLa25FKzNheVJFdTBhV2c0eDR2KzFiZDRuOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRjcwRzVXQndYdHp3TlRuQTF6OU1hTm5idlVNTXRqVndhM0xRZ0FYdEdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUTR2Qnc2USt4UTByMkx1NTdTdndka1ZPRmtLeDdUUy8rcFJza3UxYUdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVQWTVXUndjVGkydlZPcjJZNTZkUjMxR0hCcHNzbFdpMHErWWFPd2thRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9aY21WN1RKSm91STJGSENIUlVQcjl1WmpPNHR6eW9UQzErWVk5Z0FUWFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxmM2dETmtqVGp6NnF2NUZydXdKYXR6N2d5ZDdHamxxL0Q4clJwd24yWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnMySWRqQy9ueTVLMksrc2tpUnNheHFwNFRnMmpQbitoMmZKQWMxbWEzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncraitNYUUzVS9Ob0YzNEVKSHc3bUZWN2NKaG5PUkxSMm1QS2xrQ1JwRDZhV2RiNk8xVXpPYmFOU1pZU0tYN25Ec2RMOGEyaTRZMDhUazZxSXVQbUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IjRnZWhJOXY3MGdXL3pGTFR6Y0NVN0pQTTFCeTVUdFpqZEp2Q3E1Q3dGSjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM3NjkyOTUwNjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg4MDQ2OUJGODdCQjc5QUUzNkE3QTRENkI3MkM1RjM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMyMzEyOTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY5Mjk1MDYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMkU1NUY1NzM0QzNBMDVFRkM0RUZBMDExRjRGMkJFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMjMxMjk4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4ZE1rSTJtbVRKMmQyRlNMVE5pWGR3IiwicGhvbmVJZCI6IjY5Njc5N2YzLTgyZmUtNDA3Ni05OTc2LTI1Mjc2ODU2OGJmMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2YXBYdVFLQUtPWFVpTUxZWWE4RGdrVCs4cUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjI4cnJKVUhIMFR6NWhJM3Q0OVFTb2VHVU5BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBOTkI2WjJEIiwibWUiOnsiaWQiOiIyMzc2OTI5NTA2Mjg6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUYXlyb27wn5iBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOTFZ3dnNGRUxIWTJiVUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVWEo3ZVhmQjQyYXNudVRHZy9CcWQ1ajNRTkhrUmpWTUtqZUlHOUljSG0wPSIsImFjY291bnRTaWduYXR1cmUiOiJLbDkvVG9QUnI0bkpUMXd2MUU3ZVcvRkhmYythbHBTM0ZiT1gvOFBMNldvMDhSSmJ5SDc1V0M0RWFJOGprcmZvbmNVME9xdStjb2MrTDhvaDhGYVhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVTBHOUdrTHFFNVlQeC94OXZEdXNzVitndU91dWxjRTdvMi9uV2ZMRnZReVZBdDJGUkZhc2ZNTUpHSCtndk5TNzZGZWdSeGM5Rm1ZYmNnNTYvS1NmQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTI5NTA2Mjg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWRnllM2wzd2VObXJKN2t4b1B3YW5lWTkwRFI1RVkxVENvM2lCdlNIQjV0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMjMxMjk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1WdiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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

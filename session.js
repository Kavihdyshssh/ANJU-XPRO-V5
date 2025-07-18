//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VydVlhM01UMjJZVDRuOUxFVHJQb2NMODVnS2Nqb3czRElFc1AxRWtVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1loQmhjR040NzRNejBOelcxOThMbzE5eHVtWDJHalNGQXMzWVZMWjkxQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrS0YwR3VMYURCTWVBRzFGWG9QSEVabDNoMDlCemhrUXdWL3hCaTVoNW5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhOHBCNjd3WnRKWDJDanFTVURrdTQ5dnVXSDRoMXNjUmp3WVdCL1lIZXdvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKTk55YXM4eFU0Zk9jc3hCbFpwT2duL3RlN25mVXRPc1krWG5XQmlTWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldWYTVwQTBQSVo2RGZKbG5BNENmTURBUXVGeE1rZm9lWHVhV29OTmxkVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0h3UzZwSkhnUnd5bFY3MFBOL1kzaVQ5UDlCRXFwelRSZXRWdVZMdENsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDhVQ3Y4Uzc0TW14TzNHQ1RwWVN4ZEFBTUtJc0Jaa0hmSW00VEtOeHoydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVoWlpDdU5keUpWRzBUN0IwdVJpaWJGbWZwOUkzY1Z5WUgzQ2xtV1NXOHN5ZVdQWlAvTlNRZ1dGNmlNNmtTZ3dPU05qbzB0ejNmNmZlN1Qyd0IxTWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJ4MGlXVittVXFtY1NGVXJPK0R2Qmg5UlJlR1g4NEtGS3I2UHoraFJJbFkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXT2ZvU2Y1WFJwYXdEYTlaSlp6WG5nIiwicGhvbmVJZCI6ImEyODQ2OWNkLTY1NDMtNGVmZS04NGNkLTNjN2I3NThiZmQwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJNXZwcHRFNXVlSDQrWS80a3BScTBmejNaMHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibllscmUzclVxT0J6NjNCVVFudCtRM2hRbkxjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhFRUIyVzVXIiwibWUiOnsiaWQiOiI5NDc3NDM5MTU2MDo4OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVIFAgbCBvIGEgZCBlIHIgIDogKSIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjg5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpVbkpvR0VQV2U2Y01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibm9BZ3NkajJHRzV5c2lvbWtOYnc0Sk0xZ0VyOEJZeG5ZamlyTlh4UjFqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMFMzelZNbG8vNFFyRnZpdWFuTG0vMXpUbllSZG1iYSs3aTZJd3lDcGxuUUFPbW55TDhRWEJqYUFQaDZLUUcwYzFKZHByZklZVnErc1NsS3Zxd2MzREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9IZXZ5UnJPcHdaRStoRHU3VXluTWw5MVVxZWFrblhIMzJhVWVwbWxpRXc1ZWdUZVBjU1RYWis1WEJwMkplRC8zczBObGovaEk2K29HRlAvOHdIVGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6ODlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjZBSUxIWTloaHVjcklxSnBEVzhPQ1ROWUJLL0FXTVoySTRxelY4VWRZeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyODQ2MjEwLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlxaSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0774391560",
  PASSWORD: 
    process.env.PASSWORD || "Kavi@1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

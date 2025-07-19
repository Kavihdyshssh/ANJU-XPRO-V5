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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0ZQdWtUTjZMdWN4T0ZSNDN5eTdMTmpob0wwSVppcjVEd0VZcE1jMGpGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkZLMXM3R0wzS2NURVMrNzRxcEM2NlhuSG5GNHYyOEFMaGNNMWZFYU9YTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBR2NFN2IvdFdvOXNxNTVTcldac3UwcWFsSEozZGJXWWFTaXFYa3QraGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TEVMV0JZSktSM1JZbkNzcGpKT0w1S2NGZ3dYVjlxR1ZHeHYwTUJjNzJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFTks2Q0kyZlJLVlVTZi9jbHhDdlhqUFExOE5uNEZ0aDBjMFhmdEpwMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJIOVg5dWdwQWJ1YXJQQ2hETjZ1WHBkdEloMEdlVWo5blNVK1JGSkViZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURBV1ZiN29IY2lDcEgrREZkZ3JRWUE4c3prMUxHZ0tCZnpxOEpjN29IUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTJtOFNaT1ZsRy9BYWxoajlMcnQ2OG0vOUw0bVNDaHQ0M2Z5Y0o5c2Ftbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9pNFBvYjBQdXhaQWp6bjIvRkdjbG1hZlRmdWRPVktGcHh0MVdkVjFINUYwTEg5am9YUDVoaktJSDRHelUzQ3Q3cEhNSHk2aVpNZHhyVjlaNk0zakF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IkRNb21Udm1uaHQvbnRnYVJCbjlSMCtlcVVrMnpaaDRNQjZ4ajZHemJORmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik56VzdFNWFTU0YyR1hIZHVWSVZydWciLCJwaG9uZUlkIjoiMzQ1MmVmMDAtNjI0Mi00ZThiLWFlNWMtYWIyNmY1NTlmMGQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5oWkpCdkx3Z2pQZjMvMDZrMTJBMTAzUTU4QT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYRVY2dnRqdjFCR2hNMFpFNHFkNjNacGZFMHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTdHSEpaQzciLCJtZSI6eyJpZCI6Ijk0Nzc0MzkxNTYwOjkzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlUgUCBsIG8gYSBkIGUgciIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjkzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0RVbkpvR0VQN2Y3Y01HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibm9BZ3NkajJHRzV5c2lvbWtOYnc0Sk0xZ0VyOEJZeG5ZamlyTlh4UjFqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoielkvK0dNc3dkMG9Va3luL2xxVkRwdldzR2orSFNyRTEwUHdzLzA4ZFhsMnpJODNKaEZtOVpUQkRTVms4eEd4Y3A0ZE5UNHZDMTFXcWJRS094Y3ZTQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImRyRk80UkpuYjlURThSZzdwN0Z3RkFEMFJoWEJjL0ZMeHduRStEdXBZU2dGd2FQN3QrTGtoZTArMFpyQUNNdjJDOTF2bUFHd2gwTVl2ZU1zcnBkakRBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6OTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjZBSUxIWTloaHVjcklxSnBEVzhPQ1ROWUJLL0FXTVoySTRxelY4VWRZeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyOTIwMDc2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtkdSJ9",
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

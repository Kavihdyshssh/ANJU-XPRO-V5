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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUxrSXhwKzNoYWoweDhiYTNLeFowV2hmQ0hXczdJN044d2tHRmN4dVpscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmR6UGdQQU1SRHBNcVlVSFpjWll0bzlsTWRScC82bWE4bmhpTnppYUIzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSUZ4WmtWaERPdHJKVW9xdnFnZ1ptWUprQlA2c1JtQXd2UVFiM3pJWW1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKU2tFWkdrMGtjb21OODYwTkJXaVg4ejV3bXpQcVBiVVJORzQrbS9qT0ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtMQjM3YjRPYjdqdGxFTU1GQ09hVkxPRkp6SVVFeEtYV1pWcytveUhZSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdoVTNRVWFyeTNMRHNGQm5LOC9lK3gxNE1PUHlKdzNnQjQ3NE5URnQ0bG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxrQ2tlTkRMcnJsRUV3US9UUzYrN084N3drTmZNMEt0bE4yaGI3YTMxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BqQnZsQjdSRW9YeVVJQzNnUk9rLy9TQnVnYmNsaERZWW9KVURZcHpGTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE4MzM3TC9sYXhRb2xmcVNXOS9hL1N2ZHFjeHFLRXlxU1V5azgvaWhoVm4ycGJXSVQ4aFVDNGhEMnozV2Q0NHgrOFBhRWJ5ZGZYWVpiNjVMNmEzb2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6IlYxZSs4eFJTRVNSKzQrc05FTThxR2xhMmV1MDZFWEM3bDdoVHVxdGZPZ0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlgxRjZlVVlBUnVXLUxKU0tZblU2T3ciLCJwaG9uZUlkIjoiOWI1MDFhNTgtYzAyNC00OWU3LTgyOWUtMDA4NGE2NGMzMTBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErTUVlWDR2VHJ6Tm5yZ2wvRDMvdzM2S21NWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4R2w0R2NVYWc0eWpSdFdrNVU0QU96ZTdSUU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNk02Vzc1SkIiLCJtZSI6eyJpZCI6Ijk0Nzc0MzkxNTYwOjkwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlUgUCBsIG8gYSBkIGUgciIsImxpZCI6IjcwNzIxNTUyMjc3NjQzOjkwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjNVbkpvR0VLakM3Y01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibm9BZ3NkajJHRzV5c2lvbWtOYnc0Sk0xZ0VyOEJZeG5ZamlyTlh4UjFqST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMlVOTjEzSHhGR2lWV25CSS81QlZXVmZ2NXp3NXNVRVRMOUxSRG9SWm9yUTFyQTVsMWdMZ21ka0c4WEFENVYvbThyR3d4UXpYRFZyakptV0xWWE5UQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Im1lQWxZYkQ3bFczUWhSR1E1d1VhU3RwT08relRQSmlTMVVvZmU3c3l3b1d0Z3lQRlVyMXN0R0JpMy9IMWpGby9yYW1ISEhtbmVXMHRIS0w4YkROYmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQzOTE1NjA6OTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjZBSUxIWTloaHVjcklxSnBEVzhPQ1ROWUJLL0FXTVoySTRxelY4VWRZeSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyOTE2Mjc3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
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

///🍁🍀🍁🍀🍁///////██░░░░██░░█████░░░██████░██░░░██░██░███░░░██░░█████░░░░░░░ ██████░░░░░░█████░░\\\\\\\🍁🍀🍁🍀🍁\\\
///🍀🍁🍀🍁🍀///'///░██░░██░░██░░░██░██░░░░░░██░░░██░██░████░░██░██░░░██░░░░░░ ░░░░░██░░░░██░░░██░\\\'\\\🍀🍁🍀🍁🍀\\\
///🍁🍀🍁🍀🍁///'///░░████░░░██░░░██░░█████░░███████░██░██░██░██░██░░░██░░░░░░ ░░███░░░░░░██░░░██░\\\'\\\🍁🍀🍁🍀🍁\\\
///🍀🍁🍀🍁🍀///'///░░░██░░░░██░░░██░░░░░░██░██░░░██░██░██░░████░██░░░██░░░░░░ ██░░░░░░░░░██░░░██░\\\'\\\🍀🍁🍀🍁🍀\\\
///🍁🍀🍁🍀🍁///////░░░██░░░░░█████░░██████░░██░░░██░██░██░░░███░░█████░░░░░░░ ░██████░██░░█████░░\\\\\\\🍁🍀🍁🍀🍁\\\


const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./exports.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, anotar, getRandom, NodeCache,insert, response } = require('./exports.js');

const { NomeDoBot, NickDono, prefix } = require("./settings/settings.json");

var { fundo1, fundo2 } = require("./settings/links_img.json");

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

async function iniciarYoshino() {
var folderUserAuth = "./database/qr-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const yoshino = makeWASocket({
logger: P({ level: 'silent' }),
auth: state,
msgRetryCounterCache,
printQRInTerminal: true,
defaultQueryTimeoutMs: undefined,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message.buttonsMessage || message.listMessage);
if (requiresPatch) {
message = {viewOnceMessage: {
message: {messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},...message }}}}
return message;
}});

/*
// Função para avisar sobre as configurações do grupo se foi alterado algo ao mesmo.
yoshino.ev.on('groups.update', async config => {
if (config[0].announce == true) {
yoshino.sendMessage(config[0].id, {text: `🔔💬 - *ATENÇÃO!* Participantes deste grupo aconteceu uma mudança nas configurações:\n\nO grupo foi fechado pelo adm, agora somente os aqueles que contém o cargo de adminstrador do grupo pode falar.`})
} else if(config[0].announce == false) {
yoshino.sendMessage(config[0].id, {text: `🔔💬 - *ATENÇÃO!* Participantes deste grupo aconteceu uma mudança nas configurações:\n\nO grupo foi aberto pelo adm, agora todos poderão falar e interagir normalmente.`})
} else if (config[0].restrict == true) {
yoshino.sendMessage(config[0].id, {text: `🔔💬 - Foram detectadas possíveis alterações nas configurações do grupo:\n\nAs informações do grupo foram restritas, agora apenas administradores podem editar informações do grupo!`})
} else if (config[0].restrict == false) {
yoshino.sendMessage(config[0].id, {text: `🔔💬 - Foram detectadas possíveis alterações nas configurações do grupo:\n\nAs informações do grupo foram abertas, agora os participantes podem editar informações como a descrição e nome.`})
} else {
yoshino.sendMessage(config[0].id, {text: `🔔💬 - *ATENÇÃO!* Alteração no nome do grupo, confira abaixo como agora está!\n\nO nome denominado pelo administrador do grupo foi esse aqui: *${config[0].subject}*`})
}
})
*/

yoshino.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var sab2 = events["group-participants.update"];
if(!fs.existsSync(`./database/grupos/activation_gp/${sab2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./database/grupos/activation_gp/${sab2.id}.json`));

if(sab2.participants[0].startsWith(yoshino.user.id.split(':')[0])) return;

try { var grpmdt = await yoshino.groupMetadata(sab2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await yoshino.groupMetadata(sab2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(sab2.action == 'add'){
num = sab2.participants[0];
if(nescessario.listanegraG.includes(num)){
await yoshino.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban.'});
yoshino.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
return;
}}
if(sab2.action == 'remove'){
num = sab2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./settings/media/countmsg.json", JSON.stringify(countMessage));
}
}
if(sab2.action == 'add' && jsonGp[0].listanegra.includes(sab2.participants[0])){
await yoshino.sendMessage(GroupMetadata_.id,{text: 'Olha quem deu as cara por aqui, sente o poder do ban cabaço'});
yoshino.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && sab2.action === 'add' && !sab2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await yoshino.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
yoshino.groupParticipantsUpdate(GroupMetadata_.id, [sab2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await yoshino.groupMetadata(sab2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !sab2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await yoshino.profilePictureUrl(sab2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await yoshino.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(sab2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', yoshino.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(sab2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
yoshino.sendMessage(mdata_2.id, {image: {url:`http://dash.yoshinofenixbots.online/welcome?titulo=BEM%20VINDO(A)&nome=${sab2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURI(mdata_2.subject)}`},
mentions: sab2.participants, caption: teks});
DLT_FL(ran);
} else if(sab2.action === 'remove') {
mem = sab2.participants[0];

try {
ppimg = await yoshino.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', yoshino.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(sab2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
yoshino.sendMessage(mdata_2.id, {image: {url:`http://dash.yoshinofenixbots.online/welcome?titulo=Adeus&nome=${sab2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: sab2.participants})
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(sab2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+sab2.participants[0].split('@')[0])
.replace('#numerobot#', yoshino.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(sab2.participants[0].split('@')[0], mdata_2.subject)
}
yoshino.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
} else if(sab2.action === 'remove') {
var mem = sab2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#',  '@'+mem.split('@')[0])
.replace('#numerobot#', yoshino.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
yoshino.sendMessage(mdata_2.id, {text: teks, mentions: sab2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./index.js")(upsert, yoshino)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("Você precisará de um segundo celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
const fs = require('fs');

switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR."))
fs.rmdirSync('database/qr-code', { recursive: true });
} else if(shouldReconnect == 515) {
console.log(colors.gray("Restart Nescessario para estabilizar a conexão..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("Conexão fraca..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
iniciarYoshino()
}
break;

case 'connecting':
console.log(colors.yellow(`[BOT] Reconectando / Iniciando - ${date} ${time}`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(
  `〔 YOSHINO 2.0 _ - CONECTADA COM SUCESSO... 〕`))
await yoshino.sendPresenceUpdate("available")
break;

default:
break;
}
}


if(events["creds.update"]) {
await saveCreds();
}

require("./index.js")(yoshino, folderUserAuth)

})
}
iniciarYoshino().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './connect.js' - Error: "+e))
})
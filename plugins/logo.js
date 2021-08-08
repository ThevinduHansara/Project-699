const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "```YOU MUST ENTER WORDS!```"

if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'naruto ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'bneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'matrix ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'breakwall ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'dropwater ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crossfire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'silk ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'glow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'smoke ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sky ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'cs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'lightwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'crismes ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'firework ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'sandw ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'freefire ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'gplay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'splay ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: '3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 's3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/text3d?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'leave ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'tlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

Asena.addCommand({pattern: 'book ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://api.zeks.xyz/api/nulis?apikey=eDDV8wqAaTTmekir6SE5og9FB6O&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

}

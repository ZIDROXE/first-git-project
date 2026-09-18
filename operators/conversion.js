const prompt = require("prompt-sync")();
const totalsecons = parseFloat(prompt ("enter total second :"));

const hour = Math.floor(totalsecons / 3600);
const minute = 
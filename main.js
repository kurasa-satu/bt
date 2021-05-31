const axios = require("axios")
const au1 = ["https://au1.glitch.me"]
const au2 = ["https://au2.glitch.me"]
const au3 = ["https://au3.glitch.me"]
const au4 = ["https://au4.glitch.me"]

setInterval(function() {
 au1.forEach(h => {
  axios.get(h).then(console.log("Kapten logs"))
 })
},100*1000)

setInterval(function() {
 au2.forEach(h => {
  axios.get(h).then(console.log("Tendo logs"))
 })
},100*1000)

setInterval(function() {
 au3.forEach(h => {
  axios.get(h).then(console.log("Nagato logs"))
 })
},100*1000)

setInterval(function() {
 au4.forEach(h => {
  axios.get(h).then(console.log("Yahiko logs"))
 })
},100*1000)

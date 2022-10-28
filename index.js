/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const metersToFeet = 1 * 3.281
const litersToGallons = 1 * 0.264
const kilosToPounds = 1 * 2.20
const poundsToKilos = 1 / 2.20
const gallonsToLiters = 1 / 0.264
const feetToMeters = 1 / 3.281

convertBtn.addEventListener("click", function(){
    let lengthRatio = inputEl.value * metersToFeet
    let ratioLength = inputEl.value * feetToMeters
    lengthEl.textContent = `${inputEl.value} meters = ${ lengthRatio.toFixed(3) } feet | ${inputEl.value} feet  = ${ ratioLength.toFixed(3)} meters`
    
    let volumeRatio = inputEl.value * litersToGallons
    let ratioVolume = inputEl.value * gallonsToLiters
    volumeEl.textContent = `${inputEl.value} liters = ${volumeRatio.toFixed(3)} gallons | ${inputEl.value} gallons = ${ratioVolume.toFixed(3)} liters`
    
    let massRatio = inputEl.value * kilosToPounds
    let ratioMass = inputEl.value * poundsToKilos
    massEl.textContent = `${inputEl.value} kilos = ${massRatio.toFixed(3)} pounds | ${inputEl.value} pounds = ${ratioMass.toFixed(3)} kilos`
    
})

    
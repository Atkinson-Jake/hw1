// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw1
// (Windows)   cd c:\code\hw1
// Then type:
// node hw1.js

// HOMEWORK 1

// Given the following JavaScript object that represents weather data,
// write a weather summary out to the screen, when this code is executed.
// Something like this:

// Currently it is 67 degrees and sunny. Tomorrow it will be 65 and Mostly Cloudy.
// The next day it we will see Partly Cloudy skies, with a temperature of 70.

let weatherData = {
  current: {
    temperature: 67,
    conditions: "Sunny"
  },
  forecast: [
    { temperature: 65, conditions: "Mostly Cloudy" },
    { temperature: 70, conditions: "Partly Cloudy" }
  ]
}

let weather_forecast = weatherData.forecast;
let forecast_1_day = weather_forecast[0];
let forecast_2_days = weather_forecast[1];

console.log("Currently it is " + weatherData.current.temperature + " degrees and " + weatherData.current.conditions + ". Tomorrow it will be " + forecast_1_day.temperature + " and " + forecast_1_day.conditions + ". The next day we will see " + forecast_2_days.conditions + " skies, with a temperature of " + forecast_2_days.temperature + ".");

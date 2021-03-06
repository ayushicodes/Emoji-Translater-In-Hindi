import './App.css';
import React, { useState } from "react";

// import Hello from './Hello'

var emojiDictionary = {

  "๐": "Flirting With Eyes!!",
  "๐": "Face Blowing a Kiss!!",
  "๐": "Face with Tongue!!",
  "๐ค": " Money-Mouth Face!!",
  "๐ฉ": "Pile of Poo!!",
  "๐": "Middle Finger!!",
  "๐ฉโ๐ป": "Woman Technologist!!",
  "๐จโ๐ฉโ๐ง": "Family: Man, Woman, Boy!!",
  "๐ฆ": "Whale Machli!!",
  "๐ฟ": " Gaanja!!",
  "๐": " Unamused Face!!",
  "๐": "Face with Rolling Eyes!!",
  "๐ฅฑ": "Yawning Face!!",
  "๐คฌ": " Face with Symbols on Mouth!!",
  "โ ๏ธ": " Skull and Crossbones!!",
  "๐ธ": " Princess !!",
  "๐ฆธโโ๏ธ": "Man Superhero!!",
  "๐ฉโโค๏ธโ๐จ ": " Kiss: Woman, Man!!",
  "๐จโ๐ฉโ๐งโ๐ฆ": "Family: Man, Woman, Girl, Boy!!",
  "๐": "Grinning Face with Smiling Eyes!!",
  "๐คช": "Zany Face!!",
  "๐คซ": " Shushing Face!!",
  "๐ค": "Thinking Face!!",
  "๐": " Expressionless Face!!",
  "๐": "Pensive Face!!",
  "๐ท": "Face with Medical Mask!!",
  "๐คฎ": " Face Vomiting!!",
  "๐คฏ": "Exploding Head!!",
  "๐": "Worried Face!!",
  "๐ฒ": "Astonished Face!!",
  "๐ฅบ": "Pleading Face!!",
  "๐": "Smiling Face with Horns!!",
  "๐": "Kiss Mark!!",
  "๐ค": " Raised Back of Hand!!",
  "๐ท": "BJP!!",
  "๐": "Oncoming Fist!!",
  "๐": "Folded Hands!!",
  "๐ฆต": "Leg!!",
  "๐": "Nose!!",
  "๐": "Waving Hand!!"

};
var emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
  const [meaning, setMeaning] = useState("")
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in Our database"
    }
    setMeaning(meaning)
  }
  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji]
    setMeaning(meaning)
  }
  return (
    <div className="App">
      <h1>INSIDE OUT</h1>

      <input placeHolder="Put Your Emojis Here!!!" className="inputbox" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer", paddingLeft: "50px", paddingRight: "50px" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer>     </footer>
    </div>
  )
}

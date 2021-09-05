import React from 'react';
import './style.css';
import { useState } from 'react';
const emojiDictionary = {
  '😀': 'smiling',
  '😥': 'sad',
  '😲': 'disbelief',
  '😒': 'annoyance',
  '❤️': 'love',
  '🥡': 'takeout-box',
  '😉': 'Winking Face',
  '🤩': 'Star-Stuck',
  '😘': 'Face Blowing a Kiss',
  '🤣': 'Rolling on the Floor Laughing',
  '😛': 'Face with Tongue'
};

const msg = 'INSIDE-OUT';
const emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState('');

  var emojiInputHandler = event => {
    const userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = 'we dont have this in database';
    }
    setMeaning(meaning);
  };

  var emojiCLickHandler = emoji => {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1> {msg} </h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojisWeknow.map(function(emoji) {
        return (
          <span
            onClick={() => emojiCLickHandler(emoji)}
            style={{
              cursor: 'pointer',
              fontSize: '45px'
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

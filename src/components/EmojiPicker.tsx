import { useState } from "react";

function EmojiPicker(): JSX.Element {
  const [state, setState] = useState<string[]>([""]);

  const setStorage = (string: string) => {
    setState(() => [string, ...state]);
  };

  const clearStorage = () => {
    setState([]);
  };

  let storeOfEmojis: JSX.Element[] = state.map(emojiStorageList);
  if (storeOfEmojis.length > 5) {
    storeOfEmojis = storeOfEmojis.splice(0, 5);
  }

  return (
    <>
      <h1>Emoji picker</h1>
      <ul style={{ listStyleType: "none" }}>
        Your stored Emojis: {storeOfEmojis}
      </ul>
      <p style={{ fontSize: 21 }}>Current Emoji: {state.slice(0, 1)}</p>
      <button onClick={() => setStorage("🤗")}>🤗</button>
      <button onClick={() => setStorage("😔")}>😔</button>
      <button onClick={() => setStorage("😴")}>😴</button>
      <button onClick={() => setStorage("🤣")}>🤣</button>
      <button onClick={() => setStorage("😭")}>😭</button>
      <button onClick={() => setStorage("😇")}>😇</button>
      <button onClick={() => setStorage("🤯")}>🤯</button>
      <hr />
      <button onClick={clearStorage}>Reset Storage</button>
    </>
  );
}

function emojiStorageList(emoji: string): JSX.Element {
  return <li style={{ fontSize: 20, display: "inline-block" }}>{emoji}</li>;
}

export default EmojiPicker;

/*
😔
🤗
    <div>
      <h1>Which Emoji Will You Pick?</h1>
      <button onClick={()=>setState(happy);setState(emojiFromCurrentRender)}>🤗</button>
      <button onClick={()=>setState(happy);setState(emojiFromCurrentRender),nextSecondStoredEmoji(currentStoredEmoji)}>😔</button>
    </div>
*/

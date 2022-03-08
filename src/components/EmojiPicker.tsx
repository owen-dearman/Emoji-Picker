import { useState } from "react"

function EmojiPicker(): JSX.Element {
  const [emojiFromCurrentRender, queuedEmojiForRender] = useState("");
  const [storedEmojis, queuedEmojiStore] = useState<string[]>([]);


  const setStorage = () => {
    queuedEmojiStore(prev => [...prev, emojiFromCurrentRender]);
  }

  const clearStorage = () => {
    queuedEmojiStore([])
  }

  let storeOfEmojis: JSX.Element[] = storedEmojis.map(emojiStorageList)
  if(storeOfEmojis.length > 5){
    storeOfEmojis = storeOfEmojis.splice(-5)
  }

  return (
    <>
    <h1>Emoji picker</h1>
    <ul style={{listStyleType: "none"}}>Your stored Emojis: {storeOfEmojis}</ul>
    <p style={{fontSize: 21}}>Current Emoji: {emojiFromCurrentRender}</p>
    <button onClick={() => queuedEmojiForRender("🤗")}>🤗</button>
    <button onClick={() => queuedEmojiForRender("😔")}>😔</button>
    <button onClick={() => queuedEmojiForRender("😴")}>😴</button>
    <button onClick={() => queuedEmojiForRender("🤣")}>🤣</button>
    <button onClick={() => queuedEmojiForRender("😭")}>😭</button>
    <button onClick={() => queuedEmojiForRender("😇")}>😇</button>
    <button onClick={() => queuedEmojiForRender("🤯")}>🤯</button>
    <hr />
    <button onClick={setStorage}>Store Emoji</button>
    <button onClick={clearStorage}>Reset Storage</button>
  </>
  )
}


function emojiStorageList (emoji:string):JSX.Element {
  return(
    <li style={{fontSize: 20, display:"inline-block"}}>{emoji}</li>
  )
}




export default EmojiPicker;


/*
😔
🤗
    <div>
      <h1>Which Emoji Will You Pick?</h1>
      <button onClick={()=>queuedEmojiForRender(happy);queuedEmojiStore(emojiFromCurrentRender)}>🤗</button>
      <button onClick={()=>queuedEmojiForRender(happy);queuedEmojiStore(emojiFromCurrentRender),nextSecondStoredEmoji(currentStoredEmoji)}>😔</button>
    </div>
*/
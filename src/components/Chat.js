import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push } from "firebase/database";
import firebaseConfig from "./Firebase";
import "./Chat.css";
import Text from "./Text";

const Chat = () => {
  const [text, setText] = useState("");
  console.log("🚀 ~ Chat ~ text:", text);
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");
  console.log("🚀 ~ Chat ~ messages:", messages);

  // retrive messages onValue is triggered when messageRef is changed
  useEffect(() => {
    const database = getDatabase();
    const messagesRef = ref(database, "chat/");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("🚀 ~ onValue ~ data:", data);
      if (data) {
        const values = Object.values(data);
        console.log("🚀 ~ onValue ~ values:", values);
        setMessages(values);
      }
    });
  }, []);

  // update messages ↓
  const formSubmit = (e) => {
    e.preventDefault();
    const database = getDatabase();
    const messagesRef = ref(database, "chat/");
    const message = { text, timestamp: new Date().getTime(), userName };
    // getTime()でミリセカンドに変換して、timestampのフォーマットにする
    // or Date.now()でも可能;
    push(messagesRef, message);
    setText("");
    setUserName("");
  };
  console.log("🚀 ~ send ~ push:", push);

  // const formattedTimestamp = new Date(messages.timestamp).toLocaleString();
  // console.log(`Sent at: ${formattedTimestamp}`);

  return (
    <div>
      {messages.map((message, idx) => (
        <div key={idx}>
          <strong>{message.userName}</strong>
          <p className="text">{message.text}</p>
          <p className="date-time">
            {new Date(message.timestamp).toLocaleString()}
          </p>
        </div>
      ))}
      <Text
        formSubmit={formSubmit}
        text={text}
        setText={setText}
        userName={userName}
        setUserName={setUserName}
      />
    </div>
  );
};

export default Chat;

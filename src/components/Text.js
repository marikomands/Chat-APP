import { getDatabase, ref, push } from "firebase/database";

// update texts ↓
const Text = ({ text, setText, userName, setUserName }) => {
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

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <div>Name</div>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />{" "}
        </div>
        <div>Text</div>
        <textarea
          value={text}
          cols="30"
          rows="7"
          onChange={(e) => setText(e.target.value)}
        />

        <button className="submit">Send</button>
      </form>
    </div>
  );
};

export default Text;

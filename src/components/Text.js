const Text = ({ formSubmit, text, setText, userName, setUserName }) => {
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

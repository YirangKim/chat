import { Routes, Route, Link } from "react-router-dom";

function ChatList() {
  return (
    <Routes>
      <Route
        path="/History"
        element={
          <div className="user-chat">
            <p>사무용 1kg 100만원대 노트북 추천해줘</p>
          </div>
        }
      />
    </Routes>
  );
}

export default ChatList;

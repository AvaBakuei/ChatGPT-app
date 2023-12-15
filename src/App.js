import './index.css';
import './App.css';
import {sendMsgToOpenAI} from "./chatApi";
import {useEffect, useRef, useState} from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatBox from "./components/ChatBox/ChatBox";
import {ToastContainer} from "react-toastify";

function App() {
    const msgEnd = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=> {
        msgEnd.current.scrollIntoView();
    }, [messages])

    const sendMessage = async (text) => {
        setInputValue('');
        setMessages([
            ...messages,
            {text, isBot: false, isRes: true}
        ])
        const response = await sendMsgToOpenAI(text);
        setMessages([
            ...messages,
            { text, isBot: false, isRes: true },
            { text: response, isBot: true, isRes: response ? true : false }
        ]);
    }

    const handleSend = async () => {
        const text = inputValue;
        await sendMessage(text);
    }

    const handleQuery = async (e) => {
        const text = e.target.value;
        await sendMessage(text);
    }

    const handleEnter = async (e) => {
       if(e.key === "Enter") await handleSend();
    }
    const handleChange = (msg) => {
        setInputValue(msg)
    }
  return (
    <div className="App flex justify-center h-screen bg-white p-14 max-xl:p-6 bg-gradient-to-br from-[#e2c8f2] via-[#efd6c2] to-[#a985b7]">
      <div className="main flex w-10/12 max-xl:w-full rounded-[2rem] overflow-hidden">
          <Sidebar handleQuery={handleQuery}/>
          <ChatBox
              messages={messages}
              msgEnd={msgEnd}
              value={inputValue}
              handleChange={handleChange}
              handleSend={handleSend}
              handleEnter={handleEnter}
          />
      </div>
      <ToastContainer style={{ width: "785px" }}/>
    </div>
  );
}

export default App;

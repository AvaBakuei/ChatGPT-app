import PropTypes from "prop-types";
import chatLogo from '../../assets/images/chatLogo.png'
import avatarImg from "../../assets/images/avatar.jpg";
import Avatar from "../Sidebar/Avatar";

const Chat = ({ messages, msgEnd }) => {
    const chatGPT = "ChatGPT";
    const userName = "John Smith";
    return (
        <div className="chats flex flex-col h-3/4 overflow-scroll">
            {messages?.length ?
                messages?.map((message, i)=>(
                    <div key={i}
                         className={`${message.isBot? "chatBot" : "chat items-end"} flex flex-col mb-4`}
                    >
                        {message.isRes &&
                            <>
                                <Avatar
                                    img={message.isBot ? chatLogo: avatarImg}
                                    name={message.isBot ? chatGPT : userName}
                                    avatarStyle={message.isBot ? "flex-row" : "flex-row-reverse"}
                                    nameStyle={`${message.isBot ? "" : "mr-2 ml-0"} text-[#1b0036]`}
                                />
                                    <span className={`${message.isBot ? "ml-8 rounded-tl-[0.25rem] rounded-tr-[1.15rem] rounded-br-[1.15rem] rounded-bl-[1.15rem] bg-[#eddbdc]" : "mr-8 rounded-tl-[1.15rem] rounded-tr-[0.25rem] rounded-br-[1.15rem] rounded-bl-[1.15rem] bg-[#d7eec1]"} min-w-min max-w-md mb-1 p-4`}>
                                    <p className="text-[#3b3143]">{message.text}</p>
                                </span>
                            </>
                        }
                    </div>
                )) :
                <div className="presentation flex flex-col items-center justify-center m-20 p-10 max-md:m-4">
                    <img className="w-20 h-20 mb-2" src={chatLogo} alt="Chat Logo" />
                    <div className="text text-[#1b0036] text-base text-center font-semibold">
                        How can I help you today?
                    </div>
                </div>
            }
            <div ref={msgEnd} />
        </div>
    )
}

Chat.propTypes = {
    messages: PropTypes.array,
    msgEnd: PropTypes.object,
}

export default Chat
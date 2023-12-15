import gptLogo from '../../assets/images/chatgpt.png';
import PropTypes from "prop-types";
import newImg from '../../assets/images/new.png'

const UpperSide = ({ handleQuery }) => {
    return (
        <div className="upperSide flex flex-col w-full">
            <div className="upperSideTop flex items-center justify-left mb-4 p-8 max-lg:p-6 max-sm:p-4">
                <img
                    className="w-14 h-14 mr-4 max-lg:w-10 max-lg:h-10 max-lg:mr-2 max-sm:w-8 max-sm:h-8 object-contain"
                    src={gptLogo}
                    alt="Logo"
                />
                <span className="text-2xl max-lg:text-xl max-sm:text-base text-white">ChatGPT</span>
            </div>
            <button className="flex items-center justify-between rounded-md mx-8 max-lg:mx-6 max-sm:mx-4 p-3 shadow-sm transition ease-in-out hover:bg-[#e2c8f2]/10">
                <span
                    className="text-sm text-white"
                    onClick={() => window.location.reload()}>
                    New Chat
                </span>
                <img src={newImg} alt="Add Message" className="addMsg w-4 h-4" />
            </button>
            <div className="upperSideBottom mx-8 max-lg:mx-6 max-sm:mx-4 mb-4">
                {[
                    ["What is Programming?"],
                    ["How to use API?"]
                ].map(([title], index)=>(
                    <button
                        key={index}
                        className="query flex w-full rounded-md p-3 text-sm text-left text-white hover:bg-[#e2c8f2]/10"
                        value={title}
                        onClick={handleQuery}
                    >
                        {title}
                    </button>
                ))}
            </div>
        </div>
    )
}
UpperSide.propTypes = {
   handleQuery: PropTypes.func,
}
export default UpperSide
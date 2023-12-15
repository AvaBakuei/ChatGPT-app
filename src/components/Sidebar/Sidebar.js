import UpperSide from "./UpperSide";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import avatarImg from '../../assets/images/avatar.jpg';

const Sidebar = ({ handleQuery, newMessage }) => {
    return (
        <div className="sidebar relative flex-col justify-between w-3/12 max-md:w-4/12 bg-[#1b0036] layout flex">
            <UpperSide handleQuery={handleQuery} newMessage={newMessage}/>
            <Avatar
                avatarStyle="p-8 max-lg:p-6 max-sm:p-4"
                nameStyle="text-white max-sm:text-xs"
                img={avatarImg}
                name="John Smith"
            />
        </div>
    )
}

Sidebar.propTypes = {
    handleQuery: PropTypes.func,
    newMessage: PropTypes.func,
}
export default Sidebar
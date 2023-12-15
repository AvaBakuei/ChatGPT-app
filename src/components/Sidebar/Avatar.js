import PropTypes from "prop-types";

const Avatar = ({avatarStyle, img, name, nameStyle}) => {
    return (
        <div className={`${avatarStyle ? avatarStyle : ""} avatar flex items-center justify-left`}>
            <img className="w-8 h-8 rounded-full object-cover" src={img} alt="Avatar"/>
            <span className={`${nameStyle ? nameStyle : ""} ml-2 text-sm font-semibold`}>{name}</span>
        </div>
    )
}
Avatar.propTypes = {
    avatarStyle: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    nameStyle: PropTypes.string,
}
export default Avatar
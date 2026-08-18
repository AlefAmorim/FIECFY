import Avatar from "../Avatar";
import Greeting from "../Greeting";

function ProfileBadge({ children, handleClick }) {
  return (
    <div
      className="profile-container flex items-center gap-2"
      onClick={handleClick}
    >
      <div className="image-wrapper flex max-w-15 rounded-full  border-green-700 border-3 hover:border-green-400 transition-colors">
         {children}
        <Avatar />
      </div>
      <div className="text-amber-50 place-self-end">
        <strong><Greeting nome="Alef"/></strong>
      </div>
    </div>
  );
}

export default ProfileBadge;

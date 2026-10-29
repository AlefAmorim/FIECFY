import { MdPhotoCamera } from "react-icons/md";
import Avatar from "../Avatar";
import Greeting from "../Greeting";

function ProfileBadge({ children, handleClick, user, name, id, handlePictureChange }) {
  return (
    <div
      className="profile-container flex items-center gap-2"
      onClick={handleClick}
    >
      <div className="image-wrapper relative flex max-w-15 rounded-full  border-green-700 border-3 hover:border-green-400 transition-colors">
        {children}
        <Avatar imgUrl={user?.pic_url}/>
        {/* <div className="bg-white p-4  absolute"> */}
          <div className="absolute h-full w-full bg-transparent flex rounded-full  justify-center  cursor-pointer text-zinc-900">
            {/* <MdPhotoCamera size={20}/> */}
            <input type="file" className="h-full w-full bg-transparent text-transparent cursor-pointer absolute" name="pic_url" accept="image/png, image/jpeg" id="pic_url" onInput={handlePictureChange}/>
          {/* </div> */}

        </div>
      </div>
      <div className="text-amber-50 place-self-end">
        <strong><Greeting nome={user?.name} /></strong>
      </div>
    </div>
  );
}

export default ProfileBadge;

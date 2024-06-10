import Github from "./svgs/Github";
import Twitter from "./svgs/Twitter";
import Instagram from "./svgs/Instagram";
import LinkedIn from "./svgs/LinkedIn";

interface ProfileCardProps {
    avatar: string;
    name: string;
    header: string;
    bio: string;
    contact: string;
};

const ProfileCard = ({ avatar, name, header, bio, contact }: ProfileCardProps) => {
    return (
        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-neutral-200 mt-[200px] p-4 w-[340px] bg-white">
            <img className="h-[60px] mt-6" src={avatar} />
            <div className="text-center">
                <p className="text-2xl">{name}</p>
                <p className="text-neutral-500 text-sm">{header}</p>
            </div>
            <div className="mb-3 text-center text-neutral-600">
                <p>{bio}</p>
            </div>
            <div className="w-full">
                <button className="bg-indigo-700 w-full h-11 hover:bg-indigo-800 shadow-sm text-white py-2 px-4 rounded">
                    {contact}
                </button>
            </div>
            <div className="flex flex-row justify-around mt-2 mb-3 h-5 w-8/12">
                <Github />
                <LinkedIn />
                <Instagram />
                <Twitter />
            </div>
        </div>
    )
}

export default ProfileCard;
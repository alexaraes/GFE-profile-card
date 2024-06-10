interface ProfileCardProps {
    avatar: string;
    name: string;
    header: string;
    bio: string;
    contact: string;
};

const ProfileCard = ({ avatar, name, header, bio, contact }: ProfileCardProps) => {
    return (
        <div className="flex flex-col items-center gap-6 rounded-lg mt-[200px] w-[340px] bg-white">
            <img className="h-[60px] mt-6" src={avatar} />
            <div className="text-center">
                <p className="text-2xl">{name}</p>
                <p className="text-neutral-500">{header}</p>
            </div>
            <div className="text-center text-neutral-600">
                <p>{bio}</p>
            </div>
            <div>
                <p>{contact}</p>
            </div>
        </div>
    )
}

export default ProfileCard;
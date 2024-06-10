import ProfileCard from "../components/ProfileCard";

const data = {
    avatar: "/GFE-profile-card/profile.png",
    name: "Sarah Dole",
    header: "Front End Engineer @ Microsoft",
    bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
    contact: "Contact me"
};

export default function Page() {
    const { avatar, name, header, bio, contact } = data;
    return (
        <div className="flex justify-center">
            <ProfileCard
                avatar={avatar}
                name={name}
                header={header}
                bio={bio}
                contact={contact}
            />
        </div>
    )
};
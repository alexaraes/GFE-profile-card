import ProfileCard from "../components/ProfileCard";

const data = {
    name: "Sarah Dole",
    header: "Front End Engineer @ Microsoft",
    bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
    contact: "Contact me"
};

export default function Page() {
    const { name, header, bio, contact } = data;
    return (
        <div className="bg-gray-300">
            <ProfileCard />
        </div>
    )
};
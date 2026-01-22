import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
    return (
        <div className="flex justify-center items-center py-9">
            <UserProfile path="/user-profile" />
        </div>
    )
}
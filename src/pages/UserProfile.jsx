import { useParams } from "react-router-dom"
function UserProfile() {
    const { id } = useParams()

    return (
        <div className="center">
            <h1>User Profile</h1>
            <p>Viewing user: {id}</p>
        </div>
    )
}
export default UserProfile;
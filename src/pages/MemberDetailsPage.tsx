import {useNavigate} from "react-router-dom";

export default function MemberDetailsPage() {
    const navigate = useNavigate();
    return <div>
        <button onClick={() => {
            navigate('/')
        }}>Navigate to Search</button>
        Member Details Page
    </div>
}
import SearchComponent, {Member} from "../components/SearchComponent";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const MembersComponent = () => {
    return <div>members</div>
}
export default function SearchPage() {
    const navigate = useNavigate();
    const [members, setMembers] = useState<Member[]>([]);
    return <div>
        <button onClick={() => {
            navigate('member-details')
        }}>Navigate to members</button>
        <SearchComponent />
        <MembersComponent />
    </div>
}
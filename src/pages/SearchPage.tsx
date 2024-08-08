import SearchComponent, {Member} from "../components/SearchComponent";
import React, {useState} from "react";
import MembersComponent from "../components/MembersComponent";
import {useNavigate} from "react-router-dom";


export default function SearchPage() {
    const [members, setMembers] = useState<Member[]>([]);


    return <div>

        <SearchComponent setMembers={setMembers} />
        <MembersComponent members={members}/>
    </div>
}
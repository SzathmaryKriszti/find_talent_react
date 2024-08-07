import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import MemberComponent from "./MemberComponent";


type Member = {
    id: number;
    username: string;
    name: string;
    createdAt: string;
    avatarUrl: string;
}

export default function SearchComponent() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('');
    const [members, setMembers] = useState<Member[]>([]);


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.get<Member[]>(`http://localhost:8080/api/searches/member?language=${encodeURIComponent(language)}`)
            .then((response) => {
                const memberList = response.data
                setMembers(memberList);
                // navigate('members', {state: {members}})
                return response;
            });
    }


    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                <div className="mb-10 md:mb-10">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Find
                        Talent</h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">With this
                        application, you will be able to find developers who can work in the programming language of
                        your choice. If you click on their cards, you can see their GitHub repositories.</p>
                </div>


                <form onSubmit={handleSubmit} className="max-w-md mx-auto py-6 sm:py-8 lg:py-10">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            autoComplete={''}
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-green-500 dark:focus:border-green-500"
                            placeholder="Java, Scala, Kotlin..." required
                            onChange={(event) => setLanguage(event.target.value)}
                        />
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-greeen-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400">Search
                        </button>
                    </div>
                </form>


            </div>

            <div  className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-6 xl:gap-8 py-6 sm:py-8 lg:py-10">

            {
                members.map((member, index) => (

                        <div key={index} className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <Link to={'/member-details'} className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                <img src={member.avatarUrl} loading="lazy" alt="Member avatar"
                                     className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                            </Link>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-600 text-center">
                                    <Link to={''} className="transition duration-100 hover:text-gray-400 active:text-gray-400">{member.name}</Link>
                                </h2>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img src={member.avatarUrl} loading="lazy" alt="Member avatar"
                                                 className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div>
                                            <span className="block text-green-500">{member.username}</span>
                                            <span className="block text-sm text-gray-400">On GitHub since {member.createdAt.substring(24)}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                ))
            }

            </div>

        </div>

    );
}
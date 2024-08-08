import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export interface MemberDetails {
    id: number;
    username: string;
    name: string;
    location: string;
    email: string;
    bio: string;
    createdAt: string;
    avatarUrl: string;
    repoDetailsItemList: Repos[];
}

interface Repos {
    id: number;
    member: string;
    language: string;
    url: URL;
    repoName: string;
    createdAt: string;
    description: string;
}

export default function MemberDetailsComponent() {
    const {id} = useParams();
    const [member, setMember] = useState<MemberDetails>();

    function loadMemberDetails(id: string | undefined) {
        axios.get<MemberDetails>(`http://localhost:8080/api/searches/member-details/${id}`)
            .then((response) => {
                const member:MemberDetails = response.data
                setMember(member);
            })
    }

    useEffect(() => {
        loadMemberDetails(id);
    },[id])

    return (

        <div className="bg-white py-6 sm:py-8 lg:py-12">

            <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">


                    <div>
                        <div className="pb-10">
                            <Link to={'/'} type="button"
                                  className="text-white end-2.5 bottom-2.5 bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-greeen-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-400">Back</Link>
                        </div>
                        <img
                            src={member?.avatarUrl}
                            loading="lazy" alt="Member avatar"
                            className="max-h-15 max-w-15 object-cover object-center rounded-full shadow-lg"/>
                    </div>

                    <div className="md:pt-8">
                        <p className="text-center font-bold text-indigo-500 md:text-left">Hey, I am</p>

                        <h1
                            className="mb-1 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-1 md:text-left">{member?.name}</h1>

                        <h2 className="mb-2 text-center text-xl font-semibold text-gray-500 sm:text-2xl md:mb-4 md:text-left">
                            <Link to={`https://github.com/${member?.username}`}
                                  className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                                {member?.username}
                            </Link>
                        </h2>

                        <div className="flex place-items-left pt-10">
                            <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <h3
                                className="mb-2 text-center text-xl font-semibold text-gray-400 sm:text-xl md:mb-4 md:text-left pl-2">{member?.email}</h3>
                        </div>

                        <div className="flex place-items-left pb-10">
                            <svg className="h-7 w-7 text-gray-400" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <h5
                                className="self-center text-xl font-semibold text-gray-400 sm:text-xl md:mb-4 md:text-left pl-2">{member?.location}</h5>
                        </div>

                        <h4 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-2 md:text-left">About
                            me</h4>


                        <h6 className="mb-6 mt-3 text-gray-500 sm:text-lg md:mb-8 md:text-left">{member?.bio}</h6>
                    </div>

                    {
                        member?.repoDetailsItemList.map((repo, index) => (

                            <div key={index}
                                className="flex flex-col items-center overflow-hidden rounded-lg border ">

                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <span className="text-sm text-gray-400">{repo.createdAt.substring(24)}</span>

                                    <h2 className="text-xl font-bold text-gray-800">
                                        <Link to={repo.url}
                                              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{repo.repoName}
                                            </Link>
                                    </h2>

                                    <p className="text-gray-500">{repo.description}</p>

                                    <div>
                                        <p
                                            className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                                            Language: {repo.language} </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    );

}
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {Member} from "./SearchComponent";


export default function MembersComponent({members}: { members: Member[] }) {
    const navigate = useNavigate();


    return (
        <div
            className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 py-6 sm:py-8 lg:py-10">
            {
                members.map((member, index) => (

                    <div key={index} className="flex flex-col overflow-hidden rounded-lg border bg-white">

                        <Link to={`/member-details/${member.id}`}
                              className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <div
                                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                                <img src={member.avatarUrl} loading="lazy" alt="Member avatar"
                                     className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                            </div>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-600 text-center">
                                    <div
                                        className="transition duration-100 hover:text-gray-400 active:text-gray-400">{member.name}</div>
                                </h2>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img src={member.avatarUrl} loading="lazy" alt="Member avatar"
                                                 className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div>
                                            <span className="block text-green-500">{member.username}</span>
                                            <span
                                                className="block text-sm text-gray-400">On GitHub since {member.createdAt.substring(24)}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>

                    </div>


                ))
            }


        </div>
    );
}
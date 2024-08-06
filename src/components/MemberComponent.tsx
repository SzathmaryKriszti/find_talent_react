import React from "react";
import {Link} from "react-router-dom";

export default function MemberComponent(){
    return(
        <div
            className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 py-6 sm:py-8 lg:py-10">

            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
                <Link to={'/member-details'} className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
                    <img src={'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D'} loading="lazy" alt="Member avatar"
                         className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                </Link>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <h2 className="mb-2 text-lg font-semibold text-gray-600 text-center">
                        <Link to={''} className="transition duration-100 hover:text-gray-400 active:text-gray-400">Gyula</Link>
                    </h2>

                    <div className="mt-auto flex items-end justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                <img src={'https://images.unsplash.com/photo-1557862921-37829c790f19?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D'} loading="lazy" alt="Member avatar"
                                     className="h-full w-full object-cover object-center"/>
                            </div>

                            <div>
                                <span className="block text-green-500">Gyulus</span>
                                <span className="block text-sm text-gray-400">On GitHub since 2020</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}
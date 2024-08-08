import React, {useState} from "react";
import axios from "axios";


export interface Member {
    id: number;
    username: string;
    name: string;
    createdAt: string;
    avatarUrl: string;
}

export default function SearchComponent({ setMembers }: { setMembers: (memberList: Member[]) => void }) {
    const [language, setLanguage] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.get<Member[]>(`http://localhost:8080/api/searches/member?language=${encodeURIComponent(language)}`)
            .then((response) => {
                const memberList = response.data
                setMembers(memberList);
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
        </div>

    );
}
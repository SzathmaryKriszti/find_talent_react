import React from 'react';
import './App.css';
import SearchComponent from "./components/SearchComponent";
import MemberComponent from "./components/MemberComponent";
import MemberDetailsComponent from "./components/MemberDetailsComponent";


function App() {
    return (
        <div className="App">
            <div>
                <SearchComponent />
            </div>
            <div>
                <MemberComponent />
            </div>
            <div>
                <MemberDetailsComponent />
            </div>

        </div>
    );
}

export default App;

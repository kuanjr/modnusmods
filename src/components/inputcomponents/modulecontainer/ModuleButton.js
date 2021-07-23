import React from 'react'

export default function ModuleButton({moduleCode, title, addModules, user}) {
    function handleAddModules() {
        addModules(moduleCode, title, user)
    }
    return (
        <button className="searchresultbutton" onClick={handleAddModules} key={moduleCode}><p>{moduleCode} {title}</p></button>
    );
}

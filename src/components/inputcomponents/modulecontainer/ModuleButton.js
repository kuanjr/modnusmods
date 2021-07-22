import React from 'react'

export default function ModuleButton({moduleCode, title, addModules}) {
    function handleAddModules() {
        addModules(moduleCode, title)
    }
    return (
        <button className="searchresultbutton" onClick={handleAddModules} key={moduleCode}><p>{moduleCode} {title}</p></button>
    );
}

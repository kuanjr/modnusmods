import React from 'react';
import JSONDATA from './moduleList.json'
import ModuleButton from './ModuleButton';

export default function SearchResult({ searchTerm, addModules }) {

    return (
        <div className="searchResult">
          {JSONDATA.filter((val)=> {
            if (searchTerm === '') {
              return searchTerm
            } else if (val.moduleCode.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
            }
          }).map(val => {
            return (
              <ModuleButton moduleCode={val.moduleCode} title={val.title} addModules={addModules} />
            )
          })}
        </div>
    )
}

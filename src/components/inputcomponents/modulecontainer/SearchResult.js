import React from 'react';
import JSONDATA from './moduleList.json'
import ModuleButton from './ModuleButton';
import zIndex from '@material-ui/core/styles/zIndex';

export default function SearchResult({ searchTerm, addModules, user }) {
    return (
        <div className="searchResult">
          {JSONDATA.filter((val)=> {
            if (searchTerm[user-1] === '') {
              return searchTerm[user-1]
            } else if (val.moduleCode.toLowerCase().includes(searchTerm[user-1].toLowerCase())){
             
              return val
            }
          }).map(val => {
            return (
              <ModuleButton moduleCode={val.moduleCode} title={val.title} addModules={addModules} user={user} />
            )
          })}
        </div>
    )
}

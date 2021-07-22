import React from 'react'
import { useState } from 'react'
import Module from './Module'
import Grid from "@material-ui/core/Grid"


export default function ModuleList( { modules, removeModule }) {
    


    return (
        <Grid container spacing={2} direction="row">
            {modules.map(module => {
                return <Module modules={module} removeModule={removeModule} />
            })}
        </Grid>
    )
}

import React from 'react'
import { useState } from 'react'
import Module from './Module'
import Grid from "@material-ui/core/Grid"


export default function ModuleList( { modules, removeModule, user}) {
    return (
        <Grid container spacing={1} direction="row">
            {modules[user-1].map(module => {
                return <Module modules={module} removeModule={removeModule} user={user} />
            })}
        </Grid>
    )
}

import React, { Component } from 'react'

const EditIssue = (props) => {
    const { id } = props.match.params;

    return (
        <div>
            Edit page man!{id}
        </div>
    )
}


export default EditIssue

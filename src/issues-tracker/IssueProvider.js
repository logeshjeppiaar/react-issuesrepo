import React, { useEffect } from 'react'
import IssueContext from './IssueContext'
import { issues as ISSUES } from './IssuesDataSource'

export default function IssueProvider(props) {
    const [issues, setIssue] = React.useState(ISSUES);
    const [showAddIssueFrameFlag, toggleFrame] = React.useState(false);
    
    // useEffect(() => {
    //     setIssue(issues)
    // }, []);

    const editIssue = (issueId) => {
        console.log("Edit issue called ...." + issueId)
    }
    const deleteIssue = (issueId) => {
        console.log("Delete issue called.. " + issueId);
    }
    const addIssue = () => {
        console.log("Add issue called...")
        console.log("showflag:" + showAddIssueFrameFlag)
        toggleFrame(!showAddIssueFrameFlag);
    }
    const showAddIssueFrame = () => {
        toggleFrame(!showAddIssueFrameFlag);
    }
    return (
        <IssueContext.Provider value={{
            issues: issues, editIssue: editIssue, deleteIssue: deleteIssue,
            addIssue: addIssue, showAddIssueFrame: showAddIssueFrameFlag
        }}>
            {props.children}
        </IssueContext.Provider>
    )
}

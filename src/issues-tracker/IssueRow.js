import React from "react";
import { IssueContext } from "./IssueContext";
function IssueRow(props) {
    return (
        <IssueContext.Consumer>
            {
                value => (
                    value.issues.map(
                        issue => (<tr key={issue.id}>
                            <td> {issue.issueDescription} </td>
                            <td> {issue.issueStatus} </td>
                            <td> {issue.createdDate}</td>
                            <td> <button className="btn btn-primary"
                                onClick={() => value.editIssue(issue.id)}>Edit</button></td>
                            <td> <button className="btn btn-danger"
                                onClick={() => value.deleteIssue(issue.id)}>Delete</button> </td>
                        </tr>
                        )
                    )
                )}
        </IssueContext.Consumer>
    );
}
export default IssueRow;

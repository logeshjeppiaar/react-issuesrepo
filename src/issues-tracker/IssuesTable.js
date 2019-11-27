import React from "react";
import IssueRows from "./IssueRow";
import IssueContext from "./IssueContext";
function IssuesTable() {
    return (
        <IssueContext.Consumer>
            {values => (<React.Fragment>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th> Issue </th>
                            <th> Status </th>
                            <th> Created time</th>
                            <th> Edit Issue</th>
                            <th> Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        <IssueRows />
                    </tbody>
                </table>
                <button className="btn btn-warning" onClick={() => values.addIssue()}>Add new issue</button>
            </React.Fragment>)}
        </IssueContext.Consumer>
    );
}
export default IssuesTable;

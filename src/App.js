import React from 'react';
import IssueProvider from './issues-tracker/IssueProvider'
import IssuesTable from './issues-tracker/IssuesTable';
import IssueContext from './issues-tracker/IssueContext';
function App() {
  return (
    <div className="App">
      <IssueProvider>
        <IssuesTable />
        <IssueContext.Consumer>
          {
            values => {
              if (values.showAddIssueFrame)
                return <div>Add Issue Component here!</div>
            }}
        </IssueContext.Consumer>
      </IssueProvider>
    </div>
  );
}

export default App;

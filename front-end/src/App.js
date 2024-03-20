import { useState } from "react";

import "./App.scss";

function App() {
  const [groupName, setGroupName] = useState("");
  const [viewGroup, setViewGroup] = useState(false);
  const [report, setReport] = useState({
    title: "",
    description: "",
    date: "",
    author: "",
    recipient: "",
    status: "",
  });

  const [groupList, setGroupList] = useState([]);

  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };
  const createReport = () => {
    console.log("createReport");
  };

  const createGroup = () => {
    if (groupName === "") return;
    setGroupList([...groupList, groupName.toUpperCase()]);
  };

  return (
    <div className="App">
      <header className="App__header">Report-o-matic</header>
      <main className="App__main">
        <button
          className="App__button"
          onClick={viewGroup ? createReport : createGroup}
        >
          {viewGroup ? "Create Report" : "Create Group"}
        </button>
        <label htmlFor="groupName" className="App__label">
          Group Name:
          <input
            type="text"
            name="groupName"
            value={groupName}
            onChange={handleGroupName}
            className="form-control"
            required
          />
        </label>
        {groupList.map((group) => (
          <div key={group} className="App__group">
            {group}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;

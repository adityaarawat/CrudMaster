const App=()=>{
  return <>
    <h1>Todo Application</h1>
    <div className="container">
       <div className="left">
      <h2>Set <span>Reminders</span> for tasks</h2>
      <div className="inputDiv">
        <form>
        <input type="text" placeholder="Enter Your Task"/>
        <button>Create Todo</button>
        </form>
      </div>
    </div>
    <div className="right">
      <h2>
        <span>Pending</span> Todos
        <ol>
         <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
         
         <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
          <li>
            <p>kamm kar Lo bhai</p>
            <input type="checkbox" />
            <small>delete</small>
          </li>
        </ol>
      </h2>
    </div>
    </div>
   
  </>
}

export default App;
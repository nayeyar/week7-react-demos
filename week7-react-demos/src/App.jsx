// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import ListItem from './components/ListItem'
import Form from './components/Form'

function App() {
  const [isTaskListVisible, setIsTaskListVisible] = useState(false);
  const [data, setData] = useState([
    {
      title: "Work on Activate",
      description: "Activate",
      time: "10 AM"
    },
    {
      title: "Run Learning Squad",
      description: "React",
      time: "11 AM"
    },
    {
      title: "Have Lunch",
      description: "Lunch",
      time: "1 PM"
    }
  ]);

  return (
    <>
      <div>
        <Form data={data} setData={setData} />
      </div>
      <div>
        <h1>Hello</h1>
        {isTaskListVisible && <ol>
          {/* <ListItem taskName="have lunch" description="lunch" time="1PM" />
        <ListItem taskName="start work" description="React demo" time="10AM" />
        <li>
          <h2>Start Work</h2>
          <p>Description: React Demo</p>
          <p>Time: 10AM</p>
        </li> */}
          {
            data.map((task, index) => (
              <ListItem
                key={index}
                taskName={task.title}
                description={task.description}
                time={task.time}
              />
            ))
          }
        </ol>}
        <button onClick={() => setIsTaskListVisible(!isTaskListVisible)}>{isTaskListVisible ? "Hide Task" : "Show Task"}</button>
      </div>
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;

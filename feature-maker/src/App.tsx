import React, { FC } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Just throwing up a default webpage, will alternate between starting in on features and making random notes <br />
          If this gets published to the web what needs to be here.
          Two categories: <br />
          <table>
            <tr>
              <td>
                <Link to='/feature-maker'> I want to organize my work</Link>
                <br />
                since I want to organize my work I may as well start implementing there.
              </td>
              <td>Help me with my work. </td>
            </tr>
          </table>
        </p>
      </header>
    </div>
  )
}

export default App

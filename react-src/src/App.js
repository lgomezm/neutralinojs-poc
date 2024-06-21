import { useState } from 'react'
import './App.css';

import { filesystem, os } from "@neutralinojs/lib"

function App() {
  const [installationPath, setInstallationPath] = useState('')

  const selectInstallationPath = async () => {
    os.showFolderDialog('Select installation directory', {
      defaultPath: './'
    }).then((path) => {
      setInstallationPath(path ?? '')
    })
  }

  const install = async () => {
    if (installationPath) {
      let data = await filesystem.readFile('./test.txt');
      await filesystem.writeFile(`${installationPath}/test.txt`, data);
      os.showNotification('Result', 'Installation has completed successfully!');
    }
  }

  return <div className="container">
    <h1>Installation POC</h1>

    <p>Select the installation directory.</p>

    <div className="row">
      <input
        id="path-input"
        onChange={(e) => setInstallationPath(e.currentTarget.value)}
        placeholder="Enter your directory"
        value={installationPath}
      />
      <button type="button" onClick={selectInstallationPath}>Select</button>
    </div>

    <div className="row">
      <button type="button" onClick={install}>Install</button>
    </div>
  </div>
}

export default App

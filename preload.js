const { contextBridge, ipcRenderer } = require('electron')

/*contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
})*/
contextBridge.exposeInMainWorld('darkmode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})
contextBridge.exposeInMainWorld('', {
  
})
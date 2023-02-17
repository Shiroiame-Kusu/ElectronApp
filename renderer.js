function toMin(){
    ipcRenderer.send('min-app')
}
function toClose(){
    ipcRenderer.send('close-app')
}
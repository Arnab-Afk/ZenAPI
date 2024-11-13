import { contextBridge , shell} from 'electron';
contextBridge.exposeInMainWorld('electron', {
  shell: {
    openExternal: (url) => shell.openExternal(url)
  }
});
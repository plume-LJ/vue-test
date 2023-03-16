import Clipboard from 'clipboard'
import {getConfig} from './options'

let opts = getConfig()

export {Clipboard}

export function copyText (text: any, container: any) {
  return new Promise((resolve, reject) => {
    const fakeElement = document.createElement('button')
    const clipboard = new Clipboard(fakeElement, {
      text: function () {
        return text
      },
      action: function () {
        return 'copy'
      },
      container: typeof container === 'object' ? container : document.body
    })
    clipboard.on('success', function (e: unknown) {
      clipboard.destroy()
      resolve(e)
    })
    clipboard.on('error', function (e: any) {
      clipboard.destroy()
      reject(e)
    })
    if (opts.appendToBody) {
      document.body.appendChild(fakeElement)
    }
    fakeElement.click()
    if (opts.appendToBody) {
      document.body.removeChild(fakeElement)
    }
  })
}
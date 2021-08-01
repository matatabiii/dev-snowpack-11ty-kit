import { console } from './modules/console'
const text = 'hご'
console(text)

function doAlert () {
  window.console.log('11')
}
doAlert()

// async function f() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => resolve('done!'), 1000)
//   })

//   const result = await promise // promise が解決するまで待ちます (*)

//   alert(result) // "done!"
// }

// f()

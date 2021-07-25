import { console } from './modules/console';

const text = 'ｈご'
console(text)

async function f() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve('done!'), 1000)
  })

  const result = await promise // promise が解決するまで待ちます (*)

  alert(result) // "done!"
}

f()

import PrettyError from 'pretty-error'
const pe = PrettyError.start()
import shell from 'shelljs'
const { ShellString } = shell

pe.appendStyle({
  'pretty-error > header > title > kind': {
    background: 'white',
    color: 'bright-cyan',
  },
  'pretty-error > header > colon': {
    color: 'bright-blue',
  },
  'pretty-error > header > message': {
    color: 'bright-white',
    // we can use black, red, green, yellow, blue, magenta, cyan, white,
    // grey, bright-red, bright-green, bright-yellow, bright-blue,
    // bright-magenta, bright-cyan, and bright-white
    background: 'bright-magenta',
    padding: '0', // top/bottom left/right
  },
  'pretty-error > trace > item': {
    marginLeft: 0,
    bullet: '"<grey>o</grey>"',
  },
  'pretty-error > trace > item > header > pointer > file': {
    color: 'bright-magenta',
  },
  'pretty-error > trace > item > header > pointer > colon': {
    color: 'magenta',
  },
  'pretty-error > trace > item > header > pointer > line': {
    color: 'bright-magenta',
  },
  'pretty-error > trace > item > header > what': {
    color: 'bright-white',
  },
  'pretty-error > trace > item > footer > addr': {},
})

export const flashError = (message: string) => {
  new ShellString(message + '\n').toEnd('lib/error.log')
  console.error(pe.render(new Error(message)))
}

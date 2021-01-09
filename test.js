function hello(name) {
  return `Hello! I am ${name}`
}

function assert(expected, result) {
  if(expected === result) {
    return true
  } else {
    throw new Error(`Fail! expected: ${expected}, result: ${result}`)
  }
}

assert(hello('Eiki'), "Hello! I am Eiki");

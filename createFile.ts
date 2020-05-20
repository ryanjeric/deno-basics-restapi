const encoder = new TextEncoder()

const greetText = encoder.encode('Hello World\nMy name is Sasa');

await Deno.writeFile('greet.txt',greetText)

//deno run --allow-write createFile.ts
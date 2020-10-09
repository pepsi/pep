# Pep (v3) is a simple [Bf](https://en.wikipedia.org/wiki/Brainfuck) compiler I wrote using rust.

If you look at the codebase, it will seem very bloated and unnecessary, but that is only because this is a general purpose WASM code generation tool repurposed for this one specific tool.

This does not currently implement `,` which means stdin reliant programs wont work.

Infinite looping apps will not work, since I only print after the program has finished. (Due to console.log letting me print without newline).

I implement 1 new symbol ":", which prints the numerical value of the current cell.

I include a small dev server, just run "make" and it should give you a live updating auto compiling server.

Navigate to `localhost:8000` in your browser to see the code. You will need to use F12 so see the devtools and console output, but it should work.


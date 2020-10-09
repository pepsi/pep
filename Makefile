dev: src/main.rs index.html 
	cargo run > index.wat
	wat2wasm index.wat -o index.wasm
	wasm-opt index.wasm -O3 -o final.wasm

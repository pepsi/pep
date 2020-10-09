dev: src/main.rs index.html
	python3 -m http.server 8000 & nodemon --exec "cargo run > a.wat && wat2wasm a.wat || exit 1" -e "\html,js,rs"

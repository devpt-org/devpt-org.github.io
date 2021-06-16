start-dev:
	npm run start

debug-build:
	npm run build && python3 -m http.server  --directory public 1657
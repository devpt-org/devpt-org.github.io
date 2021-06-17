start-dev:
	npm run start

start-prod:
	npm run build && python3 -m http.server  --directory public 1657
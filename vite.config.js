import {defineConfig} from "vite"
import basicSsl from "@vitejs/plugin-basic-ssl"


export default defineConfig({
	root: "src",
	plugins: [basicSsl()],
	server: {
		https: true, // same as "--https" flag
		host: true, // same as "--host" flag
	},
})
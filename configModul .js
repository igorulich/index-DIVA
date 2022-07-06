export const config = {
	clean: `./assets/**/*.*`,
	srcFonts: `./src/assets/scss/_fonts.scss`,
	appFonts: `./assets/fonts/`,
	build: {
		html: `./assets/`,
		js: `./assets/js`,
		css: `./assets/css/`,
		icons: `./src/assets/scss/`,
		images: `./assets/images/`,
		fonts: `./assets/fonts/`,
		resources: `./assets/`,
	},
	src: {
		html: `./src/assets/*.html`,
		js: `./src/assets/js/**/*.js`,
		css: `./src/assets/scss/**/*.scss`,
		images: `./src/assets/images/*.{jpg,png,jpeg,webp}`,
		svg: `./src/assets/images/icons/*.svg`,
		icons: [
			`./src/assets/scss/icons/*.svg`,
			`!./src/assets/scss/icons/_sprite.scss`,
		],
		fonts: `./src/assets/fonts/*.ttf `,
		resources: `./src/assets/resources/*.*`,
	},
	watch: {
		html: `./src/**/*.html`,
		js: [`./src/assets/js/*.js`, `!./src/assets/js/scripts.js.map`],
		css: [
			`./src/assets/scss/**/*.scss`,
			`!./src/assets/scss/styles.css.map`,
		],
		images: `./src/assets/images/*.{jpg,png,jpeg,webp}`,
		icons: [`./src/assets/scss/*.svg`, `!./src/assets/scss/*.scss`],
		svg: `./src/assets/images/icons/*.svg`,
		fonts: `./src/assets/fonts/*.{ttf, woff, woff2 }`,
		resources: `./src/assets/resources/*.*`,
	},
	svgSpriteConfig: {
		log: "info",
		shape: {
			dimension: {
				maxWidth: 40,
				maxHeight: 40,
			},
			spacing: {
				padding: 10,
				box: "content",
			},
			svg: {
				dimensionAttributes: false,
			
			},
		},
		mode: {
			stack: false,
			symbol: false,
			view: false,
			example: false,
			dest: ".",
			css: {
				dest: "icons",
				sprite: "sprite.svg",
				bust: false,
				inline: true,
				prefix: ".",
				render: {
					scss: {
						dest: "_sprite.scss",
					},
				},
			},
		},
	},
	serverConfig: {
		host: "localhost",
		port: "5678",
		notify: false,
		open: "local",
		logPrefix: "the process is running",
		files: false,
		files: ["./assets/index.html"],
		files: ["./assets/css/styles.css", "!./assets/css/styles.css.map"],
		files: ["./assets/js/scripts.js", "!./assets/js/scripts.js.map"],
		server: {
			baseDir: "./assets/",
		},
	},
	autoprefixerConfig: {
		overrideBrowserslist: [
			"last 3 versions",
			"Chrome >= 20",
			"Firefox >= 24",
			"Explorer >= 8",
			"iOS >= 6",
			"Opera >= 12",
			"Safari >= 6",
		],
		cascade: false,
	},
};

module.exports = {
    presets: ["module:@react-native/babel-preset"],
    plugins: [
        [
            require.resolve("babel-plugin-module-resolver"),
            {
                root: ["./src"],
                extensions: [
                    ".android.js",
                    ".android.tsx",
                    ".ios.js",
                    ".ios.tsx",
                    ".js",
                    ".ts",
                    ".tsx",
                    ".json",
                ],
                alias: {
                    "@components": "./src/components",
                    "@screens": "./src/screens",
                    "@constants": "./src/constants",
                    "@domain": "./src/domain",
                    "@types": "./src/types",
                    "@store": "./src/store",
                    "@hoc": "./src/hoc",
                    "@hooks": "./src/hooks",
                    "@mock": "./src/mock",
                },
            },
        ],
    ],
};

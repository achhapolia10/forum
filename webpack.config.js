const path = require("path");

const config = {
    entry: {
        vendor: ["@babel/polyfill", "react"],
        index: ["./src/components/entrypoints/index.jsx"]
    },
    output: {
        path: path.resolve(__dirname, "src", "public"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                exclude: [/node_modules/, /public/]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
    }
};

module.exports = config;
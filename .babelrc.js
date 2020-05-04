const presets =
  [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react"
    ]
  ]

const plugins = [
  "@babel/plugin-proposal-class-properties",

]

if (process.env.COMPILER_ENV === 'server') {
  plugins.push(
    [
      "babel-plugin-transform-require-ignore",
      {
        "extensions": [
          ".less",
          ".sass",
          ".css"
        ]
      }
    ], [
    "file-loader",
    {
      "name": "[hash].[ext]",
      "extensions": ["png", "jpg", "jpeg", "gif", "svg"],
      "publicPath": "/public/img",
      "outputPath": null
    }
  ])
}

const addConfigs = { ignore: ["./src/static/"] }

module.exports = { plugins, presets, ...addConfigs }

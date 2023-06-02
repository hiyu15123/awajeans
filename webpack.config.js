const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
      files: ["dist/**/*.js", "dist/**/*.css", "dist/**/*.html"], // 監視するファイルのパス
    }),
  ],
};

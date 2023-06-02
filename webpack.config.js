const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  // その他の設定...
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
      files: ["dist/**/*.css", "dist/**/*.html"], // 監視するファイルのパス
    }),
  ],
};

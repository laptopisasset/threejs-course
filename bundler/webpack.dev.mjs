import { merge } from "webpack-merge";
import commonConfiguration from "./webpack.common.mjs";
import portFinderSync from "portfinder-sync";
import WebpackDevServer from "webpack-dev-server";
import path from "path";

const infoColor = (_message) => {
  return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

export default merge(commonConfiguration, {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: portFinderSync.getPort(8080),
    watchFiles: path.join("dist"),
    open: true,
    https: false,
    onAfterSetupMiddleware: function (server) {
      const port = server.options.port;
      const protocol = server.options.https ? "https" : "http";
      const localIp = WebpackDevServer.internalIPSync("v4");
      const domain1 = `${protocol}://${localIp}:${port}`;
      const domain2 = `${protocol}://localhost:${port}`;

      console.log(
        `Project running at:\n - ${infoColor(domain1)}\n - ${infoColor(
          domain2
        )}`
      );
    },
  },
});

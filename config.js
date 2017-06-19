System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "app/src/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.1.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.1.2",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
    "material-components-web": "npm:material-components-web@0.13.0",
    "npm:@material/button@0.3.7": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/card@0.2.3": {
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/checkbox@0.3.6": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/dialog@0.3.1": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.1.1",
      "focus-trap": "npm:focus-trap@2.3.0"
    },
    "npm:@material/drawer@0.5.0": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/elevation@0.1.8": {
      "@material/animation": "npm:@material/animation@0.2.3"
    },
    "npm:@material/fab@0.3.9": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/form-field@0.2.7": {
      "@material/base": "npm:@material/base@0.2.0",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/grid-list@0.2.4": {
      "@material/base": "npm:@material/base@0.2.0",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/icon-toggle@0.1.12": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/linear-progress@0.1.2": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/list@0.2.10": {
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/menu@0.3.0": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/radio@0.2.5": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/ripple@0.6.2": {
      "@material/base": "npm:@material/base@0.2.0",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/select@0.3.8": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/list": "npm:@material/list@0.2.10",
      "@material/menu": "npm:@material/menu@0.3.0",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/slider@0.1.0": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/snackbar@0.2.1": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/button": "npm:@material/button@0.3.7",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/switch@0.1.8": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/theme": "npm:@material/theme@0.1.5"
    },
    "npm:@material/tabs@0.2.1": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/textfield@0.2.11": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:@material/toolbar@0.4.0": {
      "@material/base": "npm:@material/base@0.2.0",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/rtl": "npm:@material/rtl@0.1.5",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/typography": "npm:@material/typography@0.2.2"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@2.1.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.1.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.2.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.3.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.4.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.1.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.1.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.2.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.3.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.4.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.1.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:focus-trap@2.3.0": {
      "tabbable": "npm:tabbable@1.0.6"
    },
    "npm:material-components-web@0.13.0": {
      "@material/animation": "npm:@material/animation@0.2.3",
      "@material/auto-init": "npm:@material/auto-init@0.1.2",
      "@material/base": "npm:@material/base@0.2.0",
      "@material/button": "npm:@material/button@0.3.7",
      "@material/card": "npm:@material/card@0.2.3",
      "@material/checkbox": "npm:@material/checkbox@0.3.6",
      "@material/dialog": "npm:@material/dialog@0.3.1",
      "@material/drawer": "npm:@material/drawer@0.5.0",
      "@material/elevation": "npm:@material/elevation@0.1.8",
      "@material/fab": "npm:@material/fab@0.3.9",
      "@material/form-field": "npm:@material/form-field@0.2.7",
      "@material/grid-list": "npm:@material/grid-list@0.2.4",
      "@material/icon-toggle": "npm:@material/icon-toggle@0.1.12",
      "@material/layout-grid": "npm:@material/layout-grid@0.2.0",
      "@material/linear-progress": "npm:@material/linear-progress@0.1.2",
      "@material/list": "npm:@material/list@0.2.10",
      "@material/menu": "npm:@material/menu@0.3.0",
      "@material/radio": "npm:@material/radio@0.2.5",
      "@material/ripple": "npm:@material/ripple@0.6.2",
      "@material/select": "npm:@material/select@0.3.8",
      "@material/slider": "npm:@material/slider@0.1.0",
      "@material/snackbar": "npm:@material/snackbar@0.2.1",
      "@material/switch": "npm:@material/switch@0.1.8",
      "@material/tabs": "npm:@material/tabs@0.2.1",
      "@material/textfield": "npm:@material/textfield@0.2.11",
      "@material/theme": "npm:@material/theme@0.1.5",
      "@material/toolbar": "npm:@material/toolbar@0.4.0",
      "@material/typography": "npm:@material/typography@0.2.2"
    }
  }
});

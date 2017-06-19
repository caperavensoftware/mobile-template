export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                "components/input/pp-input.html",
                "custom-attributes/selectable"
            )
            .plugin();

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}
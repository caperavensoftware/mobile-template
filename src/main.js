export function configure(aurelia) {
    return new Promise((resolve) => {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .globalResources(
                "components/templates/pp-input.html",
                "components/templates/pp-header.html",
                "custom-attributes/selectable"
            )
            .plugin();

        aurelia.start().then(() => {
            aurelia.setRoot();
            resolve();
        });
    });
}
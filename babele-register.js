Hooks.once("babele.init", (babele) => {
    console.log("IMPMAL-SS-ES: babele.init ejecutado");
    babele.register({
        module: "impmal-starter-set-es",
        lang: "es",
        dir: "compendium",
    });
});

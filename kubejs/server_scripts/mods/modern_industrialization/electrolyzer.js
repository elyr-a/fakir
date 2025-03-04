ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/electrolyzer"

    const recipes = [
        { // brick dust electrolyze
            item_inputs: [ 
                {item: "modern_industrialization:brick_dust", amount: 32}
            ],
            item_outputs: [
                {item: "modern_industrialization:aluminum_dust", amount: 1},
                {item: "modern_industrialization:sodium_dust", amount: 2},
                {item: "modern_industrialization:silicon_dust", amount: 2}
            ],
            fluid_outputs: [
                {fluid: "modern_industrialization:oxygen", amount: 1000, probability: 0.5 }
            ],
            eu: 32,
            duration: 1200,
            id:  `${id_prefix}/brick_dust_electrolyze`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:electrolyzer';
        event.custom(recipe).id(recipe.id);
    });
})
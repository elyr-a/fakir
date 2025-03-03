ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/macerator"

    const recipes = [
        {
            item_inputs: [
                {item: "kubejs:fakir_clay_block", amount: 1},
            ],
            item_outputs: {item: "kubejs:fakir_clay", amount: 6},
            eu: 8,
            duration: 100,
            id:  `${id_prefix}/fakir_clay_block_maceration`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:macerator';
        event.custom(recipe).id(recipe.id);
    });
})
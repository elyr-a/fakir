ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/blast_furnace"

    const recipes = [
        {
            item_inputs: [
                {item: "modern_industrialization:diamond_dust", amount: 2}
            ],
            item_outputs: {item: "minecraft:diamond", amount: 1},
            eu: 4,
            duration: 200,
            id:  `${id_prefix}/diamond_ebf`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:blast_furnace';
        event.custom(recipe).id(recipe.id);
    });
})
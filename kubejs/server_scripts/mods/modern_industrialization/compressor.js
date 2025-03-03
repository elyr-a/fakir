ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/compressor"

    const recipes = [
        {
            item_inputs: [
                {item: "modern_industrialization:coal_dust", amount: 9}
            ],
            item_outputs: {item: "modern_industrialization:diamond_tiny_dust", amount: 1},
            eu: 4,
            duration: 200,
            id:  `${id_prefix}/diamond_tiny_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:compressor';
        event.custom(recipe).id(recipe.id);
    });
})
ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/mixer"

    const recipes = [
        {
            item_inputs: [
                {item: "minecraft:packed_mud", amount: 4},
                {item: "modern_industrialization:coke_dust", amount: 4},
                {item: "minecraft:blaze_powder", amount: 2}
            ],
            item_outputs: {item: "kubejs:fakir_clay_block", amount: 1},
            eu: 16,
            duration: 200,
            id: `${id_prefix}/fakir_clay_block`
        },
        {
            item_inputs: [
                {item: "kubejs:fakir_clay", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 1000}
            ],
            fluid_outputs: {fluid: "minecraft:water", amount: 1000},
            eu: 16,
            duration: 100,
            id: `${id_prefix}/liquid_powah`
            
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        event.custom(recipe).id(recipe.id);
    });
})
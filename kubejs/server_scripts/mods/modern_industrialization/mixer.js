ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/mixer"

    const recipes = [
        { // fakir clay block
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
        { // liquid powah
            item_inputs: [
                {item: "kubejs:fakir_clay", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 1000}
            ],
            fluid_outputs: {fluid: "modern_industrialization:liquid_powah", amount: 1000},
            eu: 16,
            duration: 100,
            id: `${id_prefix}/liquid_powah`
            
        },
        { // quartz glass
            item_inputs: [
                {item: "modern_industrialization:quartz_dust", amount: 4},
                {item: "minecraft:glass", amount: 5}
            ],
            item_outputs: {item: "ae2:quartz_glass", amount: 5},
            eu: 8,
            duration: 200,
            id: `${id_prefix}/liquid_powah`
            
        },
        {  // glowstone mixer
            item_inputs: [
                {item: "modern_industrialization:gold_dust", amount: 1},
                {item: "minecraft:redstone", amount: 1}
            ],
            item_outputs: {item: "minecraft:glowstone_dust", amount: 2},
            eu: 8,
            duration: 100,
            id: `${id_prefix}/glowstone_dust_mixer`
        },
        {  // clay
            item_inputs: [
                {item: "exdeorum:dust", amount: 1},
            ],
            fluid_inputs: [
                {fluid: "minecraft:water", amount: 1000}
            ],
            item_outputs: {item: "minecraft:clay", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/clay_mixer`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:mixer';
        event.custom(recipe).id(recipe.id);
    });
})
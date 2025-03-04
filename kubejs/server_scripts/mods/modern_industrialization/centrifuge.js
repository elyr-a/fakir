ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/centrifuge"

    const recipes = [
        { // liquid powah centrifuge
            fluid_inputs: [
                {fluid: "modern_industrialization:liquid_powah", amount: 1000}
            ],
            item_outputs: {item: "powah:dielectric_paste", amount: 24},
            fluid_outputs: {fluid: "modern_industrialization:synthetic_rubber", amount: 750},
            eu: 16,
            duration: 200,
            id:  `${id_prefix}/liquid_powah_centrifuging`
        },
        { // glowstone centrifuge
            item_inputs: [
                {item: "minecraft:glowstone_dust", amount: 2}
            ],
            item_outputs: [
                {item: "minecraft:redstone"},
                {item: "modern_industrialization:gold_dust"}
            ],
            eu: 8,
            duration: 400,
            id: `${id_prefix}/glowstone_dust_centrifuge`
        },
        { // cow centrifuge
            item_inputs: [
                {item: "minecraft:cow_spawn_egg", amount: 1, probability: 0.5}
            ],
            item_outputs: [
                {item: "minecraft:leather", amount: 1},
                {item: "minecraft:beef", amount: 2}
            ],
            fluid_outputs: [
                {fluid: "minecraft:milk", amount: 250},
                {fluid: "modern_industrialization:molten_redstone", amount: 100}
            ],
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/cow_centrifuging`
        },
        { // sheep centrifuge
            item_inputs: [
                {item: "minecraft:sheep_spawn_egg", amount: 1, probability: 0.5}
            ],
            item_outputs: [
                {item: "minecraft:white_wool", amount: 1},
                {item: "minecraft:mutton", amount: 2}
            ],
            fluid_outputs: {fluid: "modern_industrialization:molten_redstone", amount: 100},
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/sheep_centrifuging`
        },
        { // pig centrifuge
            item_inputs: [
                {item: "minecraft:pig_spawn_egg", amount: 1, probability: 0.5}
            ],
            item_outputs: [
                {item: "minecraft:porkchop", amount: 2}
            ],
            fluid_outputs: {fluid: "modern_industrialization:molten_redstone", amount: 100},
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/pig_centrifuging`
        },
        { // chicken centrifuge
            item_inputs: [
                {item: "minecraft:chicken_spawn_egg", amount: 1, probability: 0.5}
            ],
            item_outputs: [
                {item: "minecraft:feather", amount: 1},
                {item: "minecraft:chicken", amount: 2}
            ],
            fluid_outputs: {fluid: "modern_industrialization:molten_redstone", amount: 100},
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/chicken_centrifuging`
        },
        { // rabbit centrifuge
            item_inputs: [
                {item: "minecraft:rabbit_spawn_egg", amount: 1, probability: 0.5}
            ],
            item_outputs: [
                {item: "minecraft:rabbit_foot", amount: 1},
                {item: "minecraft:rabbit_hide", amount: 1},
                {item: "minecraft:rabbit", amount: 2}
            ],
            fluid_outputs: {fluid: "modern_industrialization:molten_redstone", amount: 100},
            eu: 8,
            duration: 200,
            id:  `${id_prefix}/rabbit_centrifuging`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:centrifuge';
        event.custom(recipe).id(recipe.id);
    });
})
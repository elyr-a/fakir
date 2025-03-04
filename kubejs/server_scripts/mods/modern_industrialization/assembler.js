ServerEvents.recipes(event => {
    const id_prefix = "fakir:modern_industrialization/assembler"

    const recipes = [
        { // 4k disk
            item_inputs:[
                {item: "modern_industrialization:analog_circuit", amount: 2},
                {item: "modern_industrialization:steel_plate", amount: 4},
                {item: "ae2:quartz_glass", amount: 2}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:item_storage_cell_4k"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/4k_disk`
        },
        { // 16k disk
            item_inputs:[
                {item: "modern_industrialization:electronic_circuit", amount: 2},
                {item: "modern_industrialization:aluminum_plate", amount: 4},
                {item: "ae2:quartz_glass", amount: 2}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:item_storage_cell_16k"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/16k_disk`
        },
        { // 64k disk
            item_inputs:[
                {item: "modern_industrialization:digital_circuit", amount: 2},
                {item: "modern_industrialization:stainless_steel_plate", amount: 4},
                {item: "ae2:quartz_glass", amount: 2}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:item_storage_cell_64k"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/64k_disk`
        },
        { // 256k disk
            item_inputs:[
                {item: "modern_industrialization:processing_unit", amount: 2},
                {item: "modern_industrialization:platinum_plate", amount: 4},
                {item: "ae2:quartz_glass", amount: 2}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:item_storage_cell_256k"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/256k_disk`
        },
        { // me energy acceptor
            item_inputs:[
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:bronze_plate", amount: 4},
                {item: "ae2:quartz_glass", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 100}
            ],
            item_outputs: {item: "ae2:energy_acceptor"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/energy_acceptor`
        },
        { // me drive
            item_inputs:[
                {item: "modern_industrialization:iron_barrel", amount: 2},
                {item: "modern_industrialization:steel_barrel", amount: 2},
                {item: "ae2:quartz_glass", amount: 4},
                {item: "modern_industrialization:analog_circuit", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 100}
            ],
            item_outputs: {item: "ae2:drive"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_drive`
        },
        { // me controller
            item_inputs:[
                {item: "modern_industrialization:analog_circuit", amount: 4},
                {item: "modern_industrialization:basic_machine_hull", amount: 1},
                {item: "ae2:quartz_glass", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 500}
            ],
            item_outputs: {item: "ae2:controller"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_controller`
        },
        { // ae2 fluix cable
            item_inputs:[
                {item: "modern_industrialization:copper_wire", amount: 12},
                {item: "ae2:quartz_fiber", amount: 6}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 18}
            ],
            item_outputs: {item: "ae2:fluix_glass_cable", amount: 12},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_fluix_cable`
        },
        { // ae2 quartz fiber
            item_inputs:[
                {item: "modern_industrialization:tin_wire", amount: 16},
                {item: "ae2:quartz_glass", amount: 8}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 50}
            ],
            item_outputs: {item: "ae2:quartz_fiber", amount: 32},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/quartz_fiber`
        },
        { // crafting terminal
            item_inputs:[
                {item: "minecraft:crafting_table", amount: 4},
                {item: "modern_industrialization:steel_plate", amount: 4},
                {item: "ae2:monitor", amount: 1},
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:crafting_terminal"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/crafting_terminal`
        },
        { // fluix smart cable
            item_inputs:[
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "ae2:fluix_glass_cable", amount: 16},
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 12}
            ],
            item_outputs: {item: "ae2:fluix_smart_cable", amount: 16},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_fluix_smart_cable`
        },
        { // fluix dense smart cable
            item_inputs:[
                {item: "ae2:fluix_smart_cable", amount: 16},
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:synthetic_rubber", amount: 6}
            ],
            item_outputs: {item: "ae2:fluix_smart_dense_cable", amount: 6},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_fluix_smart_dense_cable`
        },
        { // memory card
            item_inputs:[
                {item: "extended_industrialization:machine_config_card", amount: 1},
                {item: "ae2:fluix_smart_cable", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 100}
            ],
            item_outputs: {item: "ae2:memory_card"},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_memory_card`
        },
        { // level emitter
            item_inputs:[
                {item: "ae2:fluix_smart_cable", amount: 1},
                {item: "minecraft:redstone_torch", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 20}
            ],
            item_outputs: {item: "ae2:level_emitter", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_level_emitter`
        },
        { // ae2 monitor
            item_inputs:[
                {item: "ae2:quartz_glass", amount: 3},
                {item: "minecraft:glowstone_dust", amount: 3},
                {item: "modern_industrialization:tin_plate", amount: 3}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 100}
            ],
            item_outputs: {item: "ae2:monitor", amount: 3},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_monitor`
        },
        { // me interface
            item_inputs:[
                {item: "ae2:quartz_glass", amount: 6},
                {item: "modern_industrialization:analog_circuit", amount: 2},
                {item: "modern_industrialization:steel_barrel", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 100}
            ],
            item_outputs: {item: "ae2:interface", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_interface`
        },
        { // me storage bus
            item_inputs:[
                {item: "ae2:interface", amount: 1},
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:motor", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 20}
            ],
            item_outputs: {item: "ae2:storage_bus", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_storage_bus`
        },
        { // me export bus
            item_inputs:[
                {item: "ae2:monitor", amount: 1},
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:steel_plate", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 80}
            ],
            item_outputs: {item: "ae2:export_bus", amount: 2},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_export_bus`
        },
        { // me import bus
            item_inputs:[
                {item: "ae2:monitor", amount: 1},
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:bronze_plate", amount: 4}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 80}
            ],
            item_outputs: {item: "ae2:import_bus", amount: 2},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_import_bus`
        },
        { // me storage monitor
            item_inputs:[
                {item: "ae2:monitor", amount: 1},
                {item: "ae2:level_emitter", amount: 1}
            ],
            fluid_inputs: [
                {fluid: "modern_industrialization:soldering_alloy", amount: 50}
            ],
            item_outputs: {item: "ae2:storage_monitor", amount: 2},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_storage_monitor`
        },
        { // me p2p
            item_inputs:[
                {item: "ae2:monitor", amount: 1},
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:steel_plate", amount: 4}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:soldering_alloy", amount: 50}
            ],
            item_outputs: {item: "ae2:me_p2p_tunnel", amount: 2},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_p2p_tunnel`
        },
        { // me cell workbench
            item_inputs:[
                {item: "ae2:storage_bus", amount: 1},
                {item: "modern_industrialization:basic_machine_hull", amount: 1},
                {item: "ae2:drive", amount: 1}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:soldering_alloy", amount: 200}
            ],
            item_outputs: {item: "ae2:cell_workbench", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_cell_workbench`
        },
        { // me basic card
            item_inputs:[
                {item: "ae2:quartz_glass", amount: 3},
                {item: "modern_industrialization:analog_circuit", amount: 1},
                {item: "modern_industrialization:tin_cable", amount: 3}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:soldering_alloy", amount: 50}
            ],
            item_outputs: {item: "ae2:basic_card", amount: 6},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_basic_card`
        },
        { // me redstone card
            item_inputs:[
                {item: "ae2:basic_card", amount: 1},
                {item: "ae2:level_emitter", amount: 1}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:molten_redstone", amount: 90}
            ],
            item_outputs: {item: "ae2:redstone_card", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_redstone_card`
        },
        { // me capacity card
            item_inputs:[
                {item: "ae2:basic_card", amount: 1},
                {item: "modern_industrialization:steel_barrel", amount: 1}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:molten_redstone", amount: 90}
            ],
            item_outputs: {item: "ae2:capacity_card", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_capacity_card`
        },
        { // me void card
            item_inputs:[
                {item: "ae2:basic_card", amount: 1},
                {item: "modern_industrialization:trash_can", amount: 1}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:molten_redstone", amount: 90}
            ],
            item_outputs: {item: "ae2:void_card", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_void_card`
        },
        { // me advanced card
            item_inputs:[
                {item: "ae2:quartz_glass", amount: 3},
                {item: "modern_industrialization:electronic_circuit", amount: 1},
                {item: "modern_industrialization:electrum_cable", amount: 3}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:soldering_alloy", amount: 150}
            ],
            item_outputs: {item: "ae2:advanced_card", amount: 6},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_advanced_card`
        },
        { // me speed card
            item_inputs:[
                {item: "ae2:advanced_card", amount: 1},
                {item: "modern_industrialization:basic_upgrade", amount: 1}
            ],
            fluid_inputs:[
                {fluid: "modern_industrialization:molten_redstone", amount: 270}
            ],
            item_outputs: {item: "ae2:speed_card", amount: 1},
            eu: 2,
            duration: 100,
            id: `${id_prefix}/me_speed_card`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'modern_industrialization:assembler';
        event.custom(recipe).id(recipe.id);
    });
})
ServerEvents.recipes(event => {
    event.remove({output: "ironchest:iron_chest"})
    event.remove({output: "ironchest:gold_chest"})
    event.remove({output: "ironchest:diamond_chest"})
    event.remove({output: "ironchest:copper_chest"})
    event.remove({output: "ironchest:iron_to_gold_chest_upgrade"})
    event.remove({output: "ironchest:gold_to_diamond_chest_upgrade"})
    event.remove({output: "ironchest:wood_to_copper_chest_upgrade"})
    event.remove({output: "ironchest:wood_to_iron_chest_upgrade"})
    event.remove({output: "ironchest:copper_to_iron_chest_upgrade"})

    event.shaped("ironchest:copper_chest",
        [
            "CCC",
            "CDC",
            "CCC"
        ],
        {
            D: "minecraft:chest",
            C: "modern_industrialization:copper_plate"
        }
    )
    event.shaped("ironchest:iron_chest",
        [
            "ACA",
            "CDC",
            "ACA"
        ],
        {
            D: "ironchest:copper_chest",
            C: "modern_industrialization:iron_plate",
            A: "minecraft:glass"
        }
    )
    event.shaped("ironchest:gold_chest",
        [
            "ACA",
            "CDC",
            "ACA"
        ],
        {
            D: "ironchest:iron_chest",
            C: "modern_industrialization:gold_plate",
            A: "minecraft:glass"
        }
    )
    event.shaped("ironchest:diamond_chest",
        [
            "AAA",
            "CDC",
            "AAA"
        ],
        {
            D: "ironchest:gold_chest",
            C: "modern_industrialization:diamond_plate",
            A: "minecraft:glass"
        }
    )
})
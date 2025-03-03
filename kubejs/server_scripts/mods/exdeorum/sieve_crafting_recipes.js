ServerEvents.recipes(event => {
    event.remove({output: "exdeorum:string_mesh"})
    event.remove({output: "exdeorum:flint_mesh"})
    event.remove({output: "exdeorum:iron_mesh"})
    event.remove({output: "exdeorum:golden_mesh"})
    event.remove({output: "exdeorum:diamond_mesh"})
    event.remove({output: "exdeorum:netherite_mesh"})
    
    event.shaped("exdeorum:string_mesh",
        [
            "CCC",
            "CCC",
            "CCC"
        ],
        {
            C: "minecraft:string"
        }
    )
    event.shaped("exdeorum:flint_mesh",
        [
            "CSC",
            "SAS",
            "CSC"
        ],
        {
            C:"modern_industrialization:bronze_plate",
            S:"exdeorum:string_mesh",
            A:"modern_industrialization:bronze_machine_casing"
        }
    )
    event.shaped("exdeorum:iron_mesh",
        [
            "CSC",
            "DAD",
            "CSC"
        ],
        {
            C:"modern_industrialization:steel_plate",
            S:"exdeorum:flint_mesh",
            D:"modern_industrialization:steel_gear",
            A:"modern_industrialization:analog_circuit"
        }
    )
    event.shaped("exdeorum:golden_mesh",
        [
            "CSC",
            "DAD",
            "CSC"
        ],
        {
            C:"modern_industrialization:analog_circuit",
            S:"exdeorum:iron_mesh",
            D:"modern_industrialization:diamond_large_plate",
            A:"modern_industrialization:basic_machine_hull"
        }
    )
    event.shaped("exdeorum:diamond_mesh",
        [
            "CSC",
            "DAD",
            "CSC"
        ],
        {
            C:"modern_industrialization:aluminum_plate",
            S:"modern_industrialization:diamond_large_plate",
            D:"modern_industrialization:basic_machine_hull",
            A:"exdeorum:golden_mesh"
        }
    )
})
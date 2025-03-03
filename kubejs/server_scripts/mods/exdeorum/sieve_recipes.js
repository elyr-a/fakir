ServerEvents.recipes(event => {
  
  event.remove({type:'exdeorum:sieve'})
  event.remove({type:'exdeorum:compressed_sieve'})

  let sieve = (input, mesh, output, count, percent) => {
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: input, },
        mesh: { item: mesh, },
        result: { id: output },
        result_amount: {
            type: 'minecraft:binomial',
            n: count,
            p: percent,
        }
    })
  }
  // gravel string mesh (iron age)
  sieve("minecraft:gravel", "exdeorum:string_mesh", "modern_industrialization:iron_tiny_dust", 3.0, 0.2)
  sieve("minecraft:gravel", "exdeorum:string_mesh", "modern_industrialization:copper_tiny_dust", 3.0, 0.2)
  sieve("minecraft:gravel", "exdeorum:string_mesh", "modern_industrialization:tin_tiny_dust", 3.0, 0.2)
  // flint (bronze age)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:iron_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:gold_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:copper_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:tin_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:redstone_tiny_dust", 2.0, 0.2)
  sieve("minecraft:gravel", "exdeorum:flint_mesh", "modern_industrialization:coal_tiny_dust", 4.0, 0.4)
  // iron (lv start)
  sieve("minecraft:gravel", "exdeorum:iron_mesh", "modern_industrialization:lead_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:iron_mesh", "modern_industrialization:antimony_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:iron_mesh", "modern_industrialization:redstone_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:iron_mesh", "modern_industrialization:sulfur_tiny_dust", 4.0, 0.25)
  // gold (before alu)
  sieve("minecraft:gravel", "exdeorum:golden_mesh", "modern_industrialization:nickel_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:golden_mesh", "modern_industrialization:bauxite_tiny_dust", 4.0, 0.25)
  // diamond (after alu / mv start)
  sieve("minecraft:gravel", "exdeorum:diamond_mesh", "modern_industrialization:silver_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:diamond_mesh", "modern_industrialization:quartz_tiny_dust", 4.0, 0.25)
  sieve("minecraft:gravel", "exdeorum:diamond_mesh", "modern_industrialization:nickel_tiny_dust", 4.0, 0.35)
  sieve("minecraft:gravel", "exdeorum:diamond_mesh", "modern_industrialization:bauxite_tiny_dust", 4.0, 0.35)
})


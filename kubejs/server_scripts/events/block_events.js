BlockEvents.rightClicked("minecraft:grass_block", event => {
    if(event.player.crouching){
        event.player.give("exdeorum:stone_pebble")
    }
})
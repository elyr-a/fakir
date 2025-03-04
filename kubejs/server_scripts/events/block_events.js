BlockEvents.rightClicked("minecraft:dirt", event => {
    if(event.player.crouching){
        event.player.give("exdeorum:stone_pebble")
    }
})
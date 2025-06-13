player.onChat("Up", function (Lv) {
    builder.teleportTo(起點)
    blocks.place(SOUL_SAND, positions.add(
    起點,
    pos(0, -1, 0)
    ))
    for (let index = 0; index < Lv; index++) {
        blocks.place(PLANKS_SPRUCE, positions.add(
        起點,
        pos(1, 0, 0)
        ))
        blocks.place(PLANKS_SPRUCE, positions.add(
        起點,
        pos(-1, 0, 0)
        ))
        blocks.place(PLANKS_SPRUCE, positions.add(
        起點,
        pos(0, 0, 1)
        ))
        blocks.place(PLANKS_SPRUCE, positions.add(
        起點,
        pos(0, 0, -1)
        ))
    }
    builder.teleportTo(起點)
    for (let index = 0; index < Lv; index++) {
        builder.place(WATER)
        builder.shift(0, 1, 0)
    }
    for (let index = 0; index < Lv; index++) {
        builder.place(POWDER_SNOW)
        builder.shift(0, -1, 0)
    }
    for (let index = 0; index < Lv; index++) {
        blocks.place(AIR, positions.add(
        起點,
        pos(1, 0, 0)
        ))
        blocks.place(AIR, positions.add(
        起點,
        pos(-1, 0, 0)
        ))
        blocks.place(AIR, positions.add(
        起點,
        pos(0, 0, 1)
        ))
        blocks.place(AIR, positions.add(
        起點,
        pos(0, 0, -1)
        ))
    }
    player.say("快來看看我的水電梯")
})
let 起點: Position = null
起點 = world(2, 81, 7)

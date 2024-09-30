namespace SpriteKind {
    export const item = SpriteKind.create()
    export const bow = SpriteKind.create()
}
namespace StatusBarKind {
    export const playerhelth = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.playerhelth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 25, function (status) {
    statusbar.setColor(2, 15, 3)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("you left the dungeon", "bro")
    pause(1000)
    game.gameOver(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    info.changeScoreBy(1)
    down_levle += randint(0, 10)
    if (down_levle == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (down_levle == 2) {
        tiles.setCurrentTilemap(tilemap`level76`)
    } else if (down_levle == 3) {
        tiles.setCurrentTilemap(tilemap`level93`)
    } else if (down_levle == 4) {
        tiles.setCurrentTilemap(tilemap`level60`)
    } else if (down_levle == 5) {
        tiles.setCurrentTilemap(tilemap`level91`)
    } else if (down_levle == 6) {
        tiles.setCurrentTilemap(tilemap`level49`)
    } else if (down_levle == 7) {
        tiles.setCurrentTilemap(tilemap`level72`)
    } else if (down_levle == 8) {
    	
    } else if (down_levle == 9) {
    	
    } else if (down_levle == 10) {
    	
    }
})
statusbars.onStatusReached(StatusBarKind.playerhelth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 75, function (status) {
    statusbar.setColor(4, 15, 3)
})
controller.combos.attachCombo("au", function () {
    if (bow_equipment == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . b . . 
            . . b . . 
            . b b b . 
            . b b b . 
            . . e . . 
            . . e . . 
            . . e . . 
            . . e . . 
            `, mySprite, 0, -200)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    info.changeScoreBy(1)
    left_levle += randint(0, 10)
    if (left_levle == 1) {
        tiles.setCurrentTilemap(tilemap`level89`)
    } else if (left_levle == 2) {
        tiles.setCurrentTilemap(tilemap`level91`)
    } else if (left_levle == 3) {
        tiles.setCurrentTilemap(tilemap`level93`)
    } else if (left_levle == 4) {
        tiles.setCurrentTilemap(tilemap`level95`)
    } else if (left_levle == 5) {
        tiles.setCurrentTilemap(tilemap`level97`)
    } else if (left_levle == 6) {
        tiles.setCurrentTilemap(tilemap`level99`)
    } else if (left_levle == 7) {
        tiles.setCurrentTilemap(tilemap`level101`)
    } else if (left_levle == 8) {
        tiles.setCurrentTilemap(tilemap`level103`)
    } else if (left_levle == 9) {
        tiles.setCurrentTilemap(tilemap`level60`)
    } else if (left_levle == 10) {
        tiles.setCurrentTilemap(tilemap`level56`)
    }
})
controller.combos.attachCombo("ar", function () {
    if (bow_equipment == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . b b . . 
            e e e e b b b b 
            . . . . b b . . 
            . . . . . . . . 
            `, mySprite, 200, 0)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    false
    )
})
statusbars.onStatusReached(StatusBarKind.playerhelth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    statusbar.setColor(5, 15, 3)
})
controller.combos.attachCombo("ad", function () {
    if (bow_equipment == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . e . . 
            . . e . . 
            . . e . . 
            . . e . . 
            . b b b . 
            . b b b . 
            . . b . . 
            . . b . . 
            `, mySprite, 0, 200)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bow, function (sprite, otherSprite) {
    bow_equipment = true
    sprites.destroy(mySprite3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    false
    )
})
controller.combos.attachCombo("al", function () {
    if (bow_equipment == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . b b . . . . 
            b b b b e e e e 
            . . b b . . . . 
            . . . . . . . . 
            `, mySprite, -200, 0)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    info.changeScoreBy(1)
    right_levle += randint(0, 10)
    if (right_levle == 1) {
        tiles.setCurrentTilemap(tilemap`level66`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 7))
    } else if (right_levle == 2) {
        tiles.setCurrentTilemap(tilemap`level68`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 7))
    } else if (right_levle == 3) {
        tiles.setCurrentTilemap(tilemap`level70`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 9))
    } else if (right_levle == 4) {
        tiles.setCurrentTilemap(tilemap`level72`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
    } else if (right_levle == 5) {
        tiles.setCurrentTilemap(tilemap`level74`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 8))
    } else if (right_levle == 6) {
        tiles.setCurrentTilemap(tilemap`level76`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 9))
    } else if (right_levle == 7) {
        tiles.setCurrentTilemap(tilemap`level78`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 8))
    } else if (right_levle == 8) {
        tiles.setCurrentTilemap(tilemap`level80`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 12))
    } else if (right_levle == 9) {
        tiles.setCurrentTilemap(tilemap`level60`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 10))
    } else if (right_levle == 10) {
        tiles.setCurrentTilemap(tilemap`level84`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 6))
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    info.changeScoreBy(1)
    up_level += randint(0, 10)
    if (up_level == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 10))
    } else if (up_level == 2) {
        tiles.setCurrentTilemap(tilemap`level47`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 12))
    } else if (up_level == 3) {
        tiles.setCurrentTilemap(tilemap`level49`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 13))
    } else if (up_level == 4) {
        tiles.setCurrentTilemap(tilemap`level52`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 8))
    } else if (up_level == 5) {
        tiles.setCurrentTilemap(tilemap`level54`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 11))
    } else if (up_level == 6) {
        tiles.setCurrentTilemap(tilemap`level56`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 8))
    } else if (up_level == 7) {
        tiles.setCurrentTilemap(tilemap`level58`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 4))
    } else if (up_level == 8) {
        tiles.setCurrentTilemap(tilemap`level60`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 10))
    } else if (up_level == 9) {
        tiles.setCurrentTilemap(tilemap`level62`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 10))
    } else if (up_level == 10) {
        tiles.setCurrentTilemap(tilemap`level64`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 6))
    }
})
let up_level = 0
let right_levle = 0
let left_levle = 0
let projectile: Sprite = null
let bow_equipment = false
let down_levle = 0
let statusbar: StatusBarSprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 8))
scene.cameraFollowSprite(mySprite)
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . e e . . . . . 
    . . . . . . e . d . . . . . 
    . . . . . . e . d . . . . . 
    . . . . . e . . d . . . . . 
    . . . . . e . . d . . . . . 
    . d e e e e e e d . . . . . 
    . . . . . e . . d . . . . . 
    . . . . . e . . d . . . . . 
    . . . . . . e . d . . . . . 
    . . . . . . e . d . . . . . 
    . . . . . . . e e . . . . . 
    . . . . . . . . . . . . . . 
    `, SpriteKind.bow)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 7))
statusbar = statusbars.create(20, 4, StatusBarKind.playerhelth)
statusbar.attachToSprite(mySprite)
statusbar.setBarBorder(1, 15)
statusbar.setLabel("HP")
statusbar.setColor(7, 15, 3)

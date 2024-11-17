import kaplay from "https://unpkg.com/kaplay@3001.0.0/dist/kaplay.mjs";

kaplay({
    width: 360,
    height: 240,
    scale: 2,
    crisp: true,
    debug: false,
    canvas: document.getElementById("game"),
    background: [255, 255, 255],
    font: "BetterVCR"
});


const levelMap = [
    [
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  1,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [3,  3,  3,  3,  3,  3, 30, 30, 30,  3,  3,  3,  3,  3,  3,  3,  3,  3, 30,  3]
    ],
    [
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  5,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3,  3, 30, 30,  3]
    ],
    [
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3,  3, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  3, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  1,  0,  0,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  5,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  3,  3,  3,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  5,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3],
        [3,  3,  3,  3,  3, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,  3]
    ],
    [
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
        [0,  0,  0,  0,  0,  0,  0,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  3,  3,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  3,  3,  0,  0,  3, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  3, 30,  3,  0,  0,  0,  0,  0,  0,  0,  3, 30,  3]
    ],
    [
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3,  3,  3,  3,  3,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [0,  1,  0,  0,  0,  5,  5,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3],
        [3,  3,  3,  3,  3, 30, 30,  0,  0,  0,  0,  0,  3, 30, 30, 30, 30, 30, 30,  3]
    ],
    [
        [0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3,  3,  3],
        [0,  1,  0,  0,  0,  0,  0,  5,  5,  0,  0,  5,  5,  0,  0,  5,  5,  3,  30,  3],
        [3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, 30,  30,  3]
    ],
]

const dialogues = [
    [
        "Uh... hi.",
        "So, this is a bit awkward...",
        "There was supposed to be some epic story here.",
        "But, well...",
        "I didn’t come up with one.",
        "Sorry about that!",
        "But hey, feel free to imagine your own story!",
        "All you need to do is make it to the end of each level."
    ],
    [
        "Oh, I nearly forgot to mention...",
        "When you die,",
        "a part of you gets left behind.",
        "So be careful about where you end up...",
        "and what you do right before it happens."
    ]
];


const tileSize = 32;
let currentLevel = 0;


// assets
loadFont("BetterVCR", "./assets/fonts/BetterVCR.ttf")
loadSpriteAtlas("./assets/sprites/tileset.png", {
    "block": {
        x: 0,
        y: 48*0,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 3,
                loop: true
            }
        }
    },
    "platform": {
        x: 0,
        y: 48*1,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "spike": {
        x: 0,
        y: 48*2,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "box": {
        x: 0,
        y: 48*3,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "button": {
        x: 0,
        y: 48*4,
        width: 48*3, 
        height: 48*2,
        sliceX: 3,
        sliceY: 2,
        anims: {
            up: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            },
            down: {
                from: 3,
                to: 5,
                speed: 5,
                loop: true
            }
        }
    },
    "cloud": {
        x: 0,
        y: 48*6,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "door": {
        x: 0,
        y: 48*7,
        width: 48*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    }
});
loadSprite("title_screen", "./assets/sprites/title_screen.png", {
    sliceX: 3,
    anims: {
        idle: {
            from: 0,
            to: 2,
            speed: 5,
            loop: true
        }
    }
});
loadSpriteAtlas("./assets/sprites/buttons.png", {
    "resume_button": {
        x: 0,
        y: 48*0,
        width: 112*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "restart_button": {
        x: 0,
        y: 48*1,
        width: 112*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
    "quit_button": {
        x: 0,
        y: 48*2,
        width: 112*3, 
        height: 48,
        sliceX: 3,
        anims: {
            idle: {
                from: 0, 
                to: 2,
                speed: 5,
                loop: true
            }
        }
    },
});
loadSprite("pause_screen", "./assets/sprites/pause_screen.png", {
    sliceX: 3,
    anims: {
        idle: {
            from: 0,
            to: 2,
            speed: 5,
            loop: true
        }
    }
})
loadSprite("play_button", "./assets/sprites/play_button.png", {
    sliceX: 3,
    anims: {
        idle: {
            from: 0,
            to: 2,
            speed: 5,
            loop: true
        }
    }
});
loadSprite("player", "./assets/sprites/player.png", {
    sliceX: 8,
    sliceY: 3,
    anims: {
        idle: {
            from: 0,
            to:3,
            speed: 5,
            loop: true
        },
        run: {
            from: 8,
            to: 14,
            speed: 10,
            loop: true
        },
        air_up: 16,
        air_down: 17,
    }
});

loadSprite("ghost", "./assets/sprites/ghost.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        idle: {
            from: 0,
            to: 5,
            speed: 10,
            loop: true
        }
    }
})

// scenes
scene("game", () => {
    setGravity(1000);

    const game = add([]);

    let player;
    let doorColliding = false;
    let initialPos = vec2(0);
    let posRecord = [];
    let ghosts = [];
    let pauseMenu = addPauseMenu(game);

    for(let i = 0; i < 16; i++) {
        for (let j = 0; j < 20; j++) {
            switch (levelMap[currentLevel][i][j]%10) {
                case 0:
                    addDecoration(game, j*tileSize, i*tileSize, Math.floor(levelMap[currentLevel][i][j]/10));
                    break; 
                case 1:
                    player = addPlayer(game, j*tileSize, i*tileSize);
                    initialPos = vec2(j*tileSize, i*tileSize)
                    break;
                case 2:
                    addDoor(game, j*tileSize, i*tileSize);
                    break;
                case 3:
                    addBlock(game, j*tileSize, i*tileSize, "block");
                    break;
                case 4:
                    addBox(game, j*tileSize, i*tileSize);
                    break;
                case 5:
                    addSpike(game, j*tileSize, i*tileSize);
                    break;
                case 6:
                    //addButton(j*tileSize, i*tileSize);
                    break;
                case 7:
                    //addSpawner(j*tileSize, i*tileSize);
                    break;
                case 8:
                    //addPiston(j*tileSize, i*tileSize);
                    break;
                case 9:
                    //addEnemy(j*tileSize, i*tileSize);
                    break;
            }
        }
    }
    function die() {
        ghosts.push(addGhost(game, player.pos.x, player.pos.y, posRecord));
        if (ghosts.length > 3) {
            ghosts.shift().destroy();
        }
        posRecord = [];
        player.pos = initialPos;
        player.vel = vec2(0)
        camPos(player.pos);
    }
    player.onUpdate(() => {
        if (player.pos.y > 600) {
            die()
        }
        if (player.isGrounded()) {
            if (isKeyDown("a") || isKeyDown("d")) {
                if (player.getCurAnim().name != "run") {
                    player.play("run")
                }
            }
            else {
                if (player.getCurAnim().name != "idle") {
                    player.play("idle")
                }
            }
        }
        else if (player.vel.y < 0) {
            player.play("air_up");
        }
        else {
            player.play("air_down");
        }
        posRecord.push({x: player.pos.x, y: player.pos.y});
        if (posRecord.length > 120) {
            posRecord.shift();
        }
        camPos(player.pos);
    });

    player.onGround(() => {
        player.play("idle")
    });

    game.onKeyDown("a", () => {
        player.move(-200,  0);
        player.flipX = false;
    });

    game.onKeyDown("d", () => {
        player.move(200,  0);
        player.flipX = true;
    });

    game.onKeyPress("w", () => {
        if (doorColliding) {
            currentLevel += 1;
            go("game");
        }
        else if (player.isGrounded()) {
            player.jump(400);
        }
    });

    game.onKeyPress("r", () => {
        go("game");
    });

    onKeyPress("t", () => {
        pauseMenu.hidden = game.paused;
        game.paused = !game.paused;
        if (game.paused) {
            pauseMenu.scale = vec2(1)
            pauseMenu.pos = player.pos
        }
        else {
            pauseMenu.scale = vec2(0)
        }
    });

    player.onCollide("door", () => {
        doorColliding = true;
    });

    player.onCollideEnd("door", () => {
        doorColliding = false;
    })

    player.onCollide("spike", die)
})

scene("main", () => {
    let title = add([
        sprite("title_screen", {anim:"idle"}),
        pos(center()),
        anchor("center")
    ])
    let button = title.add ([
        sprite("play_button", {anim:"idle"}),
        pos(0, 48),
        rotate(),
        area(),
        outline(2),
        anchor("center", {radius:10})
    ])
    button.onHover(() => {
        setCursor("pointer");
    })
    button.onHoverUpdate(() => {
        const t = time()*5;
        button.angle = Math.sin(t)*4;
        button.scale = vec2(1.2);
    })
    button.onHoverEnd(() => {
        button.scale = vec2(1);
        setCursor("default");
    })
    button.onClick(() => {
        setCursor("default");
        currentLevel = 0;
        go("game");
    })
})


// objects
function addPauseMenu(g) {
    let pauseMenu = add([
        sprite("pause_screen", {anim:"idle"}),
        pos(0, 0),
        scale(1),
        area(),
        anchor("center"),
        color(255, 255, 255),
        outline(2)
    ]);
    let resumeButton = pauseMenu.add([
        sprite("resume_button", {anim:"idle"}),
        pos(0, -44),
        scale(1),
        area({shape: new Rect(vec2(0),16*6,16*3)}),
        anchor("center"),
        color(255, 255, 255),
        outline(2)
    ]);
    let restartButton = pauseMenu.add([
        sprite("restart_button", {anim:"idle"}),
        pos(0, 2),
        scale(1),
        area(),
        anchor("center"),
        color(255, 255, 255),
        outline(2)
    ]);
    let quitButton = pauseMenu.add([
        sprite("quit_button", {anim:"idle"}),
        pos(0, 44),
        scale(1),
        area({shape: new Rect(vec2(0),16*5,16*3)}),
        anchor("center"),
        color(255, 255, 255),
        outline(2)
    ]);
    pauseMenu.hidden = true;
    pauseMenu.scale = vec2(0);
    resumeButton.onHoverUpdate(() => {
        const t = time()*5;
        resumeButton.angle = Math.sin(t)*4;
        setCursor("pointer");
    });
    resumeButton.onHoverEnd(() => {
        resumeButton.angle = 0;
        setCursor("default");
    });
    resumeButton.onClick(() => {
        setCursor("default");
        g.paused = false;
        pauseMenu.hidden = true;
    });
    restartButton.onHoverUpdate(() => {
        const t = time()*5;
        restartButton.angle = Math.sin(t)*4;
        setCursor("pointer");
    });
    restartButton.onHoverEnd(() => {
        restartButton.angle = 0;
        setCursor("default");
    });
    restartButton.onClick(() => {
        setCursor("default");
        go("game");
    });
    quitButton.onHoverUpdate(() => {
        const t = time()*5;
        quitButton.angle = Math.sin(t)*4;
        setCursor("pointer");
    });
    quitButton.onHoverEnd(() => {
        quitButton.angle = 0;
        setCursor("default");
    });
    quitButton.onClick(() => {
        setCursor("default");
        go("main");
    });
    return pauseMenu;
}
function addPlayer(g, x, y) {
    return g.add([
        sprite("player"),
        pos(x, y),
        area({shape: new Rect(vec2(0),tileSize/2,tileSize)}),
        body(),
        anchor("center"),
        "player"
    ])
}
function addGhost(g, x, y, r) {
    let ghost = g.add([
        sprite("ghost", {anim:"idle"}),
        pos(x, y),
        area({
            shape: new Rect(vec2(0),tileSize/2,tileSize),
            collisionIgnore:["ghost"]
        }),
        body(),
        anchor("center"),
        "ghost"
    ])
    let i = 0
    ghost.onUpdate(() => {
        ghost.pos = vec2(r[i].x, r[i].y);
        i = i+1;
        if (i >= r.length) {
            i = 0;
            ghost.scale = vec2(0);
        }
        else if (i == 1) {
            ghost.scale = vec2(1)
        }
    })
    return ghost;
}
function addDoor(g, x, y) {
    return g.add([
        sprite("door", {anim:"idle"}),
        pos(x, y),
        area({shape: new Rect(vec2(0),tileSize,tileSize)}),
        anchor("center"),
        "door"
    ])
}
function addBlock(g, x, y, s) {
    if (s) {
        g.add([
            sprite(s, {anim:"idle"}),
            pos(x, y),
            area({shape: new Rect(vec2(0),tileSize,tileSize)}),
            body({isStatic: true}),
            anchor("center")
        ])
    }
    else {
        g.add([
            rect(tileSize, tileSize),
            pos(x, y),
            area(),
            body({isStatic: true})
        ])
    }
}
function addDecoration(g, x, y, s) {
    switch (s) {
        case 1:
            g.add([
                sprite("player", {anim:"idle"}),
                pos(x, y),
                anchor("center")
            ])
            break;
        case 3:
            g.add([
                sprite("block", {anim:"idle"}),
                pos(x, y),
                anchor("center")
            ])
            break;
    }
}
function addBox(g, x, y) {
    g.add([
        sprite("box", {anim:"idle"}),
        pos(x, y),
        area({shape: new Rect(vec2(0),tileSize,tileSize)}),
        body(),
        anchor("center")
    ])
}
function addSpike(g, x, y) {
    g.add([
        sprite("spike", {anim:"idle"}),
        pos(x, y),
        area({shape: new Rect(vec2(0, 12),tileSize,tileSize/4)}),
        anchor("center"),
        "spike"
    ])
}
go("main")


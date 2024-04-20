
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum CarType {
    //% block="　"
    Space = 0,
    //% block="スポーツカー"
    Sports = 1,
    //% block="ワゴン"
    Wagon = 2,
    //% block="トラック"
    Truck = 3,
    //% block="バイク"
    Bike = 4,
    //% block="セダン"
    Sedan = 5,
    //% block="コンパクトカー"
    Compact = 6
}

enum BodyColor {
    //% block="　"
    Space = 0,
    //% block="しろ"
    White = 1,
    //% block="あお"
    Blue = 2,
    //% block="あか"
    Red = 3,
    //% block="みどり"
    Green = 4,
    //% block="くろ"
    Black = 5,
    //% block="きいろ"
    Yellow = 6
}

enum TireType {
    //% block="　"
    Space = 0,
    //% block="シルバー"
    Silver = 1,
    //% block="きいろ"
    Yellow = 2,
    //% block="くろ"
    Black = 3
}

let carType: CarType | null = null
let bodyColor: BodyColor | null = null
let tireType: TireType | null = null

/**
 * Custom blocks
 */
//% weight=100 color=#58c000 icon="\uf1b9" block="カーディーラー"
namespace custom {

    let isIntracted: Boolean = false
    let isFinish: Boolean = false
    function enableIntract(handler: () => void) {
        player.onItemInteracted(WOODEN_PICKAXE, function () {
            if (isIntracted === false) {
                isIntracted = true;
                handler();
            }
        })
    }
    function animation(startX: number, startY: number, startZ: number, direction: CompassDirection) {
        player.execute("tag @a add making")
        loops.runInBackground(function () {
            loops.pause(2000)
            player.execute("scoreboard players set @a[tag=wait] progress 1")
            loops.pause(2000)
            player.execute("scoreboard players set @a[tag=wait] progress 2")
            loops.pause(2000)
            player.execute("scoreboard players set @a[tag=wait] progress 3")
            isFinish = true
        })
        agent.teleport(world(startX, startY, startZ), direction)
        while (isFinish === false) {
            if (isFinish === true) break;
            agent.move(RIGHT, 7)
            if (isFinish === true) break;
            agent.turn(LEFT_TURN)
            if (isFinish === true) break;
            agent.move(RIGHT, 5)
            if (isFinish === true) break;
            agent.turn(LEFT_TURN)
            if (isFinish === true) break;
            agent.move(RIGHT, 7)
            if (isFinish === true) break;
            agent.turn(LEFT_TURN)
            if (isFinish === true) break;
            agent.move(RIGHT, 5)
            if (isFinish === true) break;
            agent.turn(LEFT_TURN)
            if (isFinish === true) break;
        }
        agent.teleport(world(startX, startY, startZ), direction)
        player.execute("tag @a remove making")
    }
    
    //% blockId=whenStartZero
    //% block=クルマをつくる
    export function whenStartZero(handler: () => void): void {
        player.execute("scoreboard players add @s[tag=boot] robot 1")
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Sedan &&
                bodyColor == BodyColor.White &&
                tireType == TireType.Silver
            ) {
                animation(1218, 64, 1264, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            } else {
                player.execute("scoreboard players add @s[tag=wait] phase 2")
            }
        })
    }

    //% blockId=whenStartOne
    //% block=クルマをつくる
    export function whenStartOne(handler: () => void): void {
        player.execute("scoreboard players add @s[tag=boot] robot 1")
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Wagon &&
                bodyColor == BodyColor.Blue &&
                tireType == TireType.Yellow
            ) {
                animation(1218, 64, 1255, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            } else {
                player.execute("scoreboard players add @s[tag=wait] phase 2")
            }
        })
    }

    //% blockId=whenStartTwo
    //% block=クルマをつくる
    export function whenStartTwo(handler: () => void): void {
        player.execute("scoreboard players add @s[tag=boot] robot 1")
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Compact &&
                bodyColor == BodyColor.Yellow &&
                tireType == TireType.Yellow
            ) {
                animation(1218, 64, 1246, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            } else {
                player.execute("scoreboard players add @s[tag=wait] phase 2")
            }
        })
    }

    //% blockId=whenStartThree
    //% block=クルマをつくる
    export function whenStartThree(handler: () => void): void {
        player.execute("scoreboard players add @s[tag=boot] robot 1")
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Truck &&
                bodyColor == BodyColor.Green &&
                tireType == TireType.Silver
            ) {
                animation(1218, 64, 1237, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            } else {
                player.execute("scoreboard players add @s[tag=wait] phase 2")
            }
        })
    }

    //% blockId=whenStartFour
    //% block=クルマをつくる
    export function whenStartFour(handler: () => void): void {
        player.execute("scoreboard players add @s[tag=boot] robot 1")
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Sports &&
                bodyColor == BodyColor.Black &&
                tireType == TireType.Black
            ) {
                animation(1218, 64, 1228, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            } else {
                player.execute("scoreboard players add @s[tag=wait] phase 2")
            }
        })
    }

    //% blockId=whenStartFree
    //% block=クルマをつくる
    export function whenStartFree(handler: () => void): void {
        enableIntract(function () {
            player.execute("tag @s add carReset")
            handler();
            if (
                carType == CarType.Space ||
                bodyColor == BodyColor.Space ||
                tireType == TireType.Space
            ) {
                
            } else {
                player.execute("scoreboard players set @s carType " + (carType == null ? 0 : carType))
                player.execute("scoreboard players set @s bodyColor " + (bodyColor == null ? 0 : bodyColor))
                player.execute("scoreboard players set @s tireType " + (tireType == null ? 0 : tireType))
                animation(1218, 64, 1215, NORTH);
                player.execute("scoreboard players add @s[tag=wait] phase 1")
            }
        })
    }

    //% blockId=whenStartDummy
    //% block=クルマをつくる
    export function whenStartDummy(handler: () => void): void {
    }
}


/**
 * Custom blocks
 */
//% weight=100 color=#f8a030 icon="\uf0ad" block="クルマづくり"
namespace custom2 {
    //% blockId=selectCarType
    //% block="車のタイプを$newCarTypeにする"
    export function selectCarType(newCarType: CarType): void {
        carType = newCarType
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#00b0d0 icon="\uf0ad" block="クルマづくり"
namespace custom3 {
    //% blockId=selectBodyColor
    //% block="ボディの色を$newBodyColorにする"
    export function selectBodyColor(newBodyColor: BodyColor): void {
        bodyColor = newBodyColor
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#081048 icon="\uf0ad" block="クルマづくり"
namespace custom4 {
    //% blockId=selectTireType
    //% block="タイヤを$newTireTypeにする"
    export function selectTireType(newTireType: TireType): void {
        tireType = newTireType
    }
}


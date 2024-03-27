
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum CarType {
    //% block="スポーツカー"
    Sports = 1,
    //% block="ワゴン"
    Wagon = 2,
    //% block="トラック"
    Truck = 3,
    //% block="バイク"
    Bike,
    //% block="セダン"
    Sedan,
    //% block="コンパクトカー"
    Compact
}

enum BodyColor {
    //% block="しろ"
    White,
    //% block="あお"
    Blue,
    //% block="あか"
    Red,
    //% block="みどり"
    Green,
    //% block="くろ"
    Black,
    //% block="きいろ"
    Yellow
}

enum TireType {
    //% block="シルバー"
    Silver,
    //% block="きいろ"
    Yellow,
    //% block="くろ"
    Black
}

let carType: CarType | null = null
let bodyColor: BodyColor | null = null
let tireType: TireType | null = null

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf1b9" block="カーディーラー"
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
    function animation(startX: number, startY: number, startZ: number) {
        player.execute("tag @a add making")
        loops.runInBackground(function () {
            loops.pause(3000)
            player.execute("scoreboard players set @a progress 1")
            loops.pause(3000)
            player.execute("scoreboard players set @a progress 2")
            loops.pause(3000)
            player.execute("scoreboard players set @a progress 3")
            isFinish = true
        })
        agent.teleport(world(startX, startY, startZ), NORTH)
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
        player.execute("tag @a remove making")
    }
    //% blockId=whenStartZero
    //% block=くるまをつくるとき
    export function whenStartZero(handler: () => void): void {
        enableIntract(function(){
            animation(1216, 64, 1263);
            player.execute("scoreboard players add @s phase 1")
        })
    }

    //% blockId=whenStartOne
    //% block=くるまをつくるとき
    export function whenStartOne(handler: () => void): void {
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Sedan,
                bodyColor == BodyColor.White,
                tireType == TireType.Silver
            ) {
                animation(1218, 64, 1255);
                player.execute("scoreboard players add @s phase 1")
            } else {
                player.execute("scoreboard players add @s phase 2")
            }
        })
    }

    //% blockId=whenStartTwo
    //% block=くるまをつくるとき
    export function whenStartTwo(handler: () => void): void {
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Wagon,
                bodyColor == BodyColor.Blue,
                tireType == TireType.Yellow
            ) {
                animation(1218, 64, 1246);
                player.execute("scoreboard players add @s phase 1")
            } else {
                player.execute("scoreboard players add @s phase 2")
            }
        })
    }

    //% blockId=whenStartThree
    //% block=くるまをつくるとき
    export function whenStartThree(handler: () => void): void {
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Compact,
                bodyColor == BodyColor.Yellow,
                tireType == TireType.Yellow
            ) {
                animation(1218, 64, 1237);
                player.execute("scoreboard players add @s phase 1")
            } else {
                player.execute("scoreboard players add @s phase 2")
            }
        })
    }

    //% blockId=whenStartFour
    //% block=くるまをつくるとき
    export function whenStartFour(handler: () => void): void {
        enableIntract(function () {
            handler();
            if (
                carType == CarType.Sports,
                bodyColor == BodyColor.Black,
                tireType == TireType.Black
            ) {
                animation(1218, 64, 1228);
                player.execute("scoreboard players add @s phase 1")
            } else {
                player.execute("scoreboard players add @s phase 2")
            }
        })
    }

    //% blockId=whenStartFree
    //% block=くるまをつくるとき
    export function whenStartFree(handler: () => void): void {
        enableIntract(function () {
            handler();
            animation(1218, 64, 1215);
            player.execute("scoreboard players add @s phase 1")
        })
    }

    //% blockId=whenStartDummy
    //% block=くるまをつくるとき
    export function whenStartDummy(handler: () => void): void {
    }
}


/**
 * Custom blocks
 */
//% weight=100 color=#f4a460 icon="\uf0ad" block="くるまづくり"
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
//% weight=100 color=#2f4f4f icon="\uf0ad" block="くるまづくり"
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
//% weight=100 color=#0d0015 icon="\uf0ad" block="くるまづくり"
namespace custom4 {
    //% blockId=selectTireType
    //% block="タイヤを$newTireTypeにする"
    export function selectTireType(newTireType: TireType): void {
        tireType = newTireType
    }
}


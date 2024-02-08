
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
    Sedan,
    Compact
}

enum BodyColor {
    White,
    Blue,
    Red,
    Green,
    Black,
    Yellow
}

enum TireType {
    Silver,
    Yellow,
    Black
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""

namespace custom {
    let carType: CarType | null = null
    let bodyColor: BodyColor | null = null
    let tireType: TireType | null = null

    //% blockId=selectCarType
    //% block="車のタイプを$newCarTypeにする"
    export function selectCarType(newCarType: CarType): void {
        carType = newCarType
    }

    //% blockId=selectBodyColor
    //% block="ボディの色を$newBodyColorにする"
    export function selectBodyColor(newBodyColor: BodyColor): void {
        bodyColor = newBodyColor
    } 

    //% blockId=selectTireType
    //% block="タイヤを$newTireTypeにする"
    export function selectTireType(newTireType: TireType): void {
        tireType = newTireType
    }

    //% blockId=whenStartZero
    //% block=くるまをつくる0
    export function whenStartZero(handler: () => void): void {
        player.execute("scoreboard players add @s phase 1")
    }

    //% blockId=whenStartOne
    //% block=くるまをつくるとき1
    export function whenStartOne(handler: () => void): void {
        handler();
        if(
            carType == CarType.Sedan,
            bodyColor == BodyColor.White,
            tireType == TireType.Silver
        ){
            player.execute("scoreboard players add @s phase 1")
        } else {
            player.execute("scoreboard players add @s phase 2")
        }
    }

    //% blockId=whenStartTwo
    //% block=くるまをつくるとき2
    export function whenStartTwo(handler: () => void): void {
        handler();
        if (
            carType == CarType.Wagon,
            bodyColor == BodyColor.Blue,
            tireType == TireType.Yellow
        ) {
            player.execute("scoreboard players add @s phase 1")
        } else {
            player.execute("scoreboard players add @s phase 2")
        }
    }

    //% blockId=whenStartThree
    //% block=くるまをつくるとき3
    export function whenStartThree(handler: () => void): void {
        handler();
        if (
            carType == CarType.Compact,
            bodyColor == BodyColor.Yellow,
            tireType == TireType.Yellow
        ) {
            player.execute("scoreboard players add @s phase 1")
        } else {
            player.execute("scoreboard players add @s phase 2")
        }
    }

    //% blockId=whenStartFour
    //% block=くるまをつくるとき4
    export function whenStartFour(handler: () => void): void {
        handler();
        if (
            carType == CarType.Sports,
            bodyColor == BodyColor.Black,
            tireType == TireType.Black
        ) {
            player.execute("scoreboard players add @s phase 1")
        } else {
            player.execute("scoreboard players add @s phase 2")
        }
    }

    //% blockId=whenStartFree
    //% block=くるまをつくるときフリー
    export function whenStartFree(handler: () => void): void {
        handler();
    }

    //% blockId=whenStartDummy
    //% block=くるまをつくるときダミー
    export function whenStartDummy(handler: () => void): void {
    }
}

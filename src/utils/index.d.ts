// Type Declaration File
// 2. 为已有js文件提供类型声明 (两种方法)
// -将js项目迁移到ts项目时，为了让已有的.js文件有类型声明。
// -称为库作者，创建库给其他人使用。

// 第一种方法：直接更改js文件，添加类型，比较容易。
// 第二种方法：创建d.ts 类型声明文件。
//      好处：不用更改原文件，所有引入的类型声明文件都会有提示。
// d.ts文件中只能出现类型声明，不能出现可执行语法。

// - 1. 对于 type、interface 等这些明确就是 TS 类型的(只能在 TS 中使用的)，可以省略 declare 关键字。
// - 2. 对于 let、function 等具有双重含义(在 JS、TS 中都能用)，应该使用 declare 关键字，明确指定此处用于类型声明。
declare let count: number
declare let songName: string

type Position = {
  x: number
  y: number
}
declare let position: Position

declare function add(x: number, y: number): number

type Direction = 'left' | 'right' | 'up' | 'down'
declare function changeDirection(direction: Direction): void

type FormatPoint = (point: Position) => void
declare const formatPoint: FormatPoint

export { count, songName, position, add, changeDirection, formatPoint }

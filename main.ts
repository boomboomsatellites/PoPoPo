input.onButtonPressed(Button.A, function () {
    // 1-2小節
    phraseA()
    phraseA()
    // 3小節: レ レ レ ミ ファ#(付点4分) レ
    play(D, 1)
    play(D, 1)
    play(D, 1)
    play(E, 1)
    play(Fs, 3)
    play(D, 1)
    // 4小節: ファ#(付点4分) ラ ラ(2分)
    play(Fs, 3)
    play(A, 1)
    play(A, 4)
    // 5-6小節: レ レ レ ミ ファ#(2分) ×2
    for (let index = 0; index < 2; index++) {
        play(D, 1)
        play(D, 1)
        play(D, 1)
        play(E, 1)
        play(Fs, 4)
    }
    // 7小節: ミ ミ ミ レ ミ ファ#
    play(E, 1)
    play(E, 1)
    play(E, 1)
    play(D, 1)
    play(E, 2)
    play(Fs, 2)
    // 8小節: ラ ソ ファ# ミ
    play(A, 2)
    play(G, 2)
    play(Fs, 2)
    play(E, 2)
    // 9小節
    phraseA()
    // 10小節: ラ ラ シ ラ ファ# ミ
    play(A, 1)
    play(A, 2)
    play(B, 1)
    play(A, 1)
    play(Fs, 1)
    play(E, 2)
    // 11小節: レ(全音符)
    play(D, 8)
})
// 1拍(4分)=500ms → テンポ120。速さはここで調整
function play (note: number, units: number) {
    // 音の切れ目を少し作る
    music.playTone(note, eighth * units - 30)
    basic.pause(30)
}
function phraseA () {
    // ラ ラ シ ラ ファ# ラ
    play(A, 1)
    play(A, 2)
    play(B, 1)
    play(A, 1)
    play(Fs, 1)
    play(A, 2)
}
let B = 0
let A = 0
let G = 0
let Fs = 0
let E = 0
let D = 0
let eighth = 0
// 呼び込み君（8分音符 = 1単位）
// 1拍(4分)=500ms → テンポ120。速さはここで調整
eighth = 250
D = 294
E = 330
Fs = 370
G = 392
A = 440
B = 494

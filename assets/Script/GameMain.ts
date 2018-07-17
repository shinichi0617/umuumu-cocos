
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    pauseBtn: cc.Button = null;

    @property(cc.Button)
    windowBtn: cc.Button = null;

    private isPaused: boolean = false;
    private remainingTime: number = 60;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 一時停止ボタンにイベント設定
        this.pauseBtn.node.on('click', (event) => {
            this.pause();
        });
        // 風ボタンにイベント設定
        this.windowBtn.node.on('click', (event) => {
            this.window();
        });

        // 初期値代入
        this.label.string = this.remainingTime.toString();
        // タイマー設定
        this.schedule(this.countTimer, 1);
        // this.isPaused = false;
    }

    // update (dt) {
    // }

    // 1秒毎にカウントダウンさせる
    private countTimer() {
        if (!this.isPaused) {
            this.remainingTime--;
            this.label.string = (this.remainingTime).toString();
        }
    }

    private pause() {
        this.isPaused = !this.isPaused;
    }

    private window() {

    }
}

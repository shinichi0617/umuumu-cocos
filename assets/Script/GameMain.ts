const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    pauseBtn: cc.Button = null;

    @property(cc.Button)
    windowBtn: cc.Button = null;

    @property(cc.Node)
    pauseBG: cc.Node = null;

    private isPaused: boolean = false;
    private remainingTime: number = 60;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // 一時停止用のオブジェクトを非アクティブに
        this.pauseBG.active = false;

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
        // 一時停止用のオブジェクトを切り替え
        this.pauseBG.active = this.isPaused;
    }

    private window() {

    }
}

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

    @property(cc.Node)
    balls: cc.Node = null;

    @property(cc.Prefab)
    ball: cc.Prefab = null

    private isPaused: boolean = false;
    private remainingTime: number = 60;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 1;
        cc.director.getCollisionManager().enabled = true;

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

        this.createBalls(50);
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

    private createBalls(num: number) {
        for (var i = 0; i < num; i++) {
            const ball = cc.instantiate(this.ball);
            const randX: number = cc.randomMinus1To1() * 300;
            const randY: number = cc.randomMinus1To1() * 50;
            ball.setPosition(randX, randY);
            this.balls.addChild(ball);
        }
    }
}

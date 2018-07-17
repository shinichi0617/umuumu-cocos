const {ccclass, property} = cc._decorator;

@ccclass
export default class Title extends cc.Component {

    @property(cc.Button) 
    button: cc.Button = null;


    start () {
        // init logic
        this.button.node.on('click', (event) => {
            console.log('CLICK');
        });
    }
}

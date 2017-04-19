import React from 'react';
import ReactDOM from 'react-dom';

class ExpComponent1 extends React.Component {
    render() {
        const {isBirthday} = this.props;

        return (
            <div>
                { (isBirthday) ? 'Happy birthday!!' : 'Hello, how ar you?' }
            </div>
        );
    }
}

ExpComponent1.propTypes = {
    isBirthday: React.PropTypes.bool
};

class ExpComponent2 extends React.Component {
    constructor() {
        super();
        this.state = {
            val: 0
        };
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
        this.handleClearButtonClick = this.handleClearButtonClick.bind(this)
    }

    // DOMが描画される前に実行
    componentWillMount() {
        this.setState({val: 0});
        console.log("component will mount");
    }

    // DOMが描画された後に実行
    componentDidMount() {
        console.log("component did mount");
    }

    // コンポーネントが更新される直前に実行
    componentWillUpdate() {
        console.log("component will mount");
    }

    // コンポーネントが更新された直後に実行
    componentDidUpdate() {
        console.log("component did mount");
    }

    // ボタンが押された時の処理
    handleAddButtonClick() {
        this.setState({val: this.state.val + 1});
    }

    // ボタンが押された時の処理
    handleClearButtonClick() {
        this.setState({val: 0});
    }

    render() {
        let { val } = this.state;
        return (
            <div>
              <p>{this.state.val}</p>
              <button onClick={this.handleAddButtonClick}>add</button>
              <button onClick={this.handleClearButtonClick}>clear</button>
            </div>
        );
    }
}

// statelessコンポーネント
const Exp3 = ({ isBool }) => {
    return (
            <div>
                { (isBool) ? 'OK' : 'NG' }
            </div>
    );
};

Exp3.propTypes = {
    isBool: React.PropTypes.bool
};

Exp3.defaultProps = {
    isBool: false
}


class AppComponent extends React.Component {
    render() {
        return (
            <section>
                <div>Example1</div>
                <ExpComponent1 isBirthday={true}/>
                <hr/>
                <div>Example2</div>
                <ExpComponent2/>
                <hr/>
                <div>Example3</div>
                <Exp3/>
                <hr/>
            </section>
        );
    }
}

const $app = document.getElementById('app');
ReactDOM.render(<AppComponent/>, $app);


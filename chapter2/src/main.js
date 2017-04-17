import React from 'react';
import ReactDOM from 'react-dom';

class SampleComponent extends React.Component {
    render() {
        return (
            <div>
                This article is written by leader22
            </div>
        );
    }
}

class HelloComponent extends React.Component {
    render() {
        return <div>Hello React.js!</div>;
    }
}

class PropsComponent extends React.Component {
    render() {
        const { target } = this.props;

        return (
            <div>Hello {target}!</div>
        );
    }
}

class StateComponent extends React.Component {
    constructor() {
        super();

        // 初期状態
        this.state = {
            target: 'state example'
        };
    }

    render() {
        let { target } = this.state;

        return (
           <div>Hello {target}!</div>
        );
    }
}

class TextInputComponent extends React.Component {
    constructor() {
        super();
        // 入力された内容を保持しておくstate
        this.state = {
            val: 'CodeGrid'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // input要素のchangeイベントの度に呼ばれるハンドラ
    handleInputChange(ev) {
        this.setState({ val: ev.target.value });
    }

    // button要素のclickイベント
    handleButtonClick() {
        this.setState({ val: '' });
    }

    render() {
        let { val } = this.state;

        return (
            <div>
                <input type="text" onChange={this.handleInputChange} value={val}/>
                <button type="button" onClick={this.handleButtonClick}>Clear</button>
                <hr/>
                {val}
            </div>
        );
    }
}

class AppComponent extends React.Component {
    render() {
        return (
            <section>
                <h1>My Hello App!</h1>
                <HelloComponent/>
                <PropsComponent target="props example"/>
                <StateComponent/>
                <TextInputComponent/>
            </section>
        );
    }
}

const $app = document.getElementById('app');
ReactDOM.render(<AppComponent/>, $app);

ReactDOM.render(<SampleComponent/>, document.getElementById('jsApp'));


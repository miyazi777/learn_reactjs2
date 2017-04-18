import React from 'react';
import ReactDOM from 'react-dom';

class ExpComponent1 extends React.Component {
    render() {
        const { target } = this.props;

        let el;
        if (target) {
            el = <div>Yes</div>
        } else {
            el = <div>No</div>
        }

        return <div>{el}</div>;
    }
}

// 三項演算子を使ったテキストの出し分け
class ExpComponent2 extends React.Component {
    render() {
        const {bool} = this.props;

        // テキストの出し分け
        return (
            <div>
              {(bool) ? 'Yes' : 'No'}
            </div>
        );
    }
}

// 要素の出し分け
class ExpComponent3 extends React.Component {
    render() {
        const {bool} = this.props;

        // 要素の出し分け
        return (
            <div>
                {(bool) ? <strong>Yes</strong> : <span>No</span>}
            </div>
               );
    }
}

// nullを返すと何も表示されない
class ExpComponent4 extends React.Component {
    render() {
        const {bool} = this.props;

        return (
            <div>
                { (bool) ? <div>Yes</div> : null }
                { !(bool) ? <div>No</div> : null }
            </div>
            );
    }
}

// loopのサンプル
class ExpComponent5 extends React.Component {
    render() {
        const items = ['item1', 'item2', 'item3'];

        return (
            <ul>
                { items.map((v, idx) => {
                    return <li key={idx}>{v}</li>
                    })
                }
            </ul>
        );
    }
}

// cssのクラス名を付けるサンプル
class ExpComponent6 extends React.Component {
    render() {
        return (
        <div className="red">
            class name example
        </div>
        );
    }
}

// cssのクラス名を付けるサンプル(boolの値によってクラス名が変化)
class ExpComponent7 extends React.Component {
    render() {
        const {bool} = this.props;

        let divClassName = "red";
        if (bool) {
            divClassName = "blue";
        }

        return (
            <div className={divClassName}>
              class name example2
            </div>
        );
    }
}

// ES2015のTemplate stringsを使ってCSSを動的に
class ExpComponent8 extends React.Component {
    render() {
        const {bool} = this.props;

        return (
          <div className={`${(bool) ? 'red' : 'blue' }`}>
            dynamic css
          </div>
        );
    }
}


class AppComponent extends React.Component {
    render() {
        return (
            <section>
                <div>Example1 (if1)</div>
                <ExpComponent1 target={true}/>
                <hr/>
                <div>Example2 (if2)</div>
                <ExpComponent2 bool={true}/>
                <hr/>
                <div>Example3 (if3)</div>
                <ExpComponent3 bool={false}/>
                <hr/>
                <div>Example4 (if4)</div>
                <ExpComponent4 bool={false}/>
                <hr/>
                <div>Example5 (loop)</div>
                <ExpComponent5/>
                <hr/>
                <div>Example6</div>
                <ExpComponent6/>
                <hr/>
                <div>Example7</div>
                <ExpComponent7 bool={true}/>
                <hr/>
                <div>Example8</div>
                <ExpComponent8 bool={false}/>
                <hr/>
            </section>
        );
    }
}

const $app = document.getElementById('app');
ReactDOM.render(<AppComponent/>, $app);


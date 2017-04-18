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

class AppComponent extends React.Component {
    render() {
        return (
            <section>
                <div>Example1</div>
                <ExpComponent1 isBirthday={true}/>
                <hr/>
            </section>
        );
    }
}

const $app = document.getElementById('app');
ReactDOM.render(<AppComponent/>, $app);


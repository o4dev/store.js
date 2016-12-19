import React, {Component} from 'react';
import ReactCSSTransitionGroup from
    'react/lib/ReactCSSTransitionGroup';
import classNames from 'classnames';
import {connect} from 'react-redux';
import './messages.scss';


import Expire from './expire';
import Icon from '../app/icon';

const MESSAGE_TIMEOUT = 3000;

class Message extends Component {
    static defaultProps = {
        delayCount: 1
    };
    render() {
        var classes = classNames({
            'notification': true,
            'is-success': this.props.category === 'success',
            'is-info': this.props.category === 'info',
            'is-warning': this.props.category === 'warning',
            'is-danger': this.props.category === 'danger'
        });
        return (
            <Expire delay={MESSAGE_TIMEOUT * this.props.delayCount}>
                <ReactCSSTransitionGroup
                    transitionName="message"
                    transitionEnter={false}
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionLeaveTimeout={1000}
                >
                    <div className={classes}>
                        <Icon type="exclamation-circle" size="large" />
                        {" "}{this.props.content}
                    </div>
                </ReactCSSTransitionGroup>
            </Expire>
        );
    }
}

@connect((store) => {
    return {
        messages: store.messages
    };
})
class Messages extends Component {
    constructor(props) {
        super(props);
        this.shown = [];
    }

    render() {
        for (var i = 0; i < this.props.messages.length; i++) {
            if (i >= this.shown.length) {
                var msg = this.props.messages[i];
                this.shown.push((
                    <Message content={msg.content}
                             category={msg.category}
                             key={i}
                             delayCount={i + 1} />
                ));
            }
        }
        return (
            <div className="messages" role="alert">
                {this.shown}
            </div>
        );
    }
}

export default Messages;


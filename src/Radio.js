import classNames from 'classnames';
import React from 'react';

import createChainedFunction from './utils/createChainedFunction';

const Radio = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string,
        inline: React.PropTypes.bool,
        title: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        checked: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        onChange: React.PropTypes.func
    },
    contextTypes: {
        formGroup: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            inline: false,
            disabled: false
        };
    },
    getInitialState() {
        return {
            checked: this.props.checked
        };
    },
    handleChange(event){

        this.setState({
            checked: event.target.checked
        });
    },
    render() {

        const {
            type,
            inline,
            title,
            name,
            className,
            children ,
            onClick,
            onChange,
            disabled,
            ...props,
        } = this.props;

        const labelClasses = classNames({
            'radio-inline': inline
        }, className);

        const radioClasses = classNames({
            'radio' : true,
            'disabled' : disabled
        });

        const input = (
            <span className = {classNames({
                    checked: this.state.checked
                })}>
                <input
                    {...props}
                    type = 'radio'
                    name = {name}
                    disabled = {disabled}
                    onChange =  {createChainedFunction(this.handleChange, onChange)}
                    />
            </span>
        );


        return (
            <label className={labelClasses} >
                <div
                    className={radioClasses}
                    role = 'radio'
                    >
                    {input}
                </div>
                { title || children }
            </label>
        );
    }
});

export default Radio;

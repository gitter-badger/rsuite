import classNames from 'classnames';
import React from 'react';
import elementType from './prop-types/elementType';
import ClassNameMixin from './mixins/ClassNameMixin';

const FormControl = React.createClass({
    mixins: [ClassNameMixin],
    propTypes: {
        componentClass: elementType,
        type: React.PropTypes.string,
        id: React.PropTypes.string
    },
    contextTypes: {
        formGroup: React.PropTypes.object
    },
    getDefaultProps() {
        return {
            componentClass: 'input'
        };
    },
    render() {

        const formGroup = this.context.formGroup;
        const controlId = formGroup && formGroup.controlId;

        const {
            componentClass: Component,
            type,
            id = controlId,
            className,
            ...props,
        } = this.props;

        if(id === null ){
             throw new Error('`controlId` is ignored on `<FormControl>` when `id` is specified.');
        }

        let classes = classNames({
            // input[type="file"] should not have .form-control.
            'form-control': type !== 'file'
        }, className);


        return (
            <Component
                {...props}
                type={type}
                id={id}
                className={classes}
            />
        );
    }
});

export default FormControl;

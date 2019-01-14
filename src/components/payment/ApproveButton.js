import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

import {
    paymentApprove as paymentApproveAction,
    paymentReject as paymentRejectAction,
} from '../../actions/payment';
import { Tooltip } from '@material-ui/core';

class ApproveButton extends Component {
    handleApprove = () => {
        const { paymentApprove, record } = this.props;
        paymentApprove(record.id, record);
    };

    handleReject = () => {
        const { paymentReject, record } = this.props;
        paymentReject(record.id, record);
    };

    render() {
        const { record } = this.props;
        return (
            <span>
                <Tooltip title="تایید">
                    <IconButton onClick={this.handleApprove}>
                        <ThumbUp />
                    </IconButton>
                </Tooltip>
                <Tooltip title="رد">
                    <IconButton onClick={this.handleReject}>
                        <ThumbDown />
                    </IconButton>
                </Tooltip>
            </span>
        );
    }
}

ApproveButton.propTypes = {
    classes: PropTypes.object,
    record: PropTypes.object,
    paymentApprove: PropTypes.func,
    paymentReject: PropTypes.func,
};

export default connect(
    null,
    {
        paymentApprove: paymentApproveAction,
        paymentReject: paymentRejectAction,
    }
)(ApproveButton);

import React, {Component}  from 'react';
import { withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import dataProvider from '../dataProvider/dataProvider';
import { FileInput, FileField, Create, SimpleForm, TextInput,
    ArrayInput, SimpleFormIterator, CheckboxGroupInput, NumberInput,
    CREATE, showNotification } from 'react-admin';
import {TextField as RATextField} from 'react-admin';
import { Table, TableHead, TableRow, TableCell, TableBody, FormControlLabel, CardActions, Button, LinearProgress, FormControl, InputLabel, Input, Typography } from '@material-ui/core';
import SaveRounded from '@material-ui/icons/SaveRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import ReactDropzone from 'react-dropzone';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    successText: {
        color: 'green'
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px"
    },
    cardBox: {
        background: 'rgb(227, 227, 227) none repeat scroll 0% 0%',
    },
    stats: {
        color: "#000000",
        display: "inline-flex",
        fontSize: "16px",
        lineHeight: "22px",
        marginBottom: "10px",
        height: "10px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px"
        }
    },
    cardCategory: {
        color: "#999999",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        paddingTop: "10px",
        marginBottom: "0"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitle: {
        color: "#3C4858",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});

class CustomerImport extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        file: [],
        uploading: false
    };

    componentDidMount() {
        
    }

    onImageDrop = (file) => {
        this.setState({
            file: file
        })

    };

    onSubmit = () => {

        let data = this.state;
        this.setState({
            ...this.state,
            uploading: true
        });

        dataProvider(CREATE, 'importCustomers', {data})
            .then(result => {
                
                this.setState({
                    ...this.state,
                    uploading: false
                });
                this.props.showNotification('عملیات با موفقیت انجام شد', 'info');
                
            }
        ).catch(err => {
            this.setState({
                ...this.state,
                uploading: false
            });

            this.props.showNotification('خطایی رخ داد', 'error');
        });
    }

    render() {
        
        const { classes } = this.props;
        const { file } = this.state;        

        return (

            <Card>
                <Title title="آپلود لیست مشتریان" />
                <CardContent>
                    <ReactDropzone
                        className={classes.drop_files}
                        // accept="image/*"
                        multiple={false}
                        onDrop={this.onImageDrop}
                        fullWidth
                        >
                        <Typography style={{textAlign: 'center'}} color="inherit"
                                    className={classes.flex}>
                            فایل مورد نظر را انتخاب یا به اینجا بکشید.
                        </Typography>
                    </ReactDropzone>
                </CardContent>
                <CardActions>
                    <Button onClick={this.onSubmit}
                            color="primary" size="medium"
                            aria-label="ارسال"
                            disabled={this.state.uploading}>
                        <SaveRounded />
                        {
                            this.state.uploading ?
                            <LinearProgress />
                            : ''
                        }
                        ارسال
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

CustomerImport.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(
    null, {
        showNotification
})(withStyles(styles)(CustomerImport)));
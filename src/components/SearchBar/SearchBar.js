import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { fetchListings } from '../../actions/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { TextField } from 'redux-form-material-ui';
import {orange500, lightBlue500} from 'material-ui/styles/colors';

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: lightBlue500,
    },
    floatingLabelFocusStyle: {
        color: orange500,
    },
};

const validate = values => {
    const errors= {}
    if (!values.where) {
        errors.where = 'Required'
    }
    if (!values.who) {
        errors.who = 'Required'
    }
    return errors
}

class SearchBar extends Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }
    handleSubmit(event) {
        event.preventDefault()

        this.props.fetchListings(this.state.where, this.state.who);
    }

    render() {
        const { handleSubmit, invalid, submitting } = this.props;
        return (
            <form className={styles.root} onSubmit={handleSubmit}>
                <div>
                    <Field name="where" component={TextField}
                           floatingLabelText="Where are you going?"
                           floatingLabelStyle={styles.floatingLabelStyle}
                           floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                </div>
                <div>
                    <Field name="who" component={TextField}
                           floatingLabelText="With how many people?"
                           floatingLabelStyle={styles.floatingLabelStyle}
                           floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>
                </div>
                <button type="submit" disabled={invalid || submitting}>Submit</button>
            </form>
        );
    }
}

// Decorate the form component
SearchBar = reduxForm({
    form: 'searchBar', // a unique name for this form
    destroyOnUnmount: false,
    validate
})(SearchBar);

export default SearchBar;
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchBar extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="locationSearch">Where are you going?</label>
                    <Field name="locationSearch" component="input" type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Decorate the form component
SearchBar = reduxForm({
    form: 'searchBar' // a unique name for this form
})(SearchBar);

export default SearchBar;
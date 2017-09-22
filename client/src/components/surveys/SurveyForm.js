//SurveyFrom shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails'
//allows redxufORM TO COMMUNIATE WITH redux store
import formFields from './formFields';


//map function
class SurveyForm extends Component{
  renderFields(){
    return _.map(formFields,({label, name})=>{
      return (
        <Field key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}/>
      );
    });
  }

  render(){
    //handleSubmit is provided automatically by the redux helper
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
            {this.renderFields()}
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
    );
  }
}

function validate(values){
    const errors={};
    errors.recipients = validateEmails(values.recipients||'');

    _.each(formFields,({name})=>{
      if(!values[name]){
        errors[name] ='You must provide a value';
      }

  });


    return errors;
}

//mapping reduxForm with class Su`r`veyForm
export default reduxForm({
      validate,
      form: 'surveyForm',
      destroyOnUnmount: false
})(SurveyForm);

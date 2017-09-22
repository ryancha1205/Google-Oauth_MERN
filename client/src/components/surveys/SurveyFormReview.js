//SurveyForm Review show users thier form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';


const SurveyFormReview = ({onCancel, formValues, submitSurvey, history})=>{
  const reviewFields = _.map(formFields,({name,label})=>{
    console.log(formValues);
    return(
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return(
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}>
        Back
      </button>

      <button
        onClick={()=>submitSurvey(formValues, history)}
        className="green btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
    //with arrow fats, means don't execute it untill the user clicks

  );
};
function mapStateToProps(state){
  console.log(state);
  return{ formValues: state.form.surveyForm.values };
}


export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));

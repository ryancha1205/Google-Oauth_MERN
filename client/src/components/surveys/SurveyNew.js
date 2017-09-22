//SurveyNew shows SurveyForm and SurveyFormReview
import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
//survey New wants to show the survey form
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state={new:true};
  // }
//dissonance 불협화음 
  state = { showFormReview: false };

  renderContent(){
    if(this.state.showFormReview){
      return <SurveyFormReview
          onCancel={()=>this.setState({showFormReview:false})}
        />
    }
    return <SurveyForm
      onSurveySubmit={()=>this.setState({showFormReview:true})} />
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form:'surveyForm'
})(SurveyNew);

import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
//we are woring inside the browser

const Dashboard = () => {
  return (
    //ant tiem we want top navigate between
    //routes inside of our react router application
    //we do not use anchor tags, we use link tags
    <div>
       <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

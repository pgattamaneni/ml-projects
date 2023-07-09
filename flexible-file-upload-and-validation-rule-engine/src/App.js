import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import SignInPage from './pages/SignInPage/SingInPage';
import SingUpPage from './pages/SignUpPage/SingUpPage';
import Dashboard from './pages/Dashboard/Dashboard';
import HomePage from './pages/HomePage/HomePage';
import DashboardScanAndUpload from './components/DashboardScanAndUpload/DashboardScanAndUpload';
// import DashboardTemplateDefinition from './components/DashboardTemplateDefinition/DashboardTemplateDefinition';
import DashboardFileStatistics from './components/DashboardFileStatistics/DashboardFileStatistics';
import Profile from './components/Profile/Profile';
import DashboardSettings from './components/DashboardSettings/DashboardSettings';
import NotFound from './components/NotFound/NotFound';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import setCurrentUser from './redux/user/user.actions';

import './index.css';
import TestTable from './components/TestTable/TestTable';
import FileReport from './components/FileReport/FileReport';

class App extends React.Component { 
  // const [currentUser, setCurrentUser] = useState(null);

  setUser = (obj) => {
    this.props.setCurrentUser(obj);
  }

  render() {
    const currentUser = this.props.currentUser;
    // const currentUser = 'ss';
    return (
      <div className="flex flex-col h-screen">
        {
          !currentUser ?
          (
            <Header />
          ): 
          (
            <DashboardHeader />
          )
        }
        <Switch>
          <Route exact path="/" render={() => currentUser ? (<Redirect to="/dashboard"/>) : <HomePage />} />
          <Route exact path="/signup" render={(props) => currentUser ? (<Redirect to="/dashboard"/>) : (<SingUpPage {...props} setUser = {this.setUser}/>)} />
          <Route exact path="/dashboard/" render={(props) => currentUser ? (<Dashboard {...props} currentUser={currentUser} />) : (<HomePage {...props}/>)} />
          <Route exact path="/dashboard/scan-and-upload" render={(props) => currentUser ? (<DashboardScanAndUpload {...props} />) : (<HomePage {...props}/>)} />
          <Route exact path="/dashboard/file-report" render={(props) => currentUser ? (<FileReport {...props} />) : (<HomePage {...props}/>)} />
          <Route exact path="/dashboard/file-statistics" render={(props) => currentUser ? (<DashboardFileStatistics {...props} />) : (<HomePage {...props}/>)} />
          <Route exact path="/dashboard/profile" render={(props) => currentUser ? (<Profile {...props} />) : (<HomePage {...props}/>)} />
          <Route exact path="/dashboard/settings" render={(props) => currentUser ? (<DashboardSettings {...props} />) : (<HomePage {...props}/>)} />
          <Route exact path="/signin" render={(props) => currentUser ? (<Redirect to="/dashboard" />) : (<SignInPage {...props} setUser={this.setUser} />)} />
          <Route exact path="/testtable" render={(props) => <TestTable />} />
          <Route render={(props) => <NotFound value="Page Not Found"/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Todos from './Todos'
import AddTodo from './AddTodo'
import * as TodoActions from '../redux/actions'
import Grid from 'material-ui/Grid'
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from 'material-ui/styles'

const theme = createMuiTheme({
  typography: {
    // Use Plex over Roboto
    fontFamily: `"IBM Plex Sans", -apple-system,system-ui,BlinkMacSystemFont, "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif`,
    fontWeightMedium: 500,
    // Title of the app with font Aleo
    display3: {
      fontFamily: `"Aleo"`
    }
  }
})
const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  wrapper: {
    maxWidth: '500px',
    margin: 'auto'
  }
})

const App = ({ todos, actions, classes }) => (
  <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={12}>
          <AddTodo addTodo={actions.addTodo} />
        </Grid>
        <Grid item xs={12}>
          <Todos todos={todos} actions={actions} />
        </Grid>
      </Grid>
    </div>
  </MuiThemeProvider>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
)

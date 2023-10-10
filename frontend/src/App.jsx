import { useSelector } from 'react-redux'
import './App.css'
import Router from './routes'
import Snackbar from './components/Snackbar';

function App() {

  const { open, message, severity } = useSelector((state) => state.app.snackbar);

  return (
    <>
      <Router />
      
      {message && open ? <Snackbar
        message={message}
        open={open}
        severity={severity}
      /> : <></>}

    </>
  )
}

export default App

import Topbar from './scenes/global/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './scenes/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../src/scenes/dashboard';
import Team from '../src/scenes/team';
import Invoices from '../src/scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from '../src/scenes/bar';
import Form from '../src/scenes/form';
// import Line from '../src/scenes/line';
// import Pie from '../src/scenes/pie';
import FAQ from '../src/scenes/faq';
// import Geography from '../src/scenes/geography';
import Calender from '../src/scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<Calender />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

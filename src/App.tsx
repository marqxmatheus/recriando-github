import 'react-calendar-heatmap/dist/styles.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';
import Footer from './components/Footer';
import GlobalStyles from './styles/GlobalStyles';
import type { ThemeName } from './styles/themes';

function App() {
  return (
    <BrowserRouter>
      <Header themeName={'light'} setThemeName={function (newName: ThemeName): void {
        throw new Error('Function not implemented.');
      }} />

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SobreALiga } from './pages/SobreALiga';
import { Competicoes } from './pages/Competicoes';

export function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SobreAliga" element={<SobreALiga />} />
                <Route path="/Competicoes" element={<Competicoes />} />
            </Routes>
        </Router>
    );
}

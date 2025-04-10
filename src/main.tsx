import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);

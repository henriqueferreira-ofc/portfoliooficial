import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Desregistra qualquer service worker antigo que possa estar cacheando
// versões desatualizadas do app (causava tela branca ao atualizar).
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations?.().then((regs) => {
    regs.forEach((reg) => reg.unregister().catch(() => undefined));
  }).catch(() => undefined);
}

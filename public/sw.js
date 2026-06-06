// Service worker desativado.
// Esta versão se auto-remove e limpa todos os caches antigos para evitar
// que o navegador continue servindo HTML/JS desatualizado após um deploy
// (causa de tela branca ao atualizar a página).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      } catch (e) {
        // ignore
      }
      try {
        await self.registration.unregister();
      } catch (e) {
        // ignore
      }
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});

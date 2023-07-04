import { onRequest } from 'firebase-functions/v2/https';
  const server = import('firebase-frameworks');
  export const ssrtaskmanagementapp98d4f = onRequest({"region":"us-central1","maxInstances":1}, (req, res) => server.then(it => it.handle(req, res)));
  
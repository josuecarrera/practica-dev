const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

app.listen(4000, () => console.log('Backend corriendo en puerto 4000'));

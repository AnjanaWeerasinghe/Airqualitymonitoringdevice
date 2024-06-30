const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/track', (req, res) => {
  const trackingData = {
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    timestamp: new Date()
  };

  // Store tracking data in your database
  console.log('Tracking Data:', trackingData);

  res.cookie('tracking_id', 'unique_user_id', { httpOnly: true, secure: true });
  res.send('Tracking data recorded.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

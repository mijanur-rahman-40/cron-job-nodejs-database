import express from "express";
const app = express();
// implementing corn job
import cron from 'node-cron';


cron.schedule('* 30 * * * Sunday', () => {
  console.log('running a task every 30min');
});

// cron.schedule('* * * * Sunday', () => {
//   console.log('running a task every second');
// });

cron.schedule('* * * * * *', () => {
  console.log('running a task every second');
});

// cron.schedule('* * */3 * *', () => {
//     console.log('that says, every minute of every hour on every three days. ');
// });

// cron.schedule('0 0 */3 * *', () => {
//     console.log('Says at 00:00 (midnight) every three days.');
// });

app.listen(5000, () => console.log("App Running on http://localhost:5000"));

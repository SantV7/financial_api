import 'dotenv/config';
import { app } from "./app.ts";

const portServer = process.env.PORT;

app.listen( portServer,() => console.log('server is running...'))
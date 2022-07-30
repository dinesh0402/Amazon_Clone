const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LIscOSBVFKQ9Wh813OxWlRElyS3M6oxjUiMWO8GZvqZvwLtrkAN1bBfE7TNvcc8hDCxWsSv0gBv2b7SzwsnoyA000AdzelFIV');

// Setting up an API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/', (req,res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req,res) => {
    const total  = req.query.total;
    console.log('Payment Request Received !!! for this amount >>>' , total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-e755c/us-central1/api
# dot-on-map
Example Express App using Twilio and Leaflet to put a dot on map

## Requirements

1. Twilio phone number + API keys
2. node.js + npm
3. ngrok (used to tunnel twilio traffic to app server)

## Install

1. `npm install`
2. `node app.js`
3. `ngrok http 3000`
4. Update twilio messaging path to `http://yourngrokserver.com/twilio/`
5. Update index.html jquery .get request to ngrok `http://yourngrokserver.com/dots` server.

## Usage

1. Send sms to your twilio number
2. Use API to send post request to test app server `http://yourngrokserver.com/api/+1<testnumber>`
3. Use API to remove dots `http://yourngrokserver.com/kill`

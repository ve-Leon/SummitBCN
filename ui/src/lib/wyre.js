var randomToken = require('random-token');
// import * as randomToken from 'random-token';
import axios from 'axios';

export default class Wyre {

    baseUrl = 'https://api.testwyre.com/'

    /* Utilities */

    getApiPath(path) {
        return `${this.baseUrl}${path}`
    }

    async generateSecret() {
        const token = randomToken(25);
        const response = await axios.post(
            this.getApiPath('v2/sessions/auth/key'),
            {secretKey: token}
        )
        return response.data

    }

    getApiKey() {
        
    }

    async createAccount(token) {

        console.log(this.getApiPath('v3/accounts'), token)

        const randomEmail = randomToken(10);
        const response = await axios.post(
            this.getApiPath('v3/accounts'),
            {
                type:"INDIVIDUAL",
                country:"US",
                subaccount: false,
                profileFields:[
                   {
                      fieldId:"individualLegalName",
                      value:"Marco Ordonez"
                   },
                   {
                      fieldId:"individualEmail",
                      value: `${randomEmail}@${randomEmail}.com`
                   },
                   {
                      fieldId:"individualResidenceAddress",
                      value:{
                         street1:"1 Market St",
                         street2:"Suite 402",
                         city:"San Francisco",
                         state:"CA",
                         postalCode:"94105",
                         country:"US"
                      }
                   }
                ]
             },
             {
                 headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            
        )

        console.log(response)
        return response.data

        // curl -X POST \
        // -H "Content-Type: application/json" \
        // -H "Authorization: Bearer YOUR-BEARER-TOKEN" \
        // -d '{"type":"INDIVIDUAL","country": "US","subaccount": true,"profileFields":[{"fieldId": "individualLegalName","value": "YOUR_NAME"},{"fieldId": "individualEmail","value": "YOUREMAIL@EMAIL.com"},{"fieldId": "individualResidenceAddress","value": {"street1": "1 Market St","street2": "Suite 402","city": "San Francisco","state": "CA","postalCode": "94105","country": "US"}}]}' \
        // https://api.testwyre.com/v3/accounts
    }
}
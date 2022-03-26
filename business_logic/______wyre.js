// var randomToken = require('random-token');
import randomToken from 'random-token';
import axios from 'axios';

export default class Wyre {

    baseUrl = 'https://api.testwyre.com/v2/'

    /* Utilities */

    getApiPath(path) {
        return `${this.base}${path}`
    }

    async generateSecret() {
        const token = randomToken(25);
        const response = await axios.post(
            this.getApiPath('sessions/auth/key'),
            {secretKey: token}
        )

    //     curl --request POST \
    //  --url https://api.testwyre.com/v2/sessions/auth/key \
    //  --header 'Accept: application/json' \
    //  --header 'Content-Type: application/json' \
    //  --data '{"secretKey":"your-secret-key"}'
    }

    getApiKey() {
        
    }

    createAccount() {
        
    }

    generateSecret() {
        
    }
}
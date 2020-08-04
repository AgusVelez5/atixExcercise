const fs = require('../infrastructure/fs');
const { ResponseError } = require('./response.model');
const crypto = require("crypto");

module.exports = {
    
    getNonce: (prevLineHash, message) => {

        let nonce = 0;
        let hash = '';
        let line = '';
        
        while(hash.substring(0, 2) !== '00'){
            line = `${prevLineHash},${message},${nonce}`;
            hash = crypto.createHash('sha256').update(line).digest('hex').toString();
            nonce ++;
        }

        return nonce - 1;
    },
    
    getLastLineHash: async () => {
        
        try {
            let lastLine = await fs.getLastLine();
        
            let lastLineHash = "";

            if(lastLine instanceof ResponseError) return lastLine;
            
            if(lastLine === ""){
                while(lastLineHash.substring(0, 2) !== '00'){
                    lastLineHash = await crypto.createHash('sha256').update(String(Math.random())).digest('hex').toString();
                }
            } else {
                lastLine = lastLine.substring(0, lastLine.length - 1);
                lastLineHash = await crypto.createHash('sha256').update(lastLine).digest('hex').toString();
            }

            return lastLineHash;
        } catch (err) {
            console.log(err);
            return new ResponseError('500', 'Server error', err);
        }
    }
}
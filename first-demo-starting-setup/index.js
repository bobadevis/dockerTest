const express = require('express');
    const app= express();
    app.get('/',(req ,res )=>{res.send("MC , BC @Sagar & Daulat");});
    app.listen(8080,()=>{console.log('listning on port 8080');});
import express from 'express';
import { EC2 } from '@aws-sdk/client-ec2'

const batata = new EC2();

const app = express();

app.listen(3000, async () => {
    const xd = await batata.getInstanceMetadataDefaults();
    console.log(xd)
    console.log('server listening on 3000')
});
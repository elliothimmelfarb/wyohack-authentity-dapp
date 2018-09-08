import Web3 from 'web3'
import { decodeFromHex } from './hexutils'

export default async () => {
  console.log('initiating whisper listen')

  const provider = new Web3.providers.WebsocketProvider('ws://34.211.111.228:8586');

  let keyID;
  let privateKey;
  let publicKey;

  const web3 = new Web3(provider);

  await web3.shh.getInfo().then(console.log);
  let version = await web3.shh.getVersion();
  console.log(`Version: ${version}`);

  await web3.shh.net.getPeerCount().then(console.log);

  await web3.shh.newKeyPair().then((id) => {keyID = id;});
  console.log(`key: ${keyID}`);

  await web3.shh.getPrivateKey(keyID).then((id) => {privateKey = id;});
  console.log(`privateKey: ${privateKey}`);

  await web3.shh.getPublicKey(keyID).then((id) => {publicKey = id;});
  console.log(`publicKey: ${publicKey}`);

  await web3.shh.subscribe("messages", {
    privateKeyID: keyID
  }).on('data', (data) => {
    const payload = data.payload;
    console.log(`data coded: ${payload}`);
    const payloadDecoded = decodeFromHex(data.payload);
    console.log(`data decoded: ${JSON.stringify(payloadDecoded)}`);
  });
  return publicKey
}

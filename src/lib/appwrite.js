import { Client, Account } from 'appwrite';

// Appwrite client configuration
const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('6897966e000abd459b11');

const account = new Account(client);

export { client, account };



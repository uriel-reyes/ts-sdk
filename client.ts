import { version } from "os";
import { ctpClient, projectKey } from "./src/BuildClient";
import {
    ApiRoot,
    createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient)
  .withProjectKey({projectKey});

// Plug-in your function here



// Call your function such as:
// getProject()
//   .then(console.log)
//   .catch(console.error);



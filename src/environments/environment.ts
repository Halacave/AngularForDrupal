// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: false,
  mainUrl : 'http://localhost/drupalForAngular',
  httpjson : {
				  headers: new HttpHeaders({ 
				  "X-CSRF-Token": "O2Jz8hu-ZBlemLWWGs4em0VzGFc7Am0TxmDotsGVRJA",
				  "Authorization": "Basic O2Jz8hu-ZBlemLWWGs4em0VzGFc7Am0TxmDotsGVRJA", // encoded user/pass - this is admin/123qwe
				  // "Content-Type": "application/json"
				  "Content-Type": "application/json"
				  })
				}
};
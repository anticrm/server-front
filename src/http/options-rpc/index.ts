
import type { HttpRequest, HttpResponse } from '@architect/functions'

export async function handler (req: HttpRequest): Promise<HttpResponse | undefined> {

  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
  }
  
}

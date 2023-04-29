export class HttpService {
  async post(url: string, body: any): Promise<Response> {
    return await fetch(url, {
      method: "POST",
      body: typeof body === "object" ? JSON.stringify(body) : body,
    });
  }
}

export function foo(bar: any) {
  // This function will be deleted from the bundle because it's unused.
  console.log(bar);
}

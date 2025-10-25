export class Http {
    static async getJson<T>(url: string): Promise<T> {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      return res.json() as Promise<T>;
    }
}
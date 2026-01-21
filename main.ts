import { serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
const url = new URL(req.url);
    const uri = url.searchParams.get("uri");
    
    if (uri) {
        await fetch(uri, { method: "POST" });
    }
    
    return serveFile(req, "./index.html");
});
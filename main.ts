import { serveFile } from "jsr:@std/http/file-server";
Deno.serve(async (req) => {
    const url = new URL(req.url);
    const uri = url.searchParams.get("uri");
    
    if (uri) {
        fetch(uri, { method: "POST" });
    }
    
    return serveFile(req, "./index.html");
});
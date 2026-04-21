MCP Server for Button Atom

This minimal MCP server exposes a Button atom manifest and the source/usage code.

Run locally:

```bash
cd mcp/button-atom-mcp
npm install
npm start
```

Endpoints:
- `GET /` — server info
- `GET /atoms/button` — JSON manifest
- `GET /atoms/button/code` — TSX source for the Button component

Use `PORT` env var to change the server port (default 4300).

Workspace registration
- A workspace registry file was added at `/.mcp/registry.json` pointing to this manifest both by file (`mcp/button-atom-mcp/button.json`) and by URL (`http://localhost:4300/atoms/button`).

Troubleshooting `RequestFailed`
- If a client reports `RequestFailed` when fetching the manifest, the registry allows using the local `button.json` file instead of fetching over network. Start the server with `npm start` and ensure `PORT` 4300 is reachable to use the `manifestUrl`.

<!-- GitHub Actions badge: repository badge -->
![Validate MCP Manifests](https://github.com/maheshv13/button/actions/workflows/validate-mcp-manifest.yml/badge.svg)

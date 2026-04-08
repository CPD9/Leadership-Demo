/**
 * Vercel Blob read/write token resolution.
 *
 * Primary: `LEAD_READ_WRITE_TOKEN` — linked store named "lead" (matches Vercel + local).
 * Fallback: `BLOB_READ_WRITE_TOKEN` — generic name from Blob Quickstart / older docs.
 */
export function getBlobReadWriteToken(): string | undefined {
  return (
    process.env.LEAD_READ_WRITE_TOKEN ?? process.env.BLOB_READ_WRITE_TOKEN
  );
}

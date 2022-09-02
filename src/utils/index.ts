const CHUNK_SIZE = 3;

export function formatNumber(number: number) {
  const numberStr = number.toString();
  const chunksCount = Math.ceil(numberStr.length / CHUNK_SIZE);
  const negativeOffset = chunksCount * CHUNK_SIZE - numberStr.length;
  const chunks = [];

  for (let i = 0; i < chunksCount; i++) {
    const chunkStartIndex = i * CHUNK_SIZE - negativeOffset;
    const chunkEndIndex = chunkStartIndex + CHUNK_SIZE;
    const chunk = numberStr.slice(Math.max(chunkStartIndex, 0), chunkEndIndex);
    chunks.push(chunk);
  }

  return chunks.join(",");
}

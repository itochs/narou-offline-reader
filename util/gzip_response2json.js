async function gzip_response2json(response) {
  try {
    const stream = response?.body?.pipeThrough(
      new DecompressionStream("gzip")
    );
    const streamResponse = new Response(stream);
    const arrayBuffer = await streamResponse.arrayBuffer();
    const text = new TextDecoder("utf-8").decode(arrayBuffer);
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("req assets:", error);
    throw new Error("cannot read response");
  }
}

export default gzip_response2json;

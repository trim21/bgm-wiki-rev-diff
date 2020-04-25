function request (url: string): Promise<{ responseText: string }> {
  return new Promise((resolve) => {
    // @ts-ignore
    window.GM_xmlhttpRequest({
      url,
      // @ts-ignore
      onload: function ({ responseText, }) {
        resolve({ responseText })
      }
    })
  })
}

export { request }

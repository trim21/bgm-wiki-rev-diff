function request (url) {
  return new Promise((resolve, reject) => {
    window.GM_xmlhttpRequest({
      url,
      onload: function ({ response, responseText, }) {
        resolve({ response, responseText })
      }
    })
  })
}

export { request }

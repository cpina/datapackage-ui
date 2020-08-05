import fetch from 'isomorphic-fetch'

export function onSaveToServer(data) {
  // Example found in https://codereviewvideos.com/course/symfony-3-with-reactjs-and-angular/video/react-create-post
  return fetch('/api/upload/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Disposition': 'attachment; filename="filename.jpg"',
    },
  })
    .then((res) => {
      return res
    })
    .catch((err) => err)
}

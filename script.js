// fetch('https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg')
// .then(resp => {
//     return resp.blob();
// })
// .then(blob => {
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })

async function catchView() {
    const resp = await fetch('https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg')
    const blob = await resp.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
catchView()

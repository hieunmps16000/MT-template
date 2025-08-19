function createImage(qty, slug) {
    let html = '';
    for (let i = 1; i <= qty; i++) {
        html += `<img src="${slug}${i}.jpg" alt="img-${i}" /><p>&nbsp;</p>`;
    }
    return html;
}

const app = document.getElementById('root');

const result = createImage(119, 'images/thi-cong-lap-dat/img-');

app.innerText = result;
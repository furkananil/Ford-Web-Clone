function toggleContent(contentId, element) {
    var contentContainer = document.getElementById('content-container');
    var content = document.getElementById(contentId);
    var link = element;

    // navbardaki içerikleri gizle
    var contents = document.getElementsByClassName("alt-metin-icerik");
    var links = document.querySelectorAll(".navbar2-center a");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
    }

    // İçeriği göster veya gizle
    if (content.style.display === "block") {
        contentContainer.style.display = "none";
        content.style.display = "none";
        link.classList.remove("active");
    } else {
        contentContainer.style.display = "block";
        content.style.display = "block";
        link.classList.add("active");
    }

    // Gölgelendirmeyi açılan kutuya taşı
    if (contentContainer.style.display === "block") {
        document.querySelector(".navbar2").style.boxShadow = "none";
        contentContainer.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    } else {
        document.querySelector(".navbar2").style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
        contentContainer.style.boxShadow = "none";
    }
}

// Sayfanın herhangi bir yerine tıklanınca navbarda açılan içerikleri gizle
document.addEventListener("click", function(event) {
    var navbar2 = document.querySelector(".navbar2");
    if (!navbar2.contains(event.target)) {
        var contents = document.getElementsByClassName("alt-metin-icerik");
        var links = document.querySelectorAll(".navbar2-center a");
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = "none";
        }
        for (var j = 0; j < links.length; j++) {
            links[j].classList.remove("active");
        }
        document.getElementById('content-container').style.display = "none";
        document.querySelector(".navbar2").style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";
    }
});

// Akordiyonu aç / kapat
document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion-button");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

// SEÇİLEN YAZIYA GÖRE ARABA RESİMLERİNİ DEĞİŞ
document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');

    const imageSets = {
        'otomobil-suv': [
            'images/a1.png', 'images/a2.png', 'images/a3.png', 
            'images/a4.png', 'images/a5.png', 'images/a6.png'
        ],
        'ticari-araclar': [
            'images/b1.png', 'images/b2.png', 'images/b3.png', 
            'images/b4.png', 'images/b5.png', 'images/b6.png'
        ],
        'gelecek-araclar': [
            'images/d1.png', 'images/d2.png', 'images/d3.png', 
            'images/d4.png', 'images/d5.png', 'images/d6.png'
        ]
    };

    const links = document.querySelectorAll('.navbar3-center a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.closest('a').id;
            if (!e.target.closest('a').classList.contains('active')) {
                links.forEach(link => link.classList.remove('active'));
                e.target.closest('a').classList.add('active');
                updateImages(targetId);
            }
        });
    });

    const updateImages = (category) => {
        if (!imageSets[category]) return;
        imageContainer.innerHTML = imageSets[category].map(src => `
            <div class="col araba"><a href="#"><img src="${src}" alt="Image"></a></div>
        `).join('');
    };

    // Sayfa yüklendiğinde default olarak Otomobil & SUV resimlerini göster
    updateImages('otomobil-suv');
});


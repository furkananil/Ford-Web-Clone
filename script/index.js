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
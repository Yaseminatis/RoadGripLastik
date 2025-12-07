(function ($) {
    "use strict";

    // =========================
    //  SPINNER
    // =========================
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 300); // Biraz daha yumuşak geçiş
    };
    spinner();
    
    
    // =========================
    //  WOW.JS ANİMASYONLARI
    // =========================
    new WOW().init();


    // =========================
    //  STICKY NAVBAR
    // =========================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            // Sayfa aşağı kayınca navbar sabit ve koyu arka plan
            $('.navbar').addClass('position-fixed bg-dark shadow-sm');
        } else {
            // En üstteyken varsayılan haline dönsün
            $('.navbar').removeClass('position-fixed bg-dark shadow-sm');
        }
    });
    
    
    // =========================
    //  BACK TO TOP BUTONU
    // =========================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // =========================
    //  SAYFA İÇİ SMOOTH SCROLL (Detaylı Bilgi butonları vb.)
    // =========================
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // navbar yüksekliği kadar yukarıdan başlat
            }, 800, 'easeInOutExpo');
        }
    });


    // =========================
    //  TESTIMONIAL CAROUSEL
    // =========================
 if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: false,  // normal küçük noktalar
        items: 1
        // dotsData: true  ← tamamen sil
    });
}


    // =========================
    //  LASTİK FİLTRE FORMU (DEMO DAVRANIŞI)
    //  lastikler.html içindeki filtre formu için:
    //  - Sayfa yenilenmesin
    //  - Kullanıcıya bunun örnek/demonstrasyon amaçlı olduğu hatırlatılsın
    // =========================
    $('#lastik-filter-form').on('submit', function (e) {
        e.preventDefault();

        // Seçilen değerleri örnek olsun diye okuyup basit bir mesaj oluşturabiliriz
        var marka   = $(this).find('select').eq(0).val();
        var model   = $(this).find('input[type="text"]').eq(0).val();
        var yil     = $(this).find('select').eq(1).val();
        var aracTur = $(this).find('select').eq(2).val();

        alert(
            "Bu filtreleme formu demo amaçlıdır.\n\n" +
            "Seçilen bazı bilgiler:\n" +
            "- Araç Markası: " + marka + "\n" +
            "- Araç Modeli: " + (model || "Belirtilmedi") + "\n" +
            "- Model Yılı: " + yil + "\n" +
            "- Araç Türü: " + aracTur + "\n\n" +
            "Gerçek projede burada veritabanı sorgusu veya dinamik listeleme yapılabilir."
        );

        // İstenirse, sayfayı lastik kartlarının olduğu bölüme doğru kaydırabiliriz:
        var lastikBolumu = $('#yaz'); // yaz lastikleri başlığı
        if (lastikBolumu.length) {
            $('html, body').animate({
                scrollTop: lastikBolumu.offset().top - 80
            }, 800, 'easeInOutExpo');
        }
    });

})(jQuery);
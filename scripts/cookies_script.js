function loadGoogleAnalytics() {

  (function(w, d, s, l, i){
    w[l] = w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),
                event:'gtm.js'});
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l !='dataLayer'?'&l='+l: '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j,f);
})
(window,document,'script','dataLayer','GTM-KF6WGSG');

}

function showCookieBanner() {
  const cookieAnswered = localStorage.getItem('cookie_answered');
  const cookieDate = localStorage.getItem('cookie_date');
  const today = new Date();

  if (cookieAnswered && cookieDate) {
    const diff = (today - new Date(cookieDate)) / 1000 / 60 / 60 / 24;
    if (diff > 365) {
      localStorage.removeItem("cookie_answered");
      localStorage.removeItem("cookie_date");
    } else {
      return; 
    }
  }

  // Create banner only if not answered
  const cookieBanner = document.createElement('div');
  cookieBanner.id = 'cookie-banner';
  cookieBanner.classList.add('cookies-infobar');
  cookieBanner.innerHTML = 
  '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KF6WGSG" height = "0" width = "0" style = "display:none; visibility:hidden;"></iframe>' +
  '<div class = "container">' +
  '<p><strong>Cookies on Equality Matters</strong></p>' +
  '<p>This prototype web page places small amounts of information known as cookies on your device. <a href = "https://www.nisra.gov.uk/cookies" class = "cookiesbarlink" target = "_blank" rel = "noopener noreferrer">Find out more about cookies</a>.</p>' +
  '<button id = "accept-cookies" class = "cookies-infobar_btn">Accept cookies</button>' +
  '<button id = "reject-cookies" class = "cookies-infobar_btn_reject">Reject cookies</button>' +
  '</div>';

  document.body.prepend(cookieBanner);

  // Add button actions
  document.getElementById('accept-cookies').onclick = function () {
    localStorage.setItem('cookie_answered', "true");
    localStorage.setItem('cookie_date', today);
    cookieBanner.remove();
    loadGoogleAnalytics();
  };

  document.getElementById('reject-cookies').onclick = function () {
    localStorage.setItem('cookie_answered', "true");
    localStorage.setItem('cookie_date', today);
    cookieBanner.remove();
  };
}

window.onload = showCookieBanner;
(function() {
    var selectedTheme = sessionStorage.getItem('theme');

    if (selectedTheme === 'light') {
      var root = document.documentElement;
      '--nc-tx-1:#000000;--nc-tx-2:#1A1A1A;--nc-bg-1:#FFFFFF;--nc-bg-2:#F6F8FA;--nc-bg-3:#E5E7EB;--nc-lk-1:#0070F3;--nc-lk-2:#0366D6;--nc-lk-tx:#FFFFFF;--nc-ac-1:#79FFE1;--nc-ac-tx:#0C4047;--dino-icon: url(/assets/img/dino-1.svg)'.split(';').map(x => x.split(':')).forEach(p => {
        root.style.setProperty(p[0], p[1]);
      });
    } else if (selectedTheme === 'dark') {
      var root = document.documentElement;
      '--nc-tx-1:#ffffff;--nc-tx-2:#eeeeee;--nc-bg-1:#000000;--nc-bg-2:#111111;--nc-bg-3:#222222;--nc-lk-1:#3291FF;--nc-lk-2:#0070F3;--nc-lk-tx:#FFFFFF;--nc-ac-1:#7928CA;--nc-ac-tx:#FFFFFF;--dino-icon: url(/assets/img/dino-2.svg)'.split(';').map(x => x.split(':')).forEach(p => {
        root.style.setProperty(p[0], p[1]);
      });
    }

    document.getElementById('btn-theme').addEventListener('click', function(e) {
      e.preventDefault();
      var root = document.documentElement;
      var nextTheme = root.style.getPropertyValue('--nc-tx-1') === '#ffffff' ? 'light' : 'dark';
      sessionStorage.setItem('theme', nextTheme);
      window.location.reload(false);
    });
})();
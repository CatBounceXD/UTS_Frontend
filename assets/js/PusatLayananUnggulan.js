document.addEventListener("DOMContentLoaded", function () {
     const dataSpesialisasi = [
     { title: "Jantung & Pembuluh Darah", icon: "🫀", hospitals: "4", desc: "Pusat Layanan Unggulan Jantung & Pembuluh Darah menyediakan layanan diagnosis, penanganan, dan pemulihan pasien dengan dukungan tim profesional yang terlatih, peralatan medis canggih, dan komitmen untuk terus berinovasi demi meningkatkan kualitas perawatan pasien.", stats: [{ val: "327k+", label: "Pasien per Tahun" }, { val: "237+", label: "Dokter Spesialis dan Subspesialis" }, { val: "20k+", label: "Prosedur Cathlab & Operasi" }] },
     { title: "Saraf & Bedah Saraf", icon: "🧠", hospitals: "2", desc: "Pusat Layanan Unggulan Saraf dan Bedah Saraf menyediakan layanan diagnosis, perawatan, dan pemulihan pasien dengan dukungan tim profesional yang terlatih, peralatan medis canggih, dan komitmen untuk terus berinovasi demi meningkatkan kualitas perawatan pasien.", stats: [{ val: "5k+", label: "Jumlah Prosedur" }, { val: "180+", label: "Dokter Spesialis dan Subspesialis" }, { val: "340k+", label: "Pasien per Tahun" }] },
     { title: "Digestif", icon: "🩺", hospitals: "3", desc: "Pusat Layanan Unggulan Digestif menyediakan layanan komprehensif untuk diagnosis, perawatan, dan pemulihan pasien, didukung oleh tim profesional yang terlatih, peralatan medis canggih, serta komitmen untuk terus berinovasi dalam meningkatkan kualitas layanan.", stats: [{ val: "78k+", label: "Pasien per Tahun" }, { val: "80+", label: "Dokter Subspesialis" }, { val: "16k+", label: "Jumlah Prosedur" }] },
     { title: "Onkologi (Kanker)", icon: "🎗️", hospitals: "3", desc: "Pusat Layanan Unggulan Onkologi (Kanker) menyediakan layanan diagnosis, perawatan, dan pemulihan pasien dengan dukungan tim profesional yang terlatih, peralatan medis canggih, dan komitmen untuk terus berinovasi demi meningkatkan kualitas perawatan pasien.", stats: [{ val: "196k+", label: "Pasien per Tahun" }] },
     { title: "Ginjal & Saluran Kemih", icon: "🫘", hospitals: "2", desc: "Pusat Layanan Unggulan Ginjal & Saluran Kemih menyediakan layanan diagnosis, perawatan, dan pemulihan yang komprehensif bagi pasien dengan gangguan saluran kemih, termasuk penyakit ginjal dan berbagai kondisi urologi lainnya.", stats: [{ val: "173.5k+", label: "Pasien per Tahun" }, { val: "112+", label: "Dokter Spesialis dan Subspesialis" }, { val: "19.6k+", label: "Jumlah Prosedur Operasi" }] },
     { title: "Ortopedi", icon: "🦴", hospitals: "0", desc: "Pusat Layanan Unggulan Ortopedi menyediakan layanan diagnosis, penanganan, dan pemulihan pasien dengan dukungan tim profesional yang terlatih, peralatan medis canggih, dan komitmen untuk terus berinovasi demi meningkatkan kualitas perawatan pasien.", stats: [{ val: "22k+", label: "Pasien per Tahun" }, { val: "184+", label: "Dokter Spesialis dan Subspesialis" }, { val: "59k+", label: "Operasi Ortopedi dan Prosedur Total Joint" }] }
];

     const mainElements = document.querySelectorAll('.siloam-container > .breadcrumb, .siloam-container > section');
     const detailContainer = document.getElementById('dynamic-detail-page');
     const backBtn = document.getElementById('btn-back-dynamic');
                    
     const elBreadcrumb = document.getElementById('detail-breadcrumb-name');
     const elIcon = document.getElementById('detail-icon');
     const elTitle = document.getElementById('detail-title-text');
     const elHospitalCount = document.getElementById('detail-hospital-count');
     const elDesc = document.getElementById('detail-desc-text');
     const elStatsContainer = document.getElementById('detail-stats-container');

     const specialtyCards = document.querySelectorAll('.specialty-card:not(.card-half)');

     specialtyCards.forEach((card, index) => {
     card.addEventListener('click', function(e) {
     e.preventDefault();
     const data = dataSpesialisasi[index];
     if(!data) return;

     elBreadcrumb.innerText = data.title;
     elIcon.innerText = data.icon;
     elTitle.innerText = data.title;
     elHospitalCount.innerText = data.hospitals;
     elDesc.innerText = data.desc;

     elStatsContainer.innerHTML = '';
     data.stats.forEach(stat => {
     const div = document.createElement('div');
     div.className = 'stat-item';
     div.innerHTML = `<h2>${stat.val}</h2><p>${stat.label}</p>`;
     elStatsContainer.appendChild(div);
     });

     mainElements.forEach(el => el.style.display = 'none');
     detailContainer.style.display = 'block';
     window.scrollTo(0, 0);
     });
         });
          if(backBtn) {
             backBtn.addEventListener('click', function(e) {
                 e.preventDefault();
                  detailContainer.style.display = 'none';
                   mainElements.forEach(el => el.style.display = '');
               });
             }
});
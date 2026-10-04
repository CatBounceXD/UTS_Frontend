const hospitalsData = [
  {
    id: 1,
    name: "Hospitals Lippo Village",
    address: "Jl. Hospitals No. 6, Lippo Karawaci 1600 Tangerang 15811",
    city: "Tangerang",
    specialty: "Jantung",
    image: "../assets/images/Hospital.jpg",
    phone: "1500911"
  },

  {
    id: 2,
    name: "Rumah Sakit Umum Syubbanul Wathon",
    address: "Jl. Magelang - Kopeng km 08 Tegalrejo Kabupaten Magelang 56192",
    city: "Magelang",
    specialty: "Anak",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 3,
    name: "Hospitals Semanggi",
    address: "Jl. Garnisun Dalam No. 2-3 Semanggi, 12930",
    city: "Jakarta",
    specialty: "Kanker",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 4,
    name: "Hospitals Kebon Jeruk",
    address: "Jl. Raya Pejuangan Kav. 8, Kebon Jeruk, Jakarta 11530",
    city: "Jakarta",
    specialty: "Tulang",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 5,
    name: "Hospitals TB Simatupang",
    address: "Jl. R.A. Kartini Kav. 8, Cilandak, Jakarta 12430",
    city: "Jakarta",
    specialty: "Jantung",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 6,
    name: "Hospitals Surabaya",
    address: "Jl. Raya Gubeng No. 70, Surabaya 60281",
    city: "Surabaya",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 7,
    name: "Hospitals Denpasar",
    address: "Jl. Sunset Road No. 818, Kuta, Kabupaten Badung, Bali 80361",
    city: "Bali",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1587559070757-f7e776ea2816?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 8,
    name: "Hospitals Makassar",
    address: "Jl. Metro Tanjung Bunga Kav. 9, Makassar 90112",
    city: "Makassar",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 9,
    name: "Hospitals Balikpapan",
    address: "Jl. MT Haryono No. 9, Ring Road, Balikpapan 76114",
    city: "Balikpapan",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 10,
    name: "ospitals Medan",
    address: "Jl. Imam Bonjol No. 6, Medan 20112",
    city: "Medan",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 11,
    name: "Hospitals Palembang",
    address: "Jl. POM IX, Lorok Pakjo, Palembang 30137",
    city: "Palembang",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1613376023733-774095151528?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 12,
    name: "Hospitals Bogor",
    address: "Jl. Pajajaran No. 27, Babakan, Bogor Tengah 16128",
    city: "Bogor",
    specialty: "Anak",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 13,
    name: "Hospitals Bekasi Timur",
    address: "Jl. Chairil Anwar No. 27, Margahayu, Bekasi 17113",
    city: "Bekasi",
    specialty: "Jantung",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 14,
    name: "Hospitals Cikarang",
    address: "Jl. MH. Thamrin Kav. 105, Lippo Cikarang, Bekasi 17550",
    city: "Bekasi",
    specialty: "Kanker",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 15,
    name: "Hospitals Purwakarta",
    address: "Jl. Bungursari No. 1, Purwakarta 41181",
    city: "Purwakarta",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 16,
    name: "Hospitals Jambi",
    address: "Jl. Soekarno-Hatta, Paal Merah, Jambi 36139",
    city: "Jambi",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 17,
    name: "Hospitals Kupang",
    address: "Jl. R. W. Monginsidi, Fatululi, Oebobo, Kupang 85111",
    city: "Kupang",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  },

  {
    id: 18,
    name: "Hospitals Manado",
    address: "Jl. Sam Ratulangi No. 22, Wenang, Manado 95111",
    city: "Manado",
    specialty: "Umum",
    image: "https://images.unsplash.com/photo-1587559070757-f7e776ea2816?auto=format&fit=crop&w=600&q=80",
    phone: "1500911"
  }
];

const hospitalGrid = document.getElementById("hospitalGrid");
const searchInput = document.getElementById("searchInput");
const specialtySelect = document.getElementById("specialtySelect");
const citySelect = document.getElementById("citySelect");
const resultCountNumber = document.getElementById("resultCountNumber");


function renderHospitals(hospitals) {

  hospitalGrid.innerHTML = "";

  if (hospitals.length === 0) {

    hospitalGrid.innerHTML = `
      <div class="no-result">

        <i class="fa-solid fa-hospital-user"></i>

        <p>
          Tidak ada rumah sakit yang sesuai dengan pencarian Anda.
        </p>

      </div>
    `;

    resultCountNumber.textContent = 0;

    return;
  }
  hospitals.forEach((hospital) => {

    const cardHTML = `
      <article class="hospital-card">

        <img
          src="${hospital.image}"
          alt="${hospital.name}"
          class="card-image"
        >

        <div class="card-body-hospital">

          <h3 class="card-title-hospital">
            ${hospital.name}
          </h3>

          <p class="card-address-hospital">
            ${hospital.address}
          </p>

        </div>

      </article>
    `;

    hospitalGrid.insertAdjacentHTML(
      "beforeend",
      cardHTML
    );

  });

  resultCountNumber.textContent = hospitals.length;
}
function filterHospitals() {

  const query =
    searchInput.value
      .toLowerCase()
      .trim();

  const selectedSpecialty =
    specialtySelect.value;

  const selectedCity =
    citySelect.value;


  const filtered =
    hospitalsData.filter((hospital) => {

      const matchesSearch =
        hospital.name
          .toLowerCase()
          .includes(query) ||

        hospital.address
          .toLowerCase()
          .includes(query);


      const matchesSpecialty =
        selectedSpecialty === "" ||
        hospital.specialty === selectedSpecialty;


      const matchesCity =
        selectedCity === "" ||
        hospital.city === selectedCity;


      return (
        matchesSearch &&
        matchesSpecialty &&
        matchesCity
      );

    });

  renderHospitals(filtered);
}
if (searchInput) {

  searchInput.addEventListener(
    "input",
    filterHospitals
  );

}
if (specialtySelect) {

  specialtySelect.addEventListener(
    "change",
    filterHospitals
  );

}
if (citySelect) {

  citySelect.addEventListener(
    "change",
    filterHospitals
  );

}a
document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderHospitals(
      hospitalsData
    );

  }
);
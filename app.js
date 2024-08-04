function filterHotels() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const hotelList = document.getElementById('hotelList');
    const hotels = hotelList.getElementsByClassName('hotel-item');

    for (let i = 0; i < hotels.length; i++) {
      const hotelName = hotels[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
      const cityName = hotels[i].getElementsByTagName('p')[0].innerText.toLowerCase();
      if (hotelName.includes(filter) || cityName.includes(filter)) {
        hotels[i].style.display = '';
      } else {
        hotels[i].style.display = 'none';
      }
    }
  }

  function toggleViewAll() {
    const hotelList = document.getElementById('hotelList');
    const hotels = hotelList.getElementsByClassName('hotel-item');
    const viewAllBtn = document.getElementById('viewAllBtn');

    for (let i = 0; i < hotels.length; i++) {
      if (i >= 6) {
        if (hotels[i].classList.contains('hidden')) {
          hotels[i].classList.remove('hidden');
        } else {
          hotels[i].classList.add('hidden');
        }
      }
    }

    if (viewAllBtn.innerText === 'View All') {
      viewAllBtn.innerText = 'View Less';
    
    }
    else {
      viewAllBtn.innerText = 'View All';
    }
  }

  // Initially hide hotels beyond the first 6 (two rows)
  window.onload = function() {
    const hotelList = document.getElementById('hotelList');
    const hotels = hotelList.getElementsByClassName('hotel-item');

    for (let i = 6; i < hotels.length; i++) {
      hotels[i].classList.add('hidden');
    }
  }
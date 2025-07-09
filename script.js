document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const roomTitle = document.getElementById('room-title');
    const roomPrice = document.getElementById('room-price');
    const roomDescription = document.getElementById('room-description');
    const imageGallery = document.getElementById('image-gallery');
    const thumbnails = document.getElementById('thumbnails');

    // For navigating smooth to the particular section.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Menu slider start here
    const images = document.querySelectorAll('.thumbnail-image');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.toggle('opacity-100');
        images[currentIndex].classList.toggle('opacity-0');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.toggle('opacity-100');
        images[currentIndex].classList.toggle('opacity-0');
    }, 5000);
    // Menu slider end here

    // Navigation slider
    function toggleMenu() {
        const menu = document.getElementById('nav-menu');
        const cancelButton = document.getElementById('cancel-button');
        menu.classList.toggle('translate-x-full');
        cancelButton.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll'); // Toggle no-scroll class on body
    }
    
    document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
    document.getElementById('cancel-button').addEventListener('click', toggleMenu);
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('nav-menu');
            const cancelButton = document.getElementById('cancel-button');
            menu.classList.add('translate-x-full');
            cancelButton.classList.add('hidden');
            document.body.classList.remove('no-scroll'); // Remove no-scroll class when link is clicked
        });
    });
    
    
    const roomData = {
        deluxe: {
            title: 'Royal Silver',
            price: '₹3000/-',
            description: 'The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Instagram...',
            facilities: [
                { icon: './Hotel Icon and Image/Icon/Wifi.svg', name: 'Wi-Fi' },
                { icon: './Hotel Icon and Image/Icon/TV.svg', name: 'TV' },
                { icon: './Hotel Icon and Image/Icon/call.svg', name: 'Room Service' },
                { icon: './Hotel Icon and Image/Icon/Office area.svg', name: 'Work Area' },
            ],
            roomImage: [
                './Hotel Icon and Image/Image/Royal Silver/ImportedPhoto.743590265.53521.jpeg',
                './Hotel Icon and Image/Image/Royal Silver/ImportedPhoto.743590265.53878.jpeg',
                './Hotel Icon and Image/Image/Royal Silver/ImportedPhoto.743590265.535963.jpeg',
                './Hotel Icon and Image/Image/Royal Silver/ImportedPhoto.743590265.536514.jpeg'
            ]
        },
        suite: {
            title: 'Royal Golden',
            price: '₹3500/-',
            description: 'The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Instagram...',
            facilities: [
                { icon: './Hotel Icon and Image/Icon/Wifi.svg', name: 'Wi-Fi' },
                { icon: './Hotel Icon and Image/Icon/TV.svg', name: 'TV' },
                { icon: './Hotel Icon and Image/Icon/call.svg', name: 'Room Service' },
                { icon: './Hotel Icon and Image/Icon/Office area.svg', name: 'Work Area' },
            ],
            roomImage: [
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.161519.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.156801.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.155661.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.157604.jpeg'
            ]
        },
        family: {
            title: 'Royal Executive',
            price: '₹4000/-',
            description: 'The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Instagram...',
            facilities: [
                { icon: './Hotel Icon and Image/Icon/Wifi.svg', name: 'Wi-Fi' },
                { icon: './Hotel Icon and Image/Icon/TV.svg', name: 'TV' },
                { icon: './Hotel Icon and Image/Icon/call.svg', name: 'Room Service' },
                { icon: './Hotel Icon and Image/Icon/Office area.svg', name: 'Work Area' },
            ],
            roomImage: [
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.102751.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.103991.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.104671.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.107479.jpeg'
            ]
        },
        studio: {
            title: 'Royal Suite Room',
            price: '₹5000/-',
            description: 'The way we travel and move has changed in the last few years. We no longer want the typical photo that all our contacts post on Instagram...',
            facilities: [
                { icon: './Hotel Icon and Image/Icon/Wifi.svg', name: 'Wi-Fi' },
                { icon: './Hotel Icon and Image/Icon/TV.svg', name: 'TV' },
                { icon: './Hotel Icon and Image/Icon/call.svg', name: 'Room Service' },
                { icon: './Hotel Icon and Image/Icon/Office area.svg', name: 'Work Area' },
            ],
            roomImage: [
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.572553.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.573523.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.575807.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.5764.jpeg'
            ]
        }
    };

    let currentImageIndex = 0;
    let slideInterval;

    function updateRoom(roomType) {
        const data = roomData[roomType];
        roomTitle.textContent = data.title;
        roomPrice.textContent = data.price;
        roomDescription.textContent = data.description;

        imageGallery.innerHTML = '';
        thumbnails.innerHTML = '';

        const mainImage = document.createElement('img');
        mainImage.src = data.roomImage[currentImageIndex];
        mainImage.alt = data.title;
        mainImage.classList.add('w-full', 'h-full', 'object-cover', 'transition-opacity', 'duration-1000');
        mainImage.style.opacity = 0;
        imageGallery.appendChild(mainImage);

        setTimeout(() => {
            mainImage.style.opacity = 1;
        }, 100);

        data.roomImage.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = `${data.title} thumbnail ${index + 1}`;
            thumbnail.classList.add('w-[100px]', 'h-[50px]', 'cursor-pointer', 'rounded-[10px]', 'transition-opacity', 'duration-300');
            thumbnail.style.opacity = index === currentImageIndex ? 0.5 : 1;
            thumbnail.addEventListener('click', () => {
                clearInterval(slideInterval);
                currentImageIndex = index;
                mainImage.src = imgSrc;
                mainImage.style.opacity = 0;
                setTimeout(() => {
                    mainImage.style.opacity = 1;
                }, 100);

                updateThumbnails(index);

                startAutoSlide(data);
            });
            thumbnails.appendChild(thumbnail);
        });

        clearInterval(slideInterval);
        startAutoSlide(data);
    }

    function startAutoSlide(data) {
        slideInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % data.roomImage.length;
            const mainImage = imageGallery.querySelector('img');
            mainImage.style.opacity = 0;
            setTimeout(() => {
                mainImage.src = data.roomImage[currentImageIndex];
                mainImage.style.opacity = 1;

                updateThumbnails(currentImageIndex);

            }, 100);
        }, 3000);
    }

    function updateThumbnails(activeIndex) {
        const thumbnailsList = document.querySelectorAll('#thumbnails img');
        thumbnailsList.forEach((thumb, idx) => {
            thumb.style.opacity = idx === activeIndex ? 0.5 : 1;
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const roomType = button.id;
            currentImageIndex = 0;
            updateRoom(roomType);
        });
    });

    const defaultRoomType = 'deluxe';
    document.getElementById(defaultRoomType).click();

    // Modal popup functionality
    function openModal(category) {
        const modal = document.getElementById('myModal');
        const modalImage = document.getElementById('modalImage');
        const modalImages = {
            'Entrance': [
                './Hotel Icon and Image/Image/Entrance/ImportedPhoto.743592251.86915.jpeg',
                './Hotel Icon and Image/Image/Entrance/ImportedPhoto.743592251.867407.jpeg',
                './Hotel Icon and Image/Image/Entrance/ImportedPhoto.743592251.868479.jpeg',
                './Hotel Icon and Image/Image/Entrance/ImportedPhoto.743592251.869765.jpeg'
            ],
            'Rooms': [
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.572553.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.573523.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.575807.jpeg',
                './Hotel Icon and Image/Image/Suite/ImportedPhoto.743583472.5764.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.161519.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.156801.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.155661.jpeg',
                './Hotel Icon and Image/Image/Royal Gold/ImportedPhoto.743590147.157604.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.102751.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.103991.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.104671.jpeg',
                './Hotel Icon and Image/Image/Executive/ImportedPhoto.743583802.107479.jpeg'
            ],
            'Dining': [
                './Hotel Icon and Image/Image/Dining/ImportedPhoto.743592264.733687.jpeg',
                './Hotel Icon and Image/Image/Dining/ImportedPhoto.743592264.735286.jpeg'
            ]
        };

        const images = modalImages[category] || [];
        if (images.length === 0) return;

        modal.classList.remove('hidden');
        let modalImageIndex = 0;

        function showImage(index) {
            modalImage.classList.add('fade-out');
            setTimeout(() => {
                modalImage.src = images[index];
                modalImage.classList.remove('fade-out');
            }, 500); // Match this duration with your CSS transition duration
        }

        function showNextImage() {
            modalImageIndex = (modalImageIndex + 1) % images.length;
            showImage(modalImageIndex);
        }

        function showPrevImage() {
            modalImageIndex = (modalImageIndex - 1 + images.length) % images.length;
            showImage(modalImageIndex);
        }

        document.getElementById('nextImage').removeEventListener('click', showNextImage);
        document.getElementById('prevImage').removeEventListener('click', showPrevImage);
        document.querySelector('.close-modal').removeEventListener('click', closeModal);

        document.getElementById('nextImage').addEventListener('click', showNextImage);
        document.getElementById('prevImage').addEventListener('click', showPrevImage);
        document.querySelector('.close-modal').addEventListener('click', closeModal);

        function closeModal() {
            modal.classList.add('hidden');
            modalImage.src = ''; // Clear the image src
        }

        showImage(modalImageIndex);
    }

    document.querySelectorAll('.relative.cursor-pointer').forEach(item => {
        item.addEventListener('click', function () {
            const category = this.querySelector('p').textContent;
            openModal(category);
        });
    });

});

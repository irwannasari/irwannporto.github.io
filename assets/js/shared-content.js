
// Function to update shared content
function updateSharedContent(selector, title, subtitle, description, link, linkText) {
  // Get the shared content container
  const sharedContent = document.querySelector(selector);

  // Update the text content and links
  sharedContent.querySelector('.subtitle-xs').innerHTML = subtitle;
  sharedContent.querySelector('.fw-bolder').textContent = title;
  sharedContent.querySelector('.text-muted').textContent = description;
  sharedContent.querySelector('.link-body').href = link;
  sharedContent.querySelector('.link-body').textContent = linkText;
}

// Call the function to update shared content
updateSharedContent('.shared-content',
                  'Graphic design with mockup references',
                  `<span class='me-2'>DESIGN</span> &middot; <span class='ms-2'>MOCKUP</span>`,
                  'Designing with mockups simplifies visualizing the final product, helping customers easily known the outcome of the packaging and for the further refrences.',
                  './work-single-1.html',
                  'Browse Our Design Mockup Collection');

// Call the function to update shared content 2
updateSharedContent('.shared-content-2',
                  'Interactive design motion display',
                  `<span class='me-2'>DESIGN</span> &middot; <span class='ms-2'>MOTION GRAPHIC</span>`,
                  'Motion graphics inject emotion and intrigue, enriching web content, promotional materials, and website advertisements with dynamic visual storytelling.',
                  './work-single-2.html',
                  'Browse Our Motion Graphic Collection');

updateSharedContent('.shared-content-3',
                  'Versatile video editing for all purposes',
                  `<span class='me-2'>VIDEO</span> &middot; <span class='ms-2'>Editing Cropping Effect</span>`,
                  'Nowdays, video has proven to be a powerful method for engaging more customers and scaling up businesses. For example, content creators use videos to reach a wider audience. However, a good video requires great editing to truly stand out.',
                  './work-single-3.html',
                  'Browse Our Video Editing Example');

updateSharedContent('.shared-content-4',
                  'Graphic Design for Printing & Advertising purposes',
                  `<span class='me-2'>GRAPHIC</span> &middot; <span class='ms-2'>DESIGN</span>`,
                  'Featuring a versatile array of projects, from captivating Stickers & vibrant Flyers to eye-catching Banners, innovative Packaging, and beyond.',
                  './work-single-4.html',
                  'Browse Our Graphic Design Collection');

updateSharedContent('.shared-content-5',
                  'Dynamic Frontend Development for Every Need',
                  `<span class='me-2'>WEBSITE</span> &middot; <span class='ms-2'>FRONTEND</span>`,
                  'In this digital era, websites are crucial reflections of business professionalism. They are powerful tools for gathering valuable data through user interactions and seamlessly integrate with smartphone applications. With a range of functionalities, from data collection to supporting mobile apps, building a robust website is essential. It\'s the cornerstone of modern business, facilitating seamless interactions and driving growth.',
                  './work-single-5.html',
                  'Browse Our Website Example');



//--------------FOOTER SHARED CONTENT------------//
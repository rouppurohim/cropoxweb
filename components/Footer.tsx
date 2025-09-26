import React from 'react';

// Social media icons as components for clarity and to keep the file self-contained
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.7c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.7h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 5.035 3.734 9.197 8.5 9.875v-7.001h-2.5v-2.874h2.5v-2.19c0-2.48 1.46-3.868 3.766-3.868 1.087 0 2.244.195 2.244.195v2.483h-1.29c-1.21 0-1.595.72-1.595 1.54v1.84h2.77l-.444 2.874h-2.326v7.001c4.766-.678 8.5-4.84 8.5-9.875z" />
    </svg>
);

const XIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-3xl font-bold">Cropox</div>
            
            <p className="flex items-center space-x-2 text-gray-300 text-sm">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAD1BMVEX/AAAAAP//zAD/zgD///8AmdOnAAAAA3RSTlMA//+A83B4AAAAtUlEQVR4nO3QMQGAMAAAsWj+66kCAQI9P5PFTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgB4AUMAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGABwAEAAAQABgAABgAABgAABgAABgAABgACBvg/gAATsAOkOAAAAAElFTkSuQmCC" alt="Indonesian Flag" className="h-4 w-auto rounded-sm" />
              <span>Proudly Made by @nutaniman With ❤️</span>
            </p>

            <p className="text-sm text-gray-400">© 2025 Cropox™. All Rights Reserved.</p>

            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
              <a href="#" aria-label="X" className="text-gray-400 hover:text-white transition-colors"><XIcon /></a>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blogs</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

// Social media icons as components for clarity and to keep the file self-contained
const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.7c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.7h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.782-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
);

const ThreadsIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.28 15.72c-1.39 0-2.58-0.6-3.57-1.82-0.99-1.23-1.48-2.83-1.48-4.8s0.49-3.57 1.48-4.8c0.99-1.23 2.18-1.82 3.57-1.82 1.63 0 2.94 0.74 3.91 2.22 0.97 1.48 1.45 3.32 1.45 5.51 0 2.19-0.48 4.03-1.45 5.51-0.97 1.48-2.28 2.22-3.91 2.22zm0-2.55c0.75 0 1.38-0.34 1.88-1.03s0.75-1.57 0.75-2.64-0.25-1.95-0.75-2.64-1.13-1.03-1.88-1.03-1.38 0.34-1.88 1.03-0.75 1.57-0.75 2.64 0.25 1.95 0.75 2.64 1.13 1.03 1.88 1.03z" />
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
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAD1BMVEX/AAAAAP//zAD/zgD///8AmdOnAAAAA3RSTlMA//+A83B4AAAAtUlEQVR4nO3QMQGAMAAAsWj+66kCAQI9P5PFTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALgB4AUMAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGAAAGABwAEAAAQABgAABgAABgAABgAABgAABgACBvg/gAATsAOkOAAAAAElFTSuQmCC" alt="Indonesian Flag" className="h-4 w-auto rounded-sm" />
              <span>Proudly Made by @nutaniman With ❤️</span>
            </p>

            <p className="text-sm text-gray-400">© 2025 Cropox™. All Rights Reserved.</p>

            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
              <a href="#" aria-label="Threads" className="text-gray-400 hover:text-white transition-colors"><ThreadsIcon /></a>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blogs</a></li>
              {/* Fix: Complete truncated file content and add missing links */}
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Fix: Add missing default export
export default Footer;

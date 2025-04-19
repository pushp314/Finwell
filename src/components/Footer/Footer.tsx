import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <p className="text-gray-700 font-medium mb-4">Follow Us</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" alt="X (Twitter)" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_icon.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/TikTok_logo.svg" alt="TikTok" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">Discover our app</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Discover our products</a>
          </div>
          <a href="#" className="text-gray-600 hover:text-gray-800">Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
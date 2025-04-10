export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo & Help Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img src="https://cdn-imgix-open.headout.com/logo/svg/Headout_logo_purps.svg?w=229.5&h=36&fm=svg&crop=faces&auto=compress%2Cformat&fit=min" alt="Headout Logo" className="h-6" />
                        <span className="text-xl font-semibold text-purple-600"></span>
                    </div>
                    <p className="text-sm font-semibold">GET HELP 24/7</p>
                    <ul className="space-y-2 mt-2 text-sm">
                        <li className="flex items-center gap-2"><span>🛈</span> Help center</li>
                        <li className="flex items-center gap-2"><span>💬</span> Chat with us</li>
                        <li className="flex items-center gap-2"><span>📞</span> Call +13478970100</li>
                        <li className="flex items-center gap-2"><span>📧</span> support@headout.com</li>
                    </ul>
                    <div className="mt-4">
                        <img src="https://cdn-imgix-open.headout.com/headout-connect/app_download.svg?w=126&h=126&fm=svg&crop=faces&auto=compress%2Cformat&fit=min" alt="QR Code" className="w-20 h-20 inline-block" />
                        <p className="text-sm mt-2">Download the Headout app</p>
                    </div>
                </div>

                {/* Cities */}
                <div>
                    <p className="text-sm font-semibold mb-3">CITIES</p>
                    <ul className="space-y-2 text-sm">
                        <li className="text-purple-600 font-medium">New York</li>
                        <li>Las Vegas</li>
                        <li>Rome</li>
                        <li>Paris</li>
                        <li>London</li>
                        <li>Dubai</li>
                        <li>Barcelona</li>
                        <li>+169 more</li>
                    </ul>
                </div>

                {/* Company Info */}
                <div>
                    <p className="text-sm font-semibold mb-3">HEADOUT</p>
                    <ul className="space-y-2 text-sm">
                        <li>Our story</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Company blog</li>
                        <li>Travel blog</li>
                    </ul>
                </div>

                {/* Partners + Payment Icons */}
                <div>
                    <p className="text-sm font-semibold mb-3">PARTNERS</p>
                    <ul className="space-y-2 text-sm">
                        <li>Experience providers</li>
                        <li>Affiliates</li>
                        <li>Creators & influencers</li>
                    </ul>
                    <p className="text-sm font-semibold mt-5">WE ACCEPT</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {/* Visa */}
                        <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <text x="0" y="15" fontSize="15" fontWeight="bold" fill="#1a1f71">VISA</text>
                        </svg>

                        {/* MasterCard */}
                        <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="10" r="8" fill="#eb001b" />
                            <circle cx="25" cy="10" r="8" fill="#f79e1b" />
                            <text x="35" y="15" fontSize="8" fill="black" fontWeight="bold">MasterCard</text>
                        </svg>

                        {/* Amex */}
                        <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="20" fill="#2e77bc" />
                            <text x="5" y="14" fontSize="10" fill="white" fontWeight="bold">AMERICAN EXPRESS</text>
                        </svg>

                        {/* PayPal */}
                        <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#003087">Pay</text>
                            <text x="23" y="15" fontSize="12" fontWeight="bold" fill="#009cde">Pal</text>
                        </svg>

                        {/* Apple Pay */}
                        <svg className="h-6 w-auto" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="black"> Pay</text>
                        </svg>

                        {/* Google Pay */}
                        <svg className="h-6 w-auto" viewBox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#4285F4">G</text>
                            <text x="10" y="15" fontSize="12" fontWeight="bold" fill="#34A853">o</text>
                            <text x="18" y="15" fontSize="12" fontWeight="bold" fill="#FBBC05">o</text>
                            <text x="26" y="15" fontSize="12" fontWeight="bold" fill="#EA4335">g</text>
                            <text x="34" y="15" fontSize="12" fontWeight="bold" fill="#4285F4">le</text>
                            <text x="45" y="15" fontSize="12" fontWeight="bold" fill="black"> Pay</text>
                        </svg>
                    </div>

                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t mt-10 pt-6 text-xs text-gray-500 px-4 lg:px-24">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    {/* Left: Address Info */}
    <p className="text-center md:text-left">
      © 2014–2025 Headout Inc, 82 Nassau St #60351 New York, NY 10038
    </p>

    {/* Center: Policy Links */}
    <div className="flex gap-4 justify-center">
      <a href="#" className="hover:text-black">Privacy policy</a>
      <a href="#" className="hover:text-black">Terms of Usage</a>
    </div>

    {/* Right: Social Icons */}
    <div className="flex gap-3 justify-center md:justify-end">
  {/* Facebook */}
  <a href="#" aria-label="Facebook">
    <svg className="w-4 h-4 hover:fill-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.5-3.89 3.8-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"/>
    </svg>
  </a>

  {/* Twitter */}
  <a href="#" aria-label="Twitter">
    <svg className="w-4 h-4 hover:fill-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.47 8.47 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.26 3.85A11.96 11.96 0 0 1 3.16 4.57a4.23 4.23 0 0 0 1.31 5.63 4.2 4.2 0 0 1-1.91-.53v.05a4.23 4.23 0 0 0 3.39 4.14 4.3 4.3 0 0 1-1.9.07 4.23 4.23 0 0 0 3.95 2.93A8.49 8.49 0 0 1 2 19.54a12 12 0 0 0 6.29 1.84c7.55 0 11.69-6.26 11.69-11.7 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" aria-label="Instagram">
    <svg className="w-4 h-4 hover:fill-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.13 2 2 4.13 2 7.75v8.5C2 19.87 4.13 22 7.75 22h8.5C19.87 22 22 19.87 22 16.25v-8.5C22 4.13 19.87 2 16.25 2h-8.5zM12 8.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8zm5.4-.3a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM12 9.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" aria-label="LinkedIn">
    <svg className="w-4 h-4 hover:fill-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.04 8.14H4.9V24H.04V8.14zM7.54 8.14h4.66v2.16h.06c.65-1.23 2.25-2.53 4.63-2.53 4.95 0 5.86 3.25 5.86 7.48V24h-4.9v-7.67c0-1.83-.03-4.18-2.55-4.18-2.55 0-2.94 1.99-2.94 4.05V24h-4.86V8.14z"/>
    </svg>
  </a>

  {/* YouTube */}
  <a href="#" aria-label="YouTube">
    <svg className="w-4 h-4 hover:fill-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 15l5.19-3L10 9v6zm12-3c0-2.21-.18-3.91-.49-5.21-.27-1.14-1.14-2.01-2.28-2.28C17.91 4.18 16.21 4 14 4H10C7.79 4 6.09 4.18 4.79 4.49c-1.14.27-2.01 1.14-2.28 2.28C2.18 7.09 2 8.79 2 11s.18 3.91.49 5.21c.27 1.14 1.14 2.01 2.28 2.28 1.3.31 3 .49 5.21.49h4c2.21 0 3.91-.18 5.21-.49 1.14-.27 2.01-1.14 2.28-2.28.31-1.3.49-3 .49-5.21z"/>
    </svg>
  </a>
</div>

  </div>
</div>

            {/* </div> */}
        </footer>
    );
}

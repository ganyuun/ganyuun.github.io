customElements.define(
    "nav-header",
    class NavHeader extends HTMLElement {
        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: "open" });
            const customHeader = document.createElement("nav");

            customHeader.classList.add("navbar");

            customHeader.innerHTML = `
                <style>
                    /* hide navbar dropdown on PC */
                    @media only screen and (min-width: 768px) {
                        .dropdown {display: none;}
                    }
        
                    /* hide navbar links on tablet, show dropdown */
                    @media only screen and (max-width: 767px) {
                        .nav-links {display: none;}
                    }
        
                    /* hide navbar links on phone, show dropdown */
                    @media only screen and (max-width: 600px) {
                        .nav-links {display: none;}
                    }
        
                    nav {
                        z-index: 999;
                        top: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: row;
                        background-color: #151617;
                        justify-content: space-between;
                        position: fixed;
                        font-weight: bold;
                        width: 100%;
                        height: 90px;
                    }
        
                    nav ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
        
                    nav li {
                        display: inline-block;
                    }
        
                    .nav-logo {
                        padding-left: 25px;
                    }
        
                    .nav-links {
                        padding-top: 1.7em;
                    }
        
                    .nav-links a {
                        text-align: center;
                        text-decoration: none;
                        font-size: 30px;
                        padding-right: 30px;
                        color: #f06e4d;
                    }
        
                    .nav-links a:hover {color: #b75842;}
        
                    /* The dropdown container */
                    .dropdown {
                        float: left;
                        overflow: hidden;
                    }
        
                    /* Dropdown button */
                    .dropdown .dropbtn {
                        font-size: 16px;
                        border: none;
                        outline: none;
                        color: white;
                        padding: 14px 16px;
                        background-color: inherit;
                        font-family: inherit; /* Important for vertical align on mobile phones */
                        margin: 0; /* Important for vertical align on mobile phones */
                    }
        
                    /* Add a red background color to navbar links on hover */
                    .dropdown:hover, .dropbtn {
                        background-color: red;
                    }
        
                    /* Dropdown content (hidden by default) */
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: #f9f9f9;
                        min-width: 160px;
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                        z-index: 1;
                    }
        
                    /* Links inside the dropdown */
                    .dropdown-content a {
                        float: none;
                        color: black;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;
                        text-align: left;
                    }
        
                    /* Add a grey background color to dropdown links on hover */
                    .dropdown-content a:hover {
                        background-color: #ddd;
                    }
        
                    /* Show the dropdown menu on hover */
                    .dropdown:hover .dropdown-content {
                        display: block;
                    }
                </style>
        
                <div class="nav-logo">
                    <ul>
                        <li class="logo">
                            <a href="/index.html">
                                <img src="/assets/logo horizontal.svg" alt="Zoroaku logo" width="100" height="100">
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="nav-links">
                    <ul>
                        <li class="nav-item"><a href="/about.html">About</a></li>
                        <li class="nav-item"><a href="/tos.html">TOS</a></li>
                        <li class="nav-item"><a href="/prices.html">Prices</a></li>
                        <li class="nav-item"><a href="/gallery.html">Gallery</a></li>
                    </ul>
                </div>
    
                <div class="dropdown">
                    <button class="dropbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" fill="#F4E4DC">
                            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>
    
                    <div class="dropdown-content">
                        <a href="/about.html">About</a>
                        <a href="/tos.html">TOS</a>
                        <a href="/prices.html">Prices</a>
                        <a href="/gallery.html">Gallery</a>
                    </div>
                </div>
            `

            shadowRoot.appendChild(customHeader);
        }
    },
);

customElements.define(
    "custom-footer",
    class FooterTemplate extends HTMLElement {
        constructor() {
            super();

            const shadowRoot = this.attachShadow({ mode: "open" });
            const customFooter = document.createElement("footer");

            customFooter.classList.add("navbar");

            customFooter.innerHTML = `
                <style>
                    /* add gap between footer contents on PC */
                    @media only screen and (min-width: 768px) {
                        .footer-container {gap: 10%;}
                        .footer-container ul {margin-top: 0;}
                        .labels {padding-bottom: 10px;}
                    }
        
                    /* decrease gap between footer contents on tablet, increase font size & padding */
                    @media only screen and (max-width: 767px) {
                        .footer-container {gap: 10%;}
        
                        .footer-container {
                            gap: 5%;
                            font-size: 20px;
                        }
                        .labels {font-size: 24px;}
                        .footer-container ul {margin-top: 0;}
                        .footer-container li:not(.labels) {
                            margin: 5px;
                            padding: 4px;
                        }
                    }
        
                    /* decrease gap on phone, hide footer logo */
                    @media only screen and (max-width: 600px) {
                        .footer-container {
                            gap: 5%;
                            font-size: 20px;
                        }
                        .footer-container li:not(.labels) {
                            padding: 4px;
                        }
                        .footer-logo {
                            display: none;
                            margin: 0;
                            padding: 0;
                        }
                        .pages ul {padding-left: 0;}
                    }
        
                    li:not(#comms) {
                        list-style-type: none;
                    }
        
                    .footer-container {
                        padding: 50px;
                        background-color: #151617;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
        
                    .footer-container a {
                        text-decoration: none;
                        color: #f06e4d;
                    }
                    .footer-container a:hover {color: #b75842;}
                </style>
    
                <footer>
                    <div class="footer-container">
                        <div class="footer-logo">
                            <img src="/assets/logo.svg" alt="Zoroaku logo" style="width: 40%; height:auto; min-width:80px; min-height:80px;">
                        </div>
        
                        <div class="pages">
                            <ul>
                                <li class="labels"><strong>Other Pages</strong></li>
                                <li class="nav-item"><a href="/index.html">Home</a></li>
                                <li><a href="/about.html">About</a></li>
                                <li><a href="/tos.html">TOS</a></li>
                                <li><a href="/prices.html">Prices</a></li>
                                <li><a href="/gallery.html">Gallery</a></li>
                            </ul>
                        </div>
        
                        <div class="contact">
                            <ul>
                                <li class="labels"><strong>Contact</strong></li>
                                <li><a href="mailto:zoroaku.art@gmail.com">Email</a></li>
                                <li><a href="https://discord.com/users/776824714517413939">Discord</a></li>
                            </ul>
                        </div>
        
                        <div class="social-links">
                            <ul>
                                <li class="labels"><strong>Socials</strong></li>
                                <li><a href="https://bsky.app/profile/zoroaku.art">Bluesky</a></li>
                                <li><a href="https://x.com/zoro_aku">Twitter</a></li>
                                <li><a href="https://ko-fi.com/zoro_aku">Ko-fi</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            `

            shadowRoot.appendChild(customFooter);
        }
    },
);
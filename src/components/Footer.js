import React from 'react'
import facebook from '../images/common/facebook.png'
import instagram from '../images/common/instagram.png'
import twitter from '../images/common/twitter.png'

function Footer() {
    return (
        <footer>
      <div className="footer-text">Never Out of Style</div>
      <div className="footer-links">
        <button>
          <img
            className="footer-image"
            src={facebook}
            alt="Facebook"
          />
        </button>
        <button>
          <img
            className="footer-image"
            src={instagram}
            alt="Instagram"
          />
        </button>
        <button>
          <img
            className="footer-image"
            src={twitter}
            alt="Twitter"
          />
        </button>
      </div>
    </footer>
    )
}

export default Footer
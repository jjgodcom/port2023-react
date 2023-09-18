import React from "react";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>webstoryboy</div>
                    <div>@webs</div>
                </h2>
                <div className="footer__right">
                    &copy; 2023 webstoryboy<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import port01 from "../assets/img/port01.jpg";
import port02 from "../assets/img/port02.jpg";
import port03 from "../assets/img/port03.jpg";
import port04 from "../assets/img/port04.jpg";

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },
    {
        title: "portfolio",
        url: "#port"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "port developer",
    desc: ["talent is", "found at the end of the", "effort"]
}

export const skillText = [
    {
        title: "개발에 빠져들다.",
        desc: "나는 아무것도 할 줄 모르던 상태에서 처음으로 개발에 도전하게 되었다. 그동안은 항상 사용만 해왔지만, 이제는 내 손으로 화면을 구현할 때마다 흥미를 느낀다. 앞으로도 계속해서 개발을 하면서 성장해가고, 나를 위한 블로그를 만들어보는 등 새로운 도전을 하며 살고 싶다. 개발은 끊임없이 발전하고 변화하기 때문에, 새로운 기술과 도구를 익히며 스스로를 계속해서 발전시킬 것이다."
    },
    {
        title: "열심히 할수록 기회는 따른다.",
        desc: "운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하면 된다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다."
    },
    {
        title: "나에게 정직하다.",
        desc: "정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다."
    }
]

export const siteText = [
    {
        text: ["make", "site compliant with", "vue.js"],
        title: "뷰를 이용한 블로그 제작",
        code: "https://github.com/jjgodcom/vue-jjgodcom.com",
        view: "https://jjgodcom-vue.netlify.app/#/",
        info: [
            "site coding",
            "",
            "use stack : HTML5/CSS3, Webpack, vue",
        ],
    },
    {
        text: ["make", "site compliant with", "react.js"],
        title: "리액트를 이용한 포트폴리오 제작",
        code: "https://github.com/jjgodcom/react-jjgodcom.com",
        view: "https://jjgodcom-react.netlify.app",
        info: [
            "site coding",
            "",
            "use stack : HTML5/CSS3, Webpack, react",
        ],
    },
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "HTML를 이용한 사이트 제작",
        code: "https://github.com/jjgodcom/jjgodcom.com",
        view: "https://jjgodcom-ftp.netlify.app/",
        info: [
            "site coding",
            "",
            "use stack : HTML5/CSS3, Webpack",
        ],
    },
    {
        text: ["make", "site compliant with", "notion"],
        title: "Notion을 이용한 포트폴리오 제작",
        code: "https://ten-wax-7f1.notion.site/a86890c2a3e34b9d829b564e275dc678?pvs=4",
        view: "https://ten-wax-7f1.notion.site/a86890c2a3e34b9d829b564e275dc678?pvs=4",
        info: [
            "",
            "",
            "use stack : notion",
        ],
    }
];

export const portText = [
    {
        num: "01",
        title: "jjgodcom 의 블로그 - Vue.js",
        desc: "기존의 블로그를 완전히 새로운 모습으로 리뉴얼하였습니다. 이 새로운 웹사이트는 Vue.js를 활용하여 제작한 개인 포트폴리오 사이트로, 제 개인적인 작업물과 개발 지식을 체계적으로 정리하고 공유하는 공간입니다.",
        img: port01,
        code: "https://github.com/jjgodcom/vue-jjgodcom.com",
        view: "https://jjgodcom-vue.netlify.app/#/",
        name: "jjgodcom 의 블로그",
    },
    {
        num: "02",
        title: "jjgodcom 의 포트폴리오 - React",
        desc: "저의 최신 포트폴리오 웹사이트입니다. 이 웹사이트는 React를 활용하여 제작되었으며, 다양한 스크롤 애니매이션을 위해 을 사용하였습니다. 뿐만 아니라, 반응형 디자인을 적용하여 모바일 및 데스크톱 사용자 모두에게 최적화된 환경을 제공합니다.",
        img: port02,
        code: "https://github.com/jjgodcom/react-jjgodcom.com",
        view: "https://jjgodcom-react.netlify.app/#/",
        name: "jjgodcom 의 포트폴리오",
    },
    {
        num: "03",
        title: "jjgodcom 의 포트폴리오 - Basic",
        desc: "제가 처음 제작한 블로그 입니다. 이 블로그는 기본적인 HTML/CSS를 활용하여 제작한 개인 블로그 사이트로, 제 개인적인 작업물과 개발 지식을 체계적으로 정리하고 공유하는 공간입니다",
        img: port03,
        code: "https://github.com/jjgodcom/jjgodcom.com",
        view: "https://jjgodcom-ftp.netlify.app/#/",
        name: "jjgodcom 의 블로그",
    },
    {
        num: "04",
        title: "jjgodcom 의 포트폴리오 - notion",
        desc: "이 웹사이트는 포트폴리오를 한눈에 보기 쉽게 구성하기 위해 Notion을 활용하여 제작되었습니다. Notion의 강력한 기능과 다양한 커스터마이징 가능성을 활용하여, 제 프로젝트와 개발 지식을 체계적으로 정리하고 시각적으로 효과적으로 표현하였습니다.",
        img: port04,
        code: "",
        view: "https://ten-wax-7f1.notion.site/a86890c2a3e34b9d829b564e275dc678?pvs=4",
        name: "jjgodcom 의 notion 포트폴리오",
    }
];

export const contactText = [
    {
        link: "https://open.kakao.com/o/sY85ECMe",
        title: "KAKAO : flvns",
    },
    {
        link: "mailto:jjgodcom1@gmail.com",
        title: "mail : jjgodcom1@gmail.com",
    },
];

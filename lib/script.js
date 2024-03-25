"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
;
"use strict";
var navigationLinks = [{
  name: 'about',
  url: '#about'
}, {
  name: 'projects',
  url: '#projects'
}, {
  name: 'contact',
  url: '#contact'
}, {
  name: 'gitHub',
  url: 'https://github.com/jesseagauthier',
  mobile: 'hidden'
}, {
  name: 'codePen',
  url: 'https://codepen.io/jessegauthier1994',
  mobile: 'hidden'
}];
var portfolioItems = [{
  title: 'The County Cooperage',
  type: 'Shopify',
  image: '/assets/thecountycooperage.png',
  disc: "The creation of a bespoke Shopify theme involved the skillful application of Liquid, Shopify's proprietary templated language, alongside JavaScript, CSS, and Tailwind.css. This approach ensured a highly customized, responsive, and visually appealing online store, tailored to meet specific business needs and enhance the user experience.",
  link: 'https://www.thecountycooperage.ca',
  tags: ['Custom Theme', 'Shopify', 'Design']
}, {
  title: 'Real Adulting Home Page',
  type: 'Web Development',
  image: './assets/rd-home.png',
  disc: 'Between student loan debts, work demands, feeling unsure if we should invest for retirement while the world is burning, the pressures of balancing identifying red flags with the fact that our eggs have a shelf life, let alone remembering to keep toilet paper stocked in our house—the responsibilities of adult life can often feel overwhelming, stressful, and chaotic. Making you feel like you’re just barely keeping it together as you go along. Did they even teach us how to be an adult in high school? Why are there so many blogs on how to budget? How do taxes even work?',
  link: 'https://realadulting101.ca/',
  tags: ['Php', 'WordPress', 'Custom Theme']
}, {
  title: 'Up Media Home Page',
  type: 'ui',
  image: './assets/upmedia.png',
  disc: 'AWARD WINNING VANCOUVER VIDEO PRODUCTION COMPANY',
  link: 'https://upmedia.video/',
  tags: ['Php', 'WordPress', 'Elementor']
}, {
  title: 'W Flowers Contact Page',
  type: 'ui',
  image: '/assets/w-flowers.png',
  disc: 'W Flowers is a local business in Ottawa that specializes in floral arrangements and bouquets for various occasions. We offer high quality and affordable European design options that are beautiful, elegant, and stylish. ',
  link: 'https://www.figma.com/file/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?type=design&node-id=112%3A26&mode=design&t=z1Xi3jZUZJz3Qoop-1',
  tags: ['Figma', 'Mockup', 'Collaboration']
}, {
  title: 'Garbage Collection Ottawa',
  type: 'ui',
  image: '/assets/garbagecollectionottawa.png',
  disc: 'Our purpose is to design an app that addresses the concerns surrounding variable garbage collection times in Ottawa, reducing the risk of missed pickups and the accumulation of garbage left out for extended periods. By providing certainty in collection schedules, it helps prevent the unhealthy environment caused by uncollected garbage and the potential for it to be blown around during inclement weather, benefiting both people and animals.',
  link: 'https://www.figma.com/file/YlbPOHAJ74GZAgk56PK5p2/Portfolio-Pieces?type=design&node-id=101%3A26&mode=design&t=GomxTJao7DabgkWm-1',
  tags: ['ui', 'Figma', 'Mockup']
}, {
  title: 'Werrv',
  type: 'ui',
  image: '/assets/werrv_homepage.png',
  disc: '',
  link: '',
  tags: ['ui', 'Figma', 'Mockup']
}];
var skills = [{
  name: 'javaScript',
  image: '/assets/javascript.svg'
}, {
  name: 'css',
  image: '/assets/css-3.svg'
}, {
  name: 'nodeJs',
  image: '/assets/nodejs.svg'
}, {
  name: 'react',
  image: '/assets/react.svg'
}, {
  name: 'php',
  image: '/assets/php.svg'
}, {
  name: 'wordpress',
  image: '/assets/wordpress.svg'
}, {
  name: 'shopify',
  image: '/assets/shopify.svg'
}, {
  name: 'Vue',
  image: '/assets/vue.svg'
}, {
  name: 'tailwind',
  image: '/assets/tailwindcss.svg'
}];
var experiences = {
  id: 'row-3-di',
  title: 'Experience',
  experiences: [{
    jobTitle: 'Junior Developer',
    companyName: 'The County Cooperage',
    period: '2023 - 2024',
    responsibilities: ['Collaborated with teams to integrate dynamic content using Liquid, HTML, CSS, and JavaScript.', 'Customized Shopify themes to ensure a cohesive online presence', 'Implemented responsive design for multi-device compatibility.', 'Estimated project scope and participated in design discussions and code', 'Stayed updated with design trends and web technologies.', 'Assisted with the maintenance and upkeep of front-end applications.']
  }, {
    jobTitle: 'Front End Developer',
    companyName: 'JesseGauthier.dev',
    period: '2021 - present',
    responsibilities: ['Developed highly responsive and scalable web applications for various industries and client environments', 'Attracted users to websites with professional, user-friendly designs and clean code.', 'Analyzed technical requirements to determine optimal solutions', 'Engaged with existing and prospective clients to foster new and repeat business', 'Devised social media plans to enhance digital marketing', 'Oversaw daily activities to facilitate smooth business operations']
  }]
};
var certifications = [{
  title: 'Responsive Web Design',
  organization: 'FreeCodeCamp',
  year: '2022',
  url: ''
}, {
  title: 'JavaScript',
  organization: 'HackerRank',
  year: '2023',
  url: 'https://www.hackerrank.com/certificates/4d1d4b06df95'
}];
function renderNavigation(navigationLinks) {
  var navigation = document.getElementById('navigation');
  var _iterator = _createForOfIteratorHelper(navigationLinks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      navigation.insertAdjacentHTML("beforeend", "\n        <li class=\"mx-2 p-2 h-fit ".concat(link.mobile, " md:block\"><a class=\"sub-heading-text text-lg font-medium hover-orange \" href=\"").concat(link.url, "\">").concat(link.name, "</a></li>"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
function renderProjects(portfolioItems) {
  var projects = document.getElementById('projects');
  var _iterator2 = _createForOfIteratorHelper(portfolioItems),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var project = _step2.value;
      projects.insertAdjacentHTML("beforeend", "\n            <div class=\"bg-white rounded p-1 border \">\n\t\t\t<a href=\"".concat(project.link, "\" target=\"_blank\" rel=\"noopener noreferrer\"><img src=\"").concat(project.image, "\"></a>\n\t\t\t\n\t\t\t</div>"));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function renderSkills(skills) {
  var skillsCtn = document.getElementById('skills_slides');
  var _iterator3 = _createForOfIteratorHelper(skills),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var skill = _step3.value;
      var skillContent = "<li class=\"flex justify-center items-center\" aria-label=\"Skill: ".concat(skill.name, "\"><img class=\"w-1/2 md:w-1/2\" src=\"").concat(skill.image, "\" alt=\"").concat(skill.name, "\"></li>");
      skillsCtn.insertAdjacentHTML('beforeend', skillContent);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  skillsCtn.classList.add("md:grid-cols-".concat(skills.length));
}
function rendersExperience(experiences) {
  var experienceContainer = document.getElementById(experiences.id);
  var template = [];
  var _iterator4 = _createForOfIteratorHelper(experiences.experiences),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var experience = _step4.value;
      var responsibilitiesList = '';
      var _iterator5 = _createForOfIteratorHelper(experience.responsibilities),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var responsibility = _step5.value;
          responsibilitiesList += "<li class=\"text\">".concat(responsibility, "</li>");
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      template.push("<div class=\"p-8 blue-bg gold-bg-hover mb-2 md:mb-0\">\n\t\t\t<h4 class=\"text-medium text-xl sub-heading-text\">\n\t\t\t\t".concat(experience.jobTitle, "\n\t\t\t</h4>\n\t\t\t<p class=\"text-light sub-heading-text\">").concat(experience.companyName, "</p>\n\t\t\t<p class=\"text\">").concat(experience.period, "</p>\n\t\t\t<ul class=\"p-3 list-disc\">\n\t\t\t\t").concat(responsibilitiesList, "\n\t\t\t</ul>\n\t\t</div>"));
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  experienceContainer.insertAdjacentHTML('beforeend', template.join(''));
}
function rendersCertifications(certifications) {
  var certificationsContainer = document.getElementById('row-4');
  var template = certifications.map(function (certification) {
    return "\n        <div class=\"basis-1/2 p-8 blue-bg gold-bg-hover hover:text-black mb-2 md:mb-0\">\n            ".concat(certification.url ? "<a rel=\"noopener\" href=\"".concat(certification.url, "\" target=\"_blank\">") : '', "\n                <h4 class=\"text-medium text-xl sub-heading-text\">").concat(certification.title, "</h4>\n                <p class=\"text-light sub-heading-text\">").concat(certification.organization, "</p>\n                <p class=\"text-light sub-heading-text\">").concat(certification.year, "</p>\n            ").concat(certification.url ? '</a>' : '', "\n        </div>\n    ");
  }).join('');
  certificationsContainer.innerHTML = "<h3>Certifications</h3><div class=\"md:flex gap-10 text-center\">".concat(template, "</div>");
}
function projectsSlider(portfolio) {
  var container = document.getElementById('projectsSlider');
  container.innerHTML = ''; // Clear existing content

  portfolio.forEach(function (item, index) {
    // Adjust IDs for navigation
    var slideId = "slide".concat(index + 1);
    var prevSlideId = index === 0 ? "slide".concat(portfolio.length) : "slide".concat(index);
    var nextSlideId = index === portfolio.length - 1 ? "slide1" : "slide".concat(index + 2);

    // Create slide HTML
    var slideHTML = "\n            <div id=\"".concat(slideId, "\" class=\"carousel-item relative w-screen\">\n                <div class=\"absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2\">\n                    <a href=\"#").concat(prevSlideId, "\" class=\"btn btn-circle\">\u276E</a>\n                    <a href=\"#").concat(nextSlideId, "\" class=\"btn btn-circle\">\u276F</a>\n                </div>\n                <div class=\"flex flex-row-reverse align-middle p-5 w-screen justify-start\">\n\t\t\t\t\t<div class=\"self-center px-5 text-center\">\n\t\t\t\t\t\t<h3 class=\"text-3xl\">").concat(item.title, "</h3>\n\t\t\t\t\t\t<p class=\"w-1/2  mx-auto mt-5\">").concat(item.disc, "</p>\n\t\t\t\t\t\t<a href=\"").concat(item.link, "\" class=\"project lightblue-hover  mx-auto mt-4 inline-block text-white p-3 sub-heading-text orange-bg\">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img src=\"").concat(item.image, "\" alt=\"").concat(item.title, "\" class=\"w-[500px]\">\n\t\t\t\t</div>\n            </div>\n        ");

    // Append the slide
    container.insertAdjacentHTML('beforeend', slideHTML);
  });
}
renderNavigation(navigationLinks);
renderSkills(skills);
rendersExperience(experiences);
renderProjects(portfolioItems);
rendersCertifications(certifications);
projectsSlider(portfolioItems);
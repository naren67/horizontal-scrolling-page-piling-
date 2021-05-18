$(document).ready(function() {
	$('.horizontal__container').pagepiling({
	    menu: null,
        direction: 'horizontal',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
//         menu: '.menu',
//         anchors: ['page1', 'page2', 'page3'],............things added to get anchor tag
        menu: '.menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
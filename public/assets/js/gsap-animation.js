import { gsap, ScrollTrigger, SplitText, Back} from 'gsap';
// import $ from 'jquery'
import { $, jQuery} from 'jquery'

gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/

// ** Multi Icon Box Hover Effect ** \\
var pbmit_multi_icon_box_hover_effect = function() {
	jQuery(".pbmit-multi-icon-box-hover-effect .pbmit-miconheading-style-1:nth-child(2), .pbmit-multi-icon-box-hover-effect .pbmit-service-style-3:nth-child(2)").eq(0).addClass('pbmit-mihbox-hover-active');
	jQuery(".pbmit-multi-icon-box-hover-effect .pbmit-miconheading-style-1, .pbmit-multi-icon-box-hover-effect .pbmit-service-style-3").mouseover(function() {
		var main_row = jQuery(this).closest('.pbmit-multi-icon-box-hover-effect');
		jQuery('.pbmit-miconheading-style-1, .pbmit-service-style-3', main_row).removeClass('pbmit-mihbox-hover-active');
		jQuery(this).addClass('pbmit-mihbox-hover-active');
	}).mouseout(function() {
		var main_row = jQuery(this).closest('.pbmit-multi-icon-box-hover-effect');
		jQuery('.pbmit-miconheading-style-1, .pbmit-service-style-3', main_row).removeClass('pbmit-mihbox-hover-active');
		jQuery('.pbmit-miconheading-style-1:nth-child(2), .pbmit-service-style-3:nth-child(2)', main_row).addClass('pbmit-mihbox-hover-active');
	});
}

// ** Pbmit Title Animation ** \\
function pbmit_title_animation() {

	ScrollTrigger.matchMedia({
		"(min-width: 991px)": function() {

		var pbmit_var = jQuery('.pbmit-heading, .pbmit-heading-subheading');
		if (!pbmit_var.length) {
			return;
		}
		const quotes = document.querySelectorAll(".pbmit-heading-subheading .pbmit-title, .pbmit-heading .pbmit-title");

			quotes.forEach(quote => {

				//Reset if needed
				if (quote.animation) {
					quote.animation.progress(1).kill();
					quote.split.revert();
				}

				var getclass = quote.closest('.pbmit-heading-subheading, .pbmit-heading').className;
				var animation = getclass.split('animation-');
				if (animation[1] === "style4") return

				quote.split = new SplitText(quote, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(quote, { perspective: 400 });

				if (animation[1] === "style1") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: "-40deg"
					});
				}
				if (animation[1] === "style2") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						x: "50"
					});
				}
				if (animation[1] === "style3") {
					gsap.set(quote.split.chars, {
						opacity: 0,
					});
				}
				quote.animation = gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
				});
			});
		},
	});
}

// ** Pbmit Card Verticel Pinning ** \\
function pbmit_card_verticel_pinning() {
	var pbmit_var = jQuery('.pbmit-element-card-box-style-1');
    if (!pbmit_var.length) {
        return;
    }
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let pbmitpanels = gsap.utils.toArray(".pbmit-element-card-box-style-1 .pbmit-card-box-wrapper");
			const spacer = 0;
		
			let pbmitheight = pbmitpanels[0].offsetHeight + 120;
			pbmitpanels.forEach((pbmitpanel, i) => {
			ScrollTrigger.create({
				trigger: pbmitpanel, 
				start: () => "top 100px", 
				endTrigger: '.pbmit-element-card-box-style-1', 
				end: `bottom top+=${pbmitheight + (pbmitpanels.length * spacer)}`,
				pin: true, 
				pinSpacing: false, 
			});
			});
		},
		"(max-width:992px)": function() {
			ScrollTrigger.getAll().forEach(pbmitpanels => pbmitpanels.kill(true));
		}
	});
}

function pbmit_sticky_special() {
	if (jQuery('.pbmit-sticky-col2-special').hasClass('.elementor-element-edit-mode')) {
		return;
	}
	ScrollTrigger.matchMedia({
		"(min-width: 1024px)": function() { 
			let pbmit_sticky_2 = jQuery(".pbmit-sticky-col2-special");
			let section = jQuery('.pbmit-sticky-special'); 
			let section_height = pbmit_sticky_2.height();
			const tweenOne = gsap.to(pbmit_sticky_2, {
				y: - (section_height - 950),
				scrollTrigger: {
				  trigger: section,
				  pin: section,
				  scrub: true,
				  start: "top top+=0",
				  end: () => '+=' + (section_height - 950),
				}
			}); 
		},
		"(max-width:1024px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	}); 
}

function pbmit_img_animation() {
    const boxes = gsap.utils.toArray('.pbmit-animation-style1,.pbmit-animation-style2,.pbmit-animation-style3,.pbmit-animation-style4,.pbmit-animation-style5,.pbmit-animation-style6');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}

function pbmit_splite_slide() {
	if (!jQuery(".pbmit-element-split-slide-style-1")[0]) {
		return
	}
	ScrollTrigger.matchMedia({
		"(min-width: 992px)": function() {

			let container = jQuery(".pbmit-element-split-slide-style-1 .pbmit-img");
			let section = jQuery(".pbmit-element-split-slide-style-1 .pbmit-element-split-slide-wrapper");
			var indicators = gsap.utils.toArray('.pbmit-element-split-slide-style-1 .pbmit-split-slide-item-image');
			var points = gsap.utils.toArray('.pbmit-element-split-slide-style-1 .pbmit-bg-imgbox .pbmit-split-slide-box');

			var gap = points.length * 30;

			let tl = gsap.timeline({
				scrollTrigger: {
					pin: true,
					scrub: 1,
					trigger: container,
					end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
					onUpdate: (self) => {
						let per = parseInt(self.progress * 100);
						if (per > 99) indicators[points.length - 1].classList.add('last');
						else indicators[points.length - 1].classList.remove('last');
						if (per < 1) indicators[0].classList.add('first');
						else indicators[0].classList.remove('first');

					}
				},
				defaults: { ease: "none", duration: 1 }
			});

			points.forEach((sct, i) => {
				let pos = indicators[i];
				ScrollTrigger.create({
					trigger: sct,
					start: "top center",
					end: () => '+=' + sct.offsetHeight,
					toggleClass: { targets: pos, className: "active" }
				});
			});
			jQuery('.pbmit-element-split-slide-style-1 .pbmit-bg-imgbox .pin-spacer .pbmit-split-slide-item-image:first-child').addClass('active');
		},
		"(max-width:991px)": function() {
			ScrollTrigger.getAll().forEach(pin => pin.kill(true));
		}
	});
}

ScrollTrigger.matchMedia({
	"(max-width: 1200px)": function() {
		ScrollTrigger.getAll().forEach(t => t.kill());
	}
});

function pbmt_vertical_snap() {

	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function() {

			const section = gsap.utils.toArray('.pbmit-element-verticle-snap-style-1 .pbmit-verticle-snap-style-1');
			ScrollTrigger.create({
				trigger: '.pbmit-element-verticle-snap-style-1',
				pin: '.pbmit-verticle-snap-bg-image',
				start: () => "top top",
				pinSpacing: false,
				end: () => "+=" + ((section.length - 1) * (window.innerHeight)),
				invalidateOnRefresh: true,
			});
		},
		"(max-width: 767px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

function pbmit_staticbox_hover() {
	var pbmit_var = jQuery('.pbmit-element-static-box-style-1, .pbmit-element-static-box-style-2, .pbmit-element-service-style-4');
	if (!pbmit_var.length) {
		return;
	}
	pbmit_var.each(function() {
		var pbmit_Class = '.pbmit-element-posts-wrapper > .pbmit-ele-static-box, .swiper-static-slide-nav li, .pbmit-hover-inner li, .pbmit-service-style-4';
		jQuery(this)
			.find(pbmit_Class).first()
			.addClass('pbmit-active');
		jQuery(this)
			.find(pbmit_Class)
			.on('mouseover', function() {
				jQuery(this).addClass('pbmit-active').siblings().removeClass('pbmit-active');
			});
	});
}

// ** Hover Image Effect ** \\
function pbmit_hover_img() {
	const pbmitHoverImg = gsap.utils.toArray(".pbmit-element-service-style-5 article");
	pbmitHoverImg.forEach((target) => {
		const pbmitImg = target.querySelector('.pbmit-hover-img');
		const t1 = gsap.timeline();
		let gap = 0;
		if (jQuery('body').hasClass('rtl')) {
			gap = 350; 
		}
		t1.to(pbmitImg, {
			opacity: 1,
			duration: 0.4,
			scale: 1,
			ease: "Power2.easeOut"
		})
	
		target.pbmitHoverAnim = t1.play().reversed(true);
		target.addEventListener("mouseenter", pbmithoverimg);
		target.addEventListener("mouseleave", pbmithoverimg);
		target.addEventListener("mousemove", (e) => {
			let xpos = e.offsetX;
			let ypos = e.offsetY;
			const t1 = gsap.timeline();
			t1.to(pbmitImg, { x: xpos - gap, y: ypos });
		});
	});

	function pbmithoverimg() {
		this.pbmitHoverAnim.reversed(!this.pbmitHoverAnim.reversed());
	}
}

function getpercentage(x, y, elm) { 
    elm.find('.pbmit-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}

// function pbmit_sprite_animation() {
//     ScrollTrigger.matchMedia({
//         "(min-width:767px)": function() {
//             if (!$('.pbmit-sprite-animation-pin').length) {
//                 return;
//             }
//             let pbmit_sprite_pin = document.querySelector(".pbmit-sprite-animation-pin"),
//                 pbmitSpriteAnim = pbmit_sprite_pin.querySelector(".pbmit-sprite-animation"),
//                 pbmitfc = pbmitSpriteAnim.getAttribute('data-frame-count'),
//                 pbmith = pbmitSpriteAnim.getAttribute('data-height');
//             pbmit_sprite_pin;

//             gsap.to(pbmitSpriteAnim, {
//                 backgroundPosition: (-pbmith * pbmitfc) + "px 50%",
//                 ease: "steps(" + pbmitfc + ")",
//                 scrollTrigger: {
//                     trigger: pbmit_sprite_pin,
//                     start: "top top",
//                     end: "+=" + (pbmitfc * 100),
//                     pin: true,
//                     scrub: true
//                 }
//             });
//         },
//         "(max-width:767px)": function() {
//             ScrollTrigger.getAll().forEach(pbmit_sprite_pin => pbmit_sprite_pin.kill(true));
//         }
//     });
// }

function pbmit_set_tooltip() {
    $('[data-cursor-tooltip]').each(function() {
        var thisele = $(this);
        var thisele_html = thisele.find('.pbminfotech-box-content').html();
        thisele.attr("data-cursor-tooltip", thisele_html);
    });
}

// function pbmit_action_box() {
// 	const pbmit_elm = gsap.utils.toArray('.pbmit-action-box-style-1.pbmit-action-box');
// 	if (pbmit_elm.length == 0) return

// 	ScrollTrigger.matchMedia({
// 		"(min-width: 768px)": function() {
// 			pbmit_elm.forEach((box, i) => {
// 				let tl = gsap.timeline({
// 					scrollTrigger: {
// 						trigger: box,
// 						pin: true,
// 						start: "top top",
// 						end: "+=700px",
// 						scrub: 1
// 					},
// 					defaults: { ease: "none" }
// 				});
//                 tl.fromTo(box.querySelector(".pbmit-action-box-wrap"), { clipPath: 'inset(10% 20% 20% 20%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 3 })
// 				tl.fromTo(box.querySelector(".pbmit-action-content"), { opacity: 0, y: "70%", }, { opacity: 1, y: 0, duration: 1.5 })
// 				tl.fromTo(box.querySelector(".pbmit-action-content"), { opacity: 1 }, { opacity: 1, duration: 5 })
// 			});
// 		}
// 	});
// }

// function pbmit_scroll_int() {
//     gsap.set(".pbmitmove-text1", { xPercent: -70 })
//     gsap.set(".pbmitmove-text2", { xPercent: 100 })

//     gsap.to(".pbmitmove-text1", {
//         xPercent: 20,
//         scrollTrigger: {
//             scrub: true,
//             start: "top bottom",
//             end: "bottom top",
//         }
//     });

//     gsap.to(".pbmitmove-text2", {
//         xPercent: -70,
//         scrollTrigger: {
//             trigger: ".pbmitmove-text1",
//             scrub: true,
//             start: "top bottom",
//             end: "bottom top",
//         }
//     });
// }

// function pbmit_sticky() {

//     ScrollTrigger.matchMedia({
//         "(min-width: 768px)": function() {

//             let pbmit_sticky_container = $(".pbmit-sticky-col");

//             let section = pbmit_sticky_container.closest('section');
//             if (!section[0]) {
//                 section = pbmit_sticky_container.closest('.pbmit-sticky-section');
//             }

//             let tl = gsap.timeline({
//                 scrollTrigger: {
//                     pin: true,
//                     scrub: 1,
//                     trigger: pbmit_sticky_container,
//                     end: () => "+=" + ((section.height() + 200) - document.documentElement.clientHeight)
//                 },
//                 defaults: { ease: "none", duration: 1 }
//             });
//         },
//     });
// }

ScrollTrigger.matchMedia({
	"(max-width: 1200px)": function() {
		ScrollTrigger.getAll().forEach(t => t.kill());
	}
});

// function pbmit_verticle_slide_image() {

//     ScrollTrigger.matchMedia({
//         "(min-width:768px)": function() {

//             const pbmitvar = document.querySelectorAll('.pbmit-vertical-box-style-1');
//             let totalheight = -300;
//             pbmitvar.forEach((section, index) => {
//                 totalheight += section.offsetHeight;
//                 gsap.to(section, {
//                     yPercent: -50,
//                     scrollTrigger: {
//                         trigger: section,
//                         scrub: 3
//                     }
//                 });
//             });

//             ScrollTrigger.create({
//                 trigger: ".pbmit-element-vertical-box-style-1 ",
//                 pin: '.pbmit-element-vertical-box-style-1 .pbmit-heading ',
//                 start: () => "top top",
//                 end: () => "+=" + totalheight,
//                 invalidateOnRefresh: false,
//             });
//         }
//     });
// }

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});

// on ready
$(document).ready(function() {
    pbmit_staticbox_hover();
	pbmit_title_animation();
});

// on resize
$(window).resize(function() {
	pbmit_title_animation();
});

// on load
$(window).on('load', function(){
	pbmit_multi_icon_box_hover_effect();
	pbmit_card_verticel_pinning();
	pbmit_sticky_special(); 
	pbmit_img_animation();
	pbmit_splite_slide();
	pbmt_vertical_snap();
    pbmit_hover_img();
    // pbmit_sprite_animation();
    // pbmit_sticky();
	// pbmit_splite_slide()
    // pbmit_set_tooltip();
    // pbmit_action_box();
    // pbmit_scroll_int();
    // pbmit_verticle_slide_image();
	// pbmit_card_verticel_pinning();	
	setTimeout(cleaning, 500);
	function cleaning(){
		ScrollTrigger.refresh(); 
	}

	// // Init cursor
    // const cursor = new Cursor();
    // $('[data-magnetic]').each(function() { new Magnetic(this); });
    // gsap.delayedCall(1, () =>
    //     ScrollTrigger.getAll().forEach((t) => {
    //         t.refresh();
    //     })
    // );
});


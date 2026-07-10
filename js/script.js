// ===============================
// ELEMENTS
// ===============================



const mainContent = document.getElementById("main-content");
const priceTag = document.getElementById("price-tag");
const mgrLogo = document.getElementById("mgr-logo");

let interactionTriggered = false;


// ===============================
// PAPER REVEAL ANIMATION
// ===============================










// ===============================
// LOGO PARALLAX
// ===============================

mgrLogo.addEventListener("mousemove", (e) => {

    const rect = mgrLogo.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 6;
    const rotateY = (x - centerX) / 6;

    gsap.to(mgrLogo, {

        rotateX,
        rotateY,
        transformPerspective: 600,
        ease: "power2.out",
        duration: 0.3

    });

});



mgrLogo.addEventListener("mouseleave", () => {

    gsap.to(mgrLogo, {

        rotateX: 0,
        rotateY: 0,
        ease: "power3.out",
        duration: 0.6

    });

});




// ===============================
// TRUST BADGES
// ===============================

const badges = document.querySelectorAll(".badge-card");

const badgeModal = document.getElementById("badge-modal");

const modalIcon = document.getElementById("modal-icon");

const modalTitle = document.getElementById("modal-title");

const modalDesc = document.getElementById("modal-desc");

const modalClose = document.getElementById("modal-close");




// Badge information

const trustDetails = [

{

title: "Certified Condition",

desc: "100-point inspection with premium quality assurance.",

icon: "✔️"

},

{

title: "GST Billing",

desc: "Comes with GST Bill and Store Warranty.",

icon: "📄"

},

{

title: "Bonus Gifts",

desc: "Includes Charger, Cable and Tempered Glass.",

icon: "🎁"

}

];




// Hover Animation

badges.forEach((badge, index) => {

badge.addEventListener("mouseenter", () => {

gsap.to(badge, {

scale: 1.05,

y: -5,

duration: .25

});

});


badge.addEventListener("mouseleave", () => {

gsap.to(badge, {

scale: 1,

y: 0,

duration: .25

});

});




// Click

badge.addEventListener("click", () => {

const info = trustDetails[index];

modalIcon.innerHTML = info.icon;

modalTitle.innerHTML = info.title;

modalDesc.innerHTML = info.desc;

badgeModal.classList.remove(

"opacity-0",

"pointer-events-none"

);

badgeModal.querySelector("div").classList.remove("scale-90");

badgeModal.querySelector("div").classList.add("scale-100");

});

});




// Close Modal

modalClose.addEventListener("click", () => {

badgeModal.classList.add(

"opacity-0",

"pointer-events-none"

);

badgeModal.querySelector("div").classList.remove("scale-100");

badgeModal.querySelector("div").classList.add("scale-90");

});

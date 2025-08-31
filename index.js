// // ========== NAVBAR ==========
// const btnSignIn = document.querySelector(".btn-nav.login");
// const btnSignUp = document.querySelector(".btn-nav.signup");
// const authModal = document.getElementById("authModal");
// const closeModalBtn = document.getElementById("closeModal");

// const showLoginBtn = document.getElementById("showLogin");
// const showSignupBtn = document.getElementById("showSignup");

// const loginForm = document.getElementById("loginForm");
// const signupForm = document.getElementById("signupForm");

// // Open Login Modal
// if (btnSignIn) {
//   btnSignIn.addEventListener("click", () => {
//     console.log("signin");
    
//     authModal.classList.remove("hidden");
//     showLoginBtn.classList.add("active");
//     showSignupBtn.classList.remove("active");
//     loginForm.classList.remove("hidden");
//     signupForm.classList.add("hidden");
//   });
// }

// // Open Signup Modal
// if (btnSignUp) {
//   console.log("singup");
  
//   btnSignUp.addEventListener("click", () => {
//     authModal.classList.remove("hidden");
//     showSignupBtn.classList.add("active");
//     showLoginBtn.classList.remove("active");
//     signupForm.classList.remove("hidden");
//     loginForm.classList.add("hidden");
//   });
// }

// // Close Modal
// if (closeModalBtn) {
//   closeModalBtn.addEventListener("click", () => {
//     authModal.classList.add("hidden");
//   });
// }

// // Toggle between Login & Signup inside modal
// if (showLoginBtn && showSignupBtn) {
//   showLoginBtn.addEventListener("click", () => {
//     loginForm.classList.remove("hidden");
//     signupForm.classList.add("hidden");
//     showLoginBtn.classList.add("active");
//     showSignupBtn.classList.remove("active");
//   });

//   showSignupBtn.addEventListener("click", () => {
//     signupForm.classList.remove("hidden");
//     loginForm.classList.add("hidden");
//     showSignupBtn.classList.add("active");
//     showLoginBtn.classList.remove("active");
//   });
// }

// // ========== LOGIN ==========
// if (loginForm) {
//   loginForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const username = loginForm.querySelector("input[type='text']").value;
//     const password = loginForm.querySelector("input[type='password']").value;

//     try {
//       const response = await fetch("https://dummyjson.com/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password })
//       });

//       const data = await response.json();
//       console.log("Login response:", data);

//       if (response.ok) {
//         alert("✅ Login successful! Welcome " + data.username);
//         localStorage.setItem("user", JSON.stringify(data)); // save login
//         authModal.classList.add("hidden");
//       } else {
//         alert("❌ Login failed: " + (data.message || "Invalid credentials"));
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert("⚠️ Something went wrong. Try again.");
//     }
//   });
// }

// // ========== SIGNUP ==========
// if (signupForm) {
//   signupForm.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const name = signupForm.querySelector("input[placeholder='Full Name']").value;
//     const email = signupForm.querySelector("input[type='email']").value;
//     const password = signupForm.querySelector("input[type='password']").value;

//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password })
//       });

//       const data = await response.json();
//       console.log("Signup response:", data);

//       if (response.ok) {
//         alert("✅ Signup successful!");
//         localStorage.setItem("user", JSON.stringify(data)); // save signup
//         authModal.classList.add("hidden");
//       } else {
//         alert("❌ Signup failed.");
//       }
//     } catch (err) {
//       console.error("Signup error:", err);
//       alert("⚠️ Something went wrong during signup.");
//     }
//   });
// }

// // ========== SMOOTH SCROLL ==========
// document.querySelectorAll("a[href^='#']").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });

// // ========== BACK TO TOP BUTTON ==========
// const backToTop = document.createElement("button");
// backToTop.innerText = "↑ Top";
// backToTop.id = "backToTop";
// document.body.appendChild(backToTop);

// backToTop.style.position = "fixed";
// backToTop.style.bottom = "20px";
// backToTop.style.right = "20px";
// backToTop.style.padding = "10px 15px";
// backToTop.style.border = "none";
// backToTop.style.borderRadius = "6px";
// backToTop.style.background = "#007bff";
// backToTop.style.color = "#fff";
// backToTop.style.cursor = "pointer";
// backToTop.style.display = "none";

// // Show/hide button on scroll
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 200) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// });

// // Smooth scroll to top
// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });
document.addEventListener("DOMContentLoaded", () => {
  const authModal = document.getElementById("authModal");
  const closeModal = document.getElementById("closeModal");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const showLogin = document.getElementById("showLogin");
  const showSignup = document.getElementById("showSignup");

  const openLoginBtn = document.getElementById("openLogin");
  const openSignupBtn = document.getElementById("openSignup");

  // Open modal with Login form
  openLoginBtn.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    showLogin.classList.add("active");
    showSignup.classList.remove("active");
  });

  // Open modal with Signup form
  openSignupBtn.addEventListener("click", () => {
    authModal.classList.remove("hidden");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    showSignup.classList.add("active");
    showLogin.classList.remove("active");
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    authModal.classList.add("hidden");
  });

  // Switch to Login
  showLogin.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    showLogin.classList.add("active");
    showSignup.classList.remove("active");
  });

  // Switch to Signup
  showSignup.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    showSignup.classList.add("active");
    showLogin.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
        const langOptions = document.querySelectorAll(".changelanguage p");

        langOptions.forEach(lang => {
            lang.addEventListener("click", () => {
                // Зняти активний клас з усіх
                langOptions.forEach(l => l.classList.remove("active"));

                // Додати активний клас до вибраного
                lang.classList.add("active");

                // Якщо потрібно, зберегти в локальному сховищі
                localStorage.setItem("preferredLang", lang.textContent);
            });
        });

        // Відновити вибрану мову при завантаженні
    
    });
    
    

 document.getElementById("myBtn").onclick = function () {
    location.href = "polonini.html";
  };
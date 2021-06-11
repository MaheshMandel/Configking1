const doc = document.querySelector(".row");
const showMore = document.querySelector(".showmore-link");

showMore.addEventListener("click", (e) => {
  e.preventDefault();

  const data = ` <!--Update your code below here-->

    <div class="box">
        <div class="box-content">
            <h3 class="title">
                korean file title 1 <!--replace "Lorem ipsum dolor sit." with your title-->
            </h3>
            <p class="description"> <!--describe your file here-->
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, perspiciatis. Lorem ipsum dolor sit amet.
            </p>
            <a href="" class="download-link"> <!--add your download link in href=" " -->
                Download Now
            </a>
        </div>
    </div>

    
    <!-- Dont change anything below this (copy paste your code above)-->
  `;

  doc.innerHTML = data;
  document.getElementById("disapear").style.display = "none";
});

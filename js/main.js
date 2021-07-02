// Materialize jQuery Plugin Initialization.
$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $(".modal").modal();
});

// Materialize Form Submission
document.getElementById("myForm").onsubmit = function (e) {
  e.preventDefault();

  let formSubmission = (function () {
    /* ----- Header Section ----- */

    // 1. Profile Picture
    let pic = document.querySelector("div.img-circle");
    let newPic = document.createElement("div");
    let userPic = document.getElementById("profile_picture").value;
    if (userPic !== "") {
      newPic.className = "img-circle";
      newPic.style.backgroundImage = "url(" + userPic + ")";
      pic.parentNode.replaceChild(newPic, pic);
    } else {
      pic.remove();
    }

    // 2. Name
    let name = document.querySelector("h4.oneline-overflow");
    let title = document.querySelector("title");
    let userName = document.getElementById("name").value;
    if (userName !== "") {
      name.textContent = userName;
      title.textContent = userName + " Personal Web-Card";
    } else {
      name.remove();
    }

    // 3. Heading
    let heading = document.querySelector("h5.oneline-overflow");
    let userHeading = document.getElementById("heading").value;
    if (userHeading !== "") {
      heading.textContent = userHeading;
    } else {
      heading.remove();
    }

    // If 2 and 3 are empty, remove hr
    // If 2 or 3 are empty and pic is not empty, remove hr
    let hr = document.querySelector("hr.double-hr");
    if (userName === "" && userHeading === "") {
      hr.remove();
    }
    if ((userName === "" || userHeading === "") && userPic !== "") {
      hr.remove();
    }

    /* ----- Body Section ----- */

    // 4. Summary
    let summary = document.querySelector("p.p-spacing");
    let userSummary = document.getElementById("summary").value;
    if (userSummary !== "") {
      summary.textContent = userSummary;
    } else {
      summary.remove();
    }

    // 5. Linkedin Icon
    let linkedin = document.querySelector("a.linkedin");
    let userLinkedin = document.getElementById("linkedin_url").value;
    if (userLinkedin !== "") {
      linkedin.href = userLinkedin;
    } else {
      linkedin.remove();
    }

    // 6. Angellst Icon
    let angellist = document.querySelector("a.angellist");
    let userAngellist = document.getElementById("angellist_url").value;
    if (userAngellist !== "") {
      angellist.href = userAngellist;
    } else {
      angellist.remove();
    }

    // 7. PH Icon
    let producthunt = document.querySelector("a.product-hunt");
    let userProductHunt = document.getElementById("ph_url").value;
    if (userProductHunt !== "") {
      producthunt.href = userProductHunt;
    } else {
      producthunt.remove();
    }

    // 7. Github Icon
    let github = document.querySelector("a.github");
    let userGithub = document.getElementById("github_url").value;
    if (userGithub !== "") {
      github.href = userGithub;
    } else {
      github.remove();
    }

    // 8. Medium Icon
    let medium = document.querySelector("a.medium");
    let userMedium = document.getElementById("medium_url").value;
    if (userMedium !== "") {
      medium.href = userMedium;
    } else {
      medium.remove();
    }

    // 9. Twitter Icon
    let twitter = document.querySelector("a.twitter");
    let userTwitter = document.getElementById("twitter_url").value;
    if (userTwitter !== "") {
      twitter.href = userTwitter;
    } else {
      twitter.remove();
    }

    // 10. Instagram Icon
    let ig = document.querySelector("a.instagram");
    let userIG = document.getElementById("instagram_url").value;
    if (userIG !== "") {
      ig.href = userIG;
    } else {
      ig.remove();
    }

    /* ----- Contact Section ----- */

    // 11. Call Button
    let callButton = document.getElementById("call");
    let userNumber = document.getElementById("number").value;
    if (userNumber !== "") {
      callButton.href = "tel:" + userNumber;
    } else {
      callButton.remove();
    }

    // 12. Email Button
    let emailButton = document.getElementById("email");
    let userEmail = document.getElementById("emailaddress").value;
    if (userEmail !== "") {
      emailButton.href = "mailto:" + userEmail;
    } else {
      emailButton.remove();
    }

    /* ----- Background ----- */
    let userColor = document.getElementById("bg_color").value;
    if (bg_color !== "") {
      document.body.style.background = userColor;
    }
  })();

  return false;
};

// Download HTML file
document.getElementById("dwn-btn").addEventListener(
  "click",
  function () {
    let text = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
    let filteredText = text.replace(/<cutme>([\s\S]*?)<\/cutme>/g, "");
    let filteredText2 = filteredText.replace(
      /<script src=\"https:\/\/www.linkedin.com\/([\s\S]*?)<\/head>/g,
      "</head>"
    );
    let filteredText3 = filteredText2.replace(
      /<div class="hiddendiv common">([\s\S]*?)<\/html>/g,
      "</body></html>"
    );
    let filename = "index.html";

    let download = function (filename, text) {
      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
    download(filename, filteredText3);
  },
  false
);

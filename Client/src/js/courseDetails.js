const tabContainer = document.getElementById("tabContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    tabContainer.scrollTo({
      left: currentIndex * 100, // Adjust the button width as needed
      behavior: "smooth",
    });
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < tabContainer.children.length - 1) {
    currentIndex++;
    tabContainer.scrollTo({
      left: currentIndex * 100, // Adjust the button width as needed
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const curriculumTab = document.getElementById("Curriculum");
  const aboutTab = document.getElementById("About");
  const memberTab = document.getElementById("Members");
  const instructorsTab = document.getElementById("Instructors");
  const groupTab = document.getElementById("Group");
  const newsTab = document.getElementById("News");
  const reviewsTab = document.getElementById("Reviews");
  const curriculumContent = document.getElementById("curriculumContent");
  const aboutContent = document.getElementById("aboutContent");
  const membersContent = document.getElementById("membersContent");
  const instructorsContent = document.getElementById("instructorsContent");
  const groupContent = document.getElementById("groupContent");
  const newsContent = document.getElementById("newsContent");
  const reviewsContent = document.getElementById("reviewsContent");

  curriculumTab.addEventListener("click", function () {
    curriculumContent.style.display = "block";
    aboutContent.style.display = "none";
    membersContent.style.display = "none";
    instructorsContent.style.display = "none";
    groupContent.style.display = "none";
    newsContent.style.display = "none";
    reviewsContent.style.display = "none";
  });

  aboutTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "block";
    membersContent.style.display = "none";
    instructorsContent.style.display = "none";
    groupContent.style.display = "none";
    newsContent.style.display = "none";
    reviewsContent.style.display = "none";
  });

  memberTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "none";
    membersContent.style.display = "block";
    instructorsContent.style.display = "none";
    groupContent.style.display = "none";
    newsContent.style.display = "none";
    reviewsContent.style.display = "none";
  });

  instructorsTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "none";
    membersContent.style.display = "none";
    instructorsContent.style.display = "block";
    groupContent.style.display = "none";
    newsContent.style.display = "none";
    reviewsContent.style.display = "none";
  });

  groupTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "none";
    membersContent.style.display = "none";
    instructorsContent.style.display = "none";
    groupContent.style.display = "block";
    newsContent.style.display = "none";
    reviewsContent.style.display = "none";
  });

  newsTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "none";
    membersContent.style.display = "none";
    instructorsContent.style.display = "none";
    groupContent.style.display = "none";
    newsContent.style.display = "block";
    reviewsContent.style.display = "none";
  });

  reviewsTab.addEventListener("click", function () {
    curriculumContent.style.display = "none";
    aboutContent.style.display = "none";
    membersContent.style.display = "none";
    instructorsContent.style.display = "none";
    groupContent.style.display = "none";
    newsContent.style.display = "none";
    reviewsContent.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.getElementById("Reviews");
  const curriculum = document.getElementById("Curriculum");
  const about = document.getElementById("About");
  const members = document.getElementById("Members");
  const instructor = document.getElementById("Instructors");
  const group = document.getElementById("Group");
  const news = document.getElementById("News");

  reviews.addEventListener("click", function () {
    reviews.style.backgroundColor = "#838c48";
    reviews.style.color = "#ffffff";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  curriculum.addEventListener("click", function () {
    curriculum.style.backgroundColor = "#838c48";
    curriculum.style.color = "#ffffff";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  about.addEventListener("click", function () {
    about.style.backgroundColor = "#838c48";
    about.style.color = "#ffffff";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  members.addEventListener("click", function () {
    members.style.backgroundColor = "#838c48";
    members.style.color = "#ffffff";
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  instructor.addEventListener("click", function () {
    instructor.style.backgroundColor = "#838c48";
    instructor.style.color = "#ffffff";
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  group.addEventListener("click", function () {
    group.style.backgroundColor = "#838c48";
    group.style.color = "#ffffff";
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    news.style.backgroundColor = "#f5e9d4";
    news.style.color = "#374151";
  });

  news.addEventListener("click", function () {
    about.style.backgroundColor = "#f5e9d4";
    about.style.color = "#374151";
    reviews.style.backgroundColor = "#f5e9d4";
    reviews.style.color = "#374151";
    curriculum.style.backgroundColor = "#f5e9d4";
    curriculum.style.color = "#374151";
    members.style.backgroundColor = "#f5e9d4";
    members.style.color = "#374151";
    instructor.style.backgroundColor = "#f5e9d4";
    instructor.style.color = "#374151";
    group.style.backgroundColor = "#f5e9d4";
    group.style.color = "#374151";
    news.style.backgroundColor = "#838c48";
    news.style.color = "#ffffff";
  });
});

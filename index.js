document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".portfolio-box");

    boxes.forEach(box => {
        const thumbnail = box.querySelector(".video_thumbnail");
        const video = box.querySelector(".project_video");

        thumbnail.addEventListener("click", () => {
            thumbnail.style.display = "none";
            video.style.display = "block";
            video.currentTime = 0;
            video.play();
        });

        video.addEventListener("ended", () => {
            video.style.display = "none";
            thumbnail.style.display = "block";
        });
    });
});
